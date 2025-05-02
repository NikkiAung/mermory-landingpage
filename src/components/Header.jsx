import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="top-0 left-0 w-full h-20" id="nav-section">
      <div className="max-w-screen-2xl w-full mx-auto py-5 flex justify-between items-center">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/mermo-logo.png"
              alt="mermory logo"
              className="h-8"
            />
          </a>
        </h1>
        <div className="relative">
          <Navbar />
        </div>
        <div className="flex items-center justify-end gap-4">
          <button className="shadow-btn navbar-text">Sign In</button>
          <button className="btn btn-hover-animated navbar-text">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
