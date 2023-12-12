// components/Header.tsx
import { FaGithub } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className='bg-black py-4 fixed w-full top-0 z-10'>
      <nav className='flex justify-between items-center pr-4 pl-4 md:pr-8 md:pl-8'>
        <div className='text-yellow-200'>
          <span className='font-bold text-2xl'>Moonyah's Portfolio</span>
        </div>
        <ul className='hidden md:flex items-center space-x-4 text-sm font-normal text-white pl-5'>
          <li>
            <a href='#about-me'>About me</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#career'>Career</a>
          </li>
          <li>
            <a
              href='https://github.com/moonyah'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
