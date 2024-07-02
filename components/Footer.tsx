import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow, FaInstagram, FaWhatsapp, FaFacebook, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa'

const socialMedia = [
  { id: 'instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/prinz_nahii' },
  { id: 'whatsapp', icon: <FaWhatsapp />, url: 'https://wa.me/+251941515665' },
  { id: 'facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/profile.php?id=61561978731894' },
  { id: 'telegram', icon: <FaTelegram />, url: 'https://t.me/prinz_nahiii' },
  { id: 'linkedin', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/nahom-teshome-581042293/' },
  { id: 'github', icon: <FaGithub />, url: 'https://github.com/Prinznahi' }
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
        <p className='md:text-base text-xs md:font-normal text-gray-500 font-light'>Copyright © 2024 NT</p>
      </div>
    </footer>
  )
}

export default Footer
