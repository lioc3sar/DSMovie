import "./styles.css"
import {ReactComponent as GitHubIcon} from "assets/img/github.svg"


function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/lioc3sar"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/lioc3sar</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
