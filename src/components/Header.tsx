const Header = () => {
  return (
    <header className="flex justify-between items-center text-slate-200 font-semibold">
      <div className="p-4 text-2xl">@amitvishw</div>
      <nav>
        <ul>
          <li className="p-4">
            <a className="hover:text-primary duration-200" href="/">
              About Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
