const Navbar = () => {
  return (
    <header className="fixed left-0 bottom-0 w-full md:clear-left md:grid md:place-items-center md:h-screen md:left-auto md:right-0 md:top-0 md:w-max">
      <nav className="w-full bg-sky-800 p-3 flex md:flex-col md:gap-3 md:rounded-s-lg md:rounded-tr-none rounded-t-lg justify-between items-end text-xs">
        <a href="">
          <span>Home</span>
        </a>
        <a href="">
          <span>Event</span>
        </a>
        <a href="">
          <span>Tasks</span>
        </a>
        <a href="">
          <span>Contacts</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
