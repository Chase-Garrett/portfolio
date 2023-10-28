export default function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid row">
        <div
          className="collapse navbar-collapse"
          id="navbarNav navbarSupportedContent"
        >
          <ul className="navbar-nav col align-items-center">{links}</ul>
        </div>
      </div>
    </nav>
  );
}
