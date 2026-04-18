import { FC } from 'react';
import Card from '../ui/Card';
import { ISectionCardData } from '../utils/Data';

interface CardSectionProps {
    title: string;
    id?: string;
    data: ISectionCardData[];
}

const CardSection: FC<CardSectionProps> = ({ title, id, data }) => {
    const getGridCols = (count: number) => {
        if (count === 1) return 'grid-cols-1';
        if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
        if (count === 3) return 'grid-cols-1 sm:grid-cols-3';
        if (count === 4) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5';
    };

    return (
        <section
            id={id}
            className="grid gap-6 p-5 md:p-0 scroll-mt-24"
        >
            <div className="flex items-center gap-3">
                <div className="h-8 w-1.5 bg-brand rounded-full" />
                <div className="text-2xl font-bold text-white tracking-tight">{title}</div>
            </div>
            <div className={`grid ${getGridCols(data.length)} gap-8`}>
                {data.map((card) => {
                    const cardId = card.title.toLowerCase().replace(/\s+/g, '-');
                    return (
                        <div id={cardId} key={card.id}>
                            <Card
                                href={card.href}
                                title={card.title}
                                src={card.src}
                                exp={card.exp}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default CardSection;
