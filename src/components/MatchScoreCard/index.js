import './index.css'

const MatchScoreCard = props => {
  const {playAgain, score} = props

  return (
    <div className="win-card">
      <div className="details-section">
        <div>
          <img
            className="trophy"
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
          />
        </div>
        <div className="center-container">
          <p>YOUR SCORE</p>
          <p>{score}</p>
          <button onClick={playAgain} type="button" className="btn-container">
            <img
              className="reset"
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default MatchScoreCard
