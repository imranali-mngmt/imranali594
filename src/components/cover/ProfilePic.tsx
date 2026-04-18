import Image from 'next/image';
import { FC } from 'react';
import { personalInfo } from '@/user.config';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="">
            <Image
                alt={personalInfo.name}
                src={personalInfo.profilePic}
                height={120}
                width={120}
                className="w-24 h-24 object-cover border-4 border-white rounded-full shadow-md"
            />
        </div>
    );
};

export default ProfilePic;
