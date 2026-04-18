import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { Linkedin } from 'lucide-react';
import { personalInfo, links } from '@/user.config';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-3xl flex flex-col font-bold text-highlight">
            {personalInfo.name}
            <div className="text-sm font-thin flex justify-between items-center">
                {personalInfo.hideSensitiveInfo ? 'Email hidden for privacy' : personalInfo.email}
                <Link
                    className="block md:hidden"
                    href={links.linkedin}
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <Linkedin />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileName;
