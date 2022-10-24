import './ImageBackground.css';

const ImageBackground = ( {clicked} ) => {
  return (
      <img className={clicked ? 'background-image d-block' : 'd-none'} src={require(`../assets/background-0${clicked}.jpeg`)} alt="background" />
  )
}
export default ImageBackground;
