
export function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-contents">
        <input type="text" className="navbar-input" placeholder='Search for...' />
        <button className="navbar-search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>

      <ul className="navbar-unorderlist">
        <li className="navbar-list">
          <button className="navbar-list-icon">
            <i className="fa fa-bell" aria-hidden="true"></i>
            <span className="icon-power">3+</span>
          </button>
        </li>

        <li className="navbar-list">
          <button className="navbar-list-icon">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className="icon-power">7</span>
          </button>
        </li>

        <div className="navbar-divider"></div>

        <li className="navbar-list">
          <button className="navbar-list-icon">
            <span className="navbar-profile-name">Douglas McGee</span>
            <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg" className="navbar-profile" />
          </button>
        </li>

      </ul>
    </nav>
  );
}
