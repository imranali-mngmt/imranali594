import './globals.css';
import type { Metadata } from 'next';
import SideBar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import AboutModal from '@/components/AboutModal';
import QualificationModal from '@/components/QualificationModal';
import { ModalProvider, MenuProvider } from '@/components/Provider';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    title: 'Imran Ali',
    description: 'Personal Portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <MenuProvider>
                    <ModalProvider>
                        <ContactForm />
                        <AboutModal />
                        <QualificationModal />
                        <Toaster />
                        <div className="flex">
                            <SideBar />
                            <main className="flex-1 pl-0 lg:pl-[300px]">
                                <Navbar />
                                {children}
                            </main>
                        </div>
                    </ModalProvider>
                </MenuProvider>
            </body>
        </html>
    );
}
