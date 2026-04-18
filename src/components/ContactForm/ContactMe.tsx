

import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin, X, Github } from 'lucide-react';
import { personalInfo, links } from '@/user.config';

const ContactMe = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <button onClick={() => setShowForm(true)}> Imran</button>
      {showForm && (
        <section style={{ fontFamily: 'Montserrat' }} className="bg-[#071e34] flex font-medium items-center justify-center h-screen">
          <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg" onClick={() => setShowForm(false)}>
          <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">2d ago</span>
              <span className="text-emerald-400">
                
                  <X className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </X>
              </span>
          </div>
          <div className="mt-6 w-fit mx-auto">
              <Image src="/images/cat.png" className="rounded-full w-28 h-28" alt="profile picture" width={120} height={120} />
          </div>

          <div className="mt-8 ">
              <h2 className="text-white font-bold text-2xl tracking-wide">{personalInfo.name}</h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5" >
              {personalInfo.title}
          </p>
          <div className="mt-3 text-white text-sm flex">
  <div className="ml-3">
    <a href={links.github} target="_blank" className="text-gray-400 hover:text-blue-400 transition duration-500 ease-in-out">
      <Github size={18} /> 
    </a>
  </div>
  <div className="ml-3">
    <a href={links.linkedin} target="_blank" className="text-gray-400 hover:text-blue-600 transition duration-500 ease-in-out">
      <Linkedin size={18} /> 
    </a>
  </div>
</div>
          </section>
        </section>
      )}
    </>
  );
};

export default ContactMe;

