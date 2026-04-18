'use client';
import { FC } from 'react';
import { useModal } from './Provider';
import { X } from 'lucide-react';
import { aboutMe } from '@/user.config';

const AboutModal: FC = () => {
    const { activeModal, closeModal } = useModal();

    if (activeModal !== 'about') return null;

    return (
        <div
            className="h-screen bg-black/80 backdrop-filter backdrop-blur-md w-screen fixed top-0 left-0 z-50 flex items-center justify-center p-5 transition-all duration-300"
            onClick={closeModal}
        >
            <div
                className="bg-[var(--card-primary)] p-8 rounded-2xl max-w-2xl w-full text-[var(--text-primary)] relative shadow-2xl border border-zinc-800 transform transition-all animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={closeModal}
                    className="absolute right-5 top-5 text-zinc-400 hover:text-[var(--btn-highlight)] transition-colors"
                >
                    <X size={24} />
                </button>
                <h2 className="text-3xl font-bold text-[var(--text-highlight)] mb-6 border-b border-zinc-800 pb-4">{aboutMe.title}</h2>
                <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap text-lg">
                    {aboutMe.content}
                </div>
            </div>
        </div>
    );
};

export default AboutModal;
