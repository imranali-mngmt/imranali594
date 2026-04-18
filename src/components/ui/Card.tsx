import Image from 'next/image';
import { FC } from 'react';
import List from './List';
import { Code, History } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
    title: string;
    snippetCount: number;
    exp: string;
    src: string;
    progress: number;
    href?: string;
}

const Card: FC<CardProps> = ({
    title,
    snippetCount,
    exp,
    src,
    href,
    progress,
}) => {
    return (
        <div className="flex flex-col gap-3">
            <Link target="_blank" href={href || '/'}>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                    <div className="progress-bar">
                        <div
                            className="h-full bg-btnHighlight"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>
            </Link>
            <div className="grid gap-2 px-2 pb-2">
                <div className="text-highlight font-bold">{title}</div>
            </div>
        </div>
    );
};

export default Card;
