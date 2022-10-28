type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Pokedex</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link"> Home </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Random</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Previous</span>
            </li>
            <li className="nav-item" id="next">
              <span className="nav-link">Next</span>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
