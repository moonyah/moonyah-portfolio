// components/Header.tsx

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4 fixed w-full top-0">
      <nav className="  flex justify-between items-center pr-8 pl-8">
        <div className="text-yellow-100">
          <span className="font-bold text-2xl">Moonyah's Portfolio</span>
        </div>
        <ul className="flex items-center space-x-4 text-sm font-normal text-white pl-5">
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
          <li>
            <a
              href="https://github.com/moonyah"
              target="_blank"
              rel="noopener noreferrer"
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
