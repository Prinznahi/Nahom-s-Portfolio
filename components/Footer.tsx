import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';
import { GrCertificate } from 'react-icons/gr';

const socialMedia = [
  { id: 'phone', icon: <FaPhone />, url: 'tel:+251941515665' },
  { id: 'upwork', icon: <FaUpwork />, url: 'https://www.upwork.com/freelancers/~01349f74f7901c56a9' },
  { id: 'linkedin', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/nahom-teshome-581042293/' },
  { id: 'github', icon: <FaGithub />, url: 'https://github.com/Prinznahi' },
  { id: 'certificates', icon: <GrCertificate />, url: 'https://drive.google.com/drive/folders/1lNI7fFdlXbq3oDmD_wmFV1BrCefBHN-y?usp=drive_link' }
];

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple'>your</span> digital presence to the next level?</h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
        <a href="mailto:nahomtesh.t@gmail.com">
          <MagicButton 
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className='flex justify-center items-center gap-4 mt-8'>
        {socialMedia.map((profile) => (
          <a key={profile.id} href={profile.url} target="_blank" rel="noopener noreferrer">
            <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
              {profile.icon}
            </div>
          </a>
        ))}
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-center items-center'>
        <p className='md:text-base text-xs md:font-normal text-gray-500 font-light'>Copyright © 2024, All Right Reserved | Nahom Teshome</p>
      </div>
    </footer>
  );
}

export default Footer;
