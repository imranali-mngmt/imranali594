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
        <div className="flex flex-col gap-4 bg-[#1a1921] border border-white/5 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300">
            <Link target="_blank" href={href || '#'}>
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            </Link>
            <div className="flex flex-col px-4 pb-5 gap-2">
                <div className="text-white font-bold text-base leading-tight">{title}</div>
                <div className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                    {exp}
                </div>
            </div>
        </div>
    );
};

export default Card;
