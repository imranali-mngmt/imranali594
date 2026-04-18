import List from '@/components/ui/List';
import { Eye, Flame, Hand, Highlighter, Mail, ThumbsUp, User, Video } from 'lucide-react';
import { FC } from 'react';
import { personalInfo } from '@/user.config';

interface StatsProps {}

const Stats: FC<StatsProps> = ({}) => {
    return (
        <div className="hidden md:flex flex-col w-max px-4 gap-5 text-info">
            <List sizes="xs" className="gap-4">
                <User size={16} />
                <span>
                    <b className="text-secondary">{personalInfo.name}</b>
                </span>
            </List>
            <List sizes="xs" className="gap-4">
                <Flame size={16} />
                <span>
                    <b className="text-secondary">{personalInfo.title}</b>
                </span>
            </List>
            <List sizes="xs" className="gap-4">
                <Mail size={16} />
                <span>
                    <b className="text-secondary text-xs truncate max-w-[150px]">
                        {personalInfo.hideSensitiveInfo ? 'Click "Contact Me" to see email' : personalInfo.email}
                    </b>
                </span>
            </List>
            <List sizes="xs" className="gap-4">
                <Highlighter size={16} />
                <span>
                    <b className="text-secondary">Discuss some Project</b>
                </span>
            </List>
        </div>
    );
};

export default Stats;
