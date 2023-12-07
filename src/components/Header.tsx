// components/Header.tsx

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4 fixed w-full top-0">
      <nav className="container mx-auto">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#about-me" className="text-white">
              About me
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#career" className="text-white">
              Career
            </a>
          </li>
          <li>
            <a
              href="https://github.com/moonyah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
