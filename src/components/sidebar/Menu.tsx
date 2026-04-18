import { FC } from 'react';
import { X, Highlighter } from 'lucide-react';
import List from '../ui/List';
import { useModal, useMenu } from '../Provider';
import { navigationLinks, socialLinks } from '@/data/navigation';

interface MenuProps {}

const Menu: FC<MenuProps> = ({ }) => {
  const { showMenuVisibility } = useMenu();
  const { openModal } = useModal();

  return (
    <div
      className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
      onClick={() => showMenuVisibility(false)}
    >
      <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
        <X className={`text-primary`} />
      </div>

      {/* Main Navigation */}
      <div className="flex flex-col gap-2">
        {navigationLinks.map((item, index) => (
          <div 
            key={index} 
            onClick={() => item.type === 'modal' && item.modalType ? openModal(item.modalType as any) : null}
          >
            <List
              link={item.href || ''}
              effect="slideUp"
            >
              <item.icon /> {item.name}
            </List>
          </div>
        ))}
      </div>

      <List effect="slideUp">
        <Highlighter /> Scroll down for Projects
      </List>

      {/* Social Links */}
      <div className="mt-8 mb-2 px-2 text-xs font-bold uppercase tracking-widest text-zinc-500">Socials</div>
      <div className="flex flex-col gap-2">
        {socialLinks.map((social, index) => (
          <List 
            key={index}
            target="_blank" 
            link={social.href} 
            effect="slideUp"
          >
            <social.icon color={social.color} /> {social.name}
          </List>
        ))}
      </div>
    </div>
  );
};

export default Menu;
