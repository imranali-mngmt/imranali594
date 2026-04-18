'use client';
import {
    FC,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

interface ModalProviderProps {
    children: ReactNode;
}

type ModalType = 'contact' | 'about' | 'qualification' | null;

const ModalContext = createContext({
    activeModal: null as ModalType,
    openModal: (type: ModalType) => {},
    closeModal: () => {},
});

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const openModal = (type: ModalType) => {
        setActiveModal(type);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setActiveModal(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);

// Keep useContact as a wrapper for backward compatibility if needed, but we'll migrate
export const useContact = () => {
    const { activeModal, openModal, closeModal } = useModal();
    return {
        showForm: activeModal === 'contact',
        setFormVisibility: () => (activeModal === 'contact' ? closeModal() : openModal('contact')),
    };
};

interface MenuProviderProps {
    children: ReactNode;
}

const MenuContext = createContext({
    showMenu: false,
    showMenuVisibility: (status: boolean) => {},
});

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        showMenu
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    }, [showMenu]);

    const showMenuVisibility = (status: boolean) => {
        setShowMenu(status);
    };
    return (
        <MenuContext.Provider value={{ showMenu, showMenuVisibility }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => useContext(MenuContext);



