import './ImageMain.css';

const ImageMain = ( {clicked} ) => {
  return (
    <img key={clicked} className={clicked ? 'charmain-image d-block' : 'd-none'} src={require(`../assets/character-0${clicked}.webp`)} alt="character" />
  )
}

export default ImageMain;
