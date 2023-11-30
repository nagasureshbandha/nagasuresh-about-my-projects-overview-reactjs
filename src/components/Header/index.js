import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">NB</p>
      <ul className="nav-menu">
        <li>
          <a
            href="https://www.linkedin.com/in/naga-suresh-54aa03263/"
            target="_blank"
          >
            <img
              className="social-network-img"
              alt="Linked In"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/nagasureshbandha">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Git Hub"
            />
          </a>
        </li>
        <li>
          <a href="https://sureshportfo.ccbp.tech/">
            <img
              className="social-network-img-po"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1rWvuiQFxQpEIL218odw8XdAS08_84efzg&usqp=CAU"
              alt="MY portfolio"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
