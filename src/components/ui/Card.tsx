import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

interface CardProps {
    title: string;
    src: string;
    exp: string;
    href?: string;
}

const Card: FC<CardProps> = ({
    title,
    src,
    exp,
    href,
}) => {
    return (
        <div className="group h-full flex flex-col gap-4 bg-[#1a1921] border border-white/5 rounded-2xl overflow-hidden hover:border-brand/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/10">
            <Link target="_blank" href={href || '#'}>
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </Link>
            <div className="flex flex-col px-5 pb-6 gap-2">
                <div className="text-white font-bold text-lg leading-tight group-hover:text-brand transition-colors duration-300">
                    {title}
                </div>
                <div className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                    {exp}
                </div>
            </div>
        </div>
    );
};

export default Card;
