import { FC } from 'react';
import Card from '../ui/Card';
import { ISectionCardData } from '../utils/Data';

interface CardSectionProps {
    title: string;
    id?: string;
    data: ISectionCardData[];
}

const CardSection: FC<CardSectionProps> = ({ title, id, data }) => {
    return (
        <section 
            id={id} 
            className="grid gap-6 p-5 md:p-0 scroll-mt-24"
        >
            <div className="flex items-center gap-3">
              <div className="h-8 w-1.5 bg-primary rounded-full" />
              <div className="text-2xl font-bold text-white tracking-tight">{title}</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {data.map((card) => (
                    <Card
                        href={card.href}
                        key={card.id}
                        title={card.title}
                        src={card.src}
                        exp={card.exp}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
