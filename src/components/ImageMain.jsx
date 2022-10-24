import './ImageMain.css';

const ImageMain = ( {clicked} ) => {
  return (
      <img className={clicked ? 'background-image d-block' : 'd-none'} src={require(`../assets/background-0${clicked}.jpeg`)} alt="" />
  )
}
export default ImageMain;
