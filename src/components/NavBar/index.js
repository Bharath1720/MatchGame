import './index.css'

const NavBar = props => {
  const {score, seconds} = props
  return (
    <nav className="nav-bar-container">
      <ul className="title-with-score-container">
        <li className="logo-and-title-container">
          <img
            className="game-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt=" website logo"
          />
        </li>
        <li className="scores-container">
          <p className="score">
            Score: <span className="span-score">{score}</span>
          </p>
          <li className="timer-container">
            <img
              className="timer-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="span-score">{seconds} sec</p>
          </li>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
