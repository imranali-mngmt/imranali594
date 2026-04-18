'use client';
import { FC } from 'react';
import Logo from './sidebar/Logo';
import Menu from './sidebar/Menu';
import Search from './sidebar/Search';
import { useMenu } from './Provider';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
    const { showMenu } = useMenu();
    return (
        <aside
            className={`${
                showMenu ? 'flex' : 'hidden'
            } lg:flex h-screen fixed w-screen sm:w-[300px] z-30`}
        >
            {/* Sidebar Container */}

            <div className="toggle flex flex-col lg:m-5 w-full">
                <Logo />
                <Search />
                <Menu />
            </div>
        </aside>
    );
};

export default SideBar;
