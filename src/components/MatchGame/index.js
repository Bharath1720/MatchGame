import './index.css'

const MatchGame = props => {
  const {eachImage, imageClicked} = props
  const {id, thumbnailUrl} = eachImage

  const clickedImage = () => {
    imageClicked(id)
  }

  return (
    <li className="game-item">
      <button type="button">
        <img
          onClick={clickedImage}
          className="game-image"
          src={thumbnailUrl}
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default MatchGame
