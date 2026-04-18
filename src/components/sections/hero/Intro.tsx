import List from '@/components/ui/List';
import { Eye, Heart, HeartHandshake, History, ThumbsUp, Timer, TimerIcon } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import { personalInfo } from '@/user.config';

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    return (
        <div className="flex flex-1 flex-col gap-7">
            <div className="flex flex-col justify-between flex-1 p-5 md:p-0">
                <div className="flex flex-col gap-4 ">
                    <div className="text-2xl text-highlight font-semibold">
                         Professional Summary
                    </div>
                    <div className="flex gap-4">
                        <List variant="info" sizes="xs">
                            <HeartHandshake size={16} />
                            {personalInfo.role}
                        </List>
                        <List variant="info" sizes="xs">
                            <Timer size={16} /> {personalInfo.experience}
                        </List>
                        <List variant="info" sizes="xs">
                            <ThumbsUp size={16} /> {personalInfo.title}
                        </List>
                    </div>
                </div>
                <div className="text-secondary text-sm mt-5 md:mt-2 max-w-full leading-relaxed">
                    {personalInfo.summary}
                </div>
            </div>
        </div>
    );
};

export default Intro;
