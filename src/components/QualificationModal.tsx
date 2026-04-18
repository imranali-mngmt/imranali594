'use client';
import { FC } from 'react';
import { useModal } from './Provider';
import { X, GraduationCap, Calendar } from 'lucide-react';
import { qualifications } from '@/user.config';

const QualificationModal: FC = () => {
    const { activeModal, closeModal } = useModal();

    if (activeModal !== 'qualification') return null;

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
                <h2 className="text-3xl font-bold text-[var(--text-highlight)] mb-8 flex items-center gap-3 border-b border-zinc-800 pb-4">
                    <GraduationCap className="text-[var(--btn-highlight)]" /> Qualifications
                </h2>
                <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                    {qualifications.map((q, index) => (
                        <div key={index} className="border-l-2 border-[var(--btn-highlight)] pl-6 py-2">
                            <h3 className="text-xl font-semibold text-[var(--text-highlight)]">{q.degree}</h3>
                            <p className="text-[var(--btn-highlight)] font-medium mb-2">{q.institution}</p>
                            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                                <Calendar size={14} /> {q.period}
                            </div>
                            <p className="text-zinc-300">{q.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QualificationModal;
