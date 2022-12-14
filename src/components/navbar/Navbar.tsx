type Props = {
  next?: () => void;
  prev?: () => void;
};

const Navbar = ({ next, prev }: Props) => {
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
              <a className="nav-link"> Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Random</a>
            </li>
            {prev && (
              <li onClick={prev} className="nav-item">
                <a className="nav-link">Previous</a>
              </li>
            )}
            {next && (
              <li onClick={next} className="nav-item" id="next">
                <a className="nav-link">Next</a>
              </li>
            )}
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
