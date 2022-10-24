import { useState } from 'react';
import './Carousel.css';
import TextInfo from './TextInfo';

const Carousel = () => {
  let [clicked, setclicked] = useState(1);

  const handleClick = (index) => {
    setclicked(index)
  }

  return <div className='d-flex row'>
    <div className='col-md-7 position-relative'>
      <div className='position-absolute content-wrapper'>
        <ul className='d-flex'>
          <li><button onClick={() => handleClick(1)} className={clicked === 1 ? 'btn custom-button active-button' : 'btn custom-button'} type="button">Elfos</button></li>
          <li><button onClick={() => handleClick(2)} className={clicked === 2 ? 'btn custom-button active-button' : 'btn custom-button'} type="button">Numenóreanos</button></li>
          <li><button onClick={() => handleClick(3)} className={clicked === 3 ? 'btn custom-button active-button' : 'btn custom-button'} type="button">Sulistas</button></li>
          <li><button onClick={() => handleClick(4)} className={clicked === 4 ? 'btn custom-button active-button' : 'btn custom-button'} type="button">Pés-peludos</button></li>
          <li><button onClick={() => handleClick(5)} className={clicked === 5 ? 'btn custom-button active-button' : 'btn custom-button'} type="button">Anões</button></li>
        </ul>
        <TextInfo clicked={clicked} />
      </div>
      {/* Background images */}
      <img className={clicked === 1 ? 'background-image d-block' : 'd-none'} src={require("../assets/background-01.jpeg")} alt="representative of character" />
      <img className={clicked === 2 ? 'background-image d-block' : 'd-none'} src={require("../assets/background-02.jpeg")} alt="representative of character" />
      <img className={clicked === 3 ? 'background-image d-block' : 'd-none'} src={require("../assets/background-03.jpeg")} alt="representative of character" />
      <img className={clicked === 4 ? 'background-image d-block' : 'd-none'} src={require("../assets/background-04.jpeg")} alt="representative of character" />
      <img className={clicked === 5 ? 'background-image d-block' : 'd-none'} src={require("../assets/background-05.jpeg")} alt="representative of character" />
    </div>
    <div className='col-md-5 character-col'>
      {/* Character images */}
      <img className={clicked === 1 ? 'charmain-image d-block' : 'd-none'} src={require("../assets/character-01.webp")} alt="Galadriel" />
      <img className={clicked === 2 ? 'charmain-image d-block' : 'd-none'} src={require("../assets/character-02.webp")} alt="Míriel" />
      <img className={clicked === 3 ? 'charmain-image d-block' : 'd-none'} src={require("../assets/character-03.webp")} alt="Bronwyn" />
      <img className={clicked === 4 ? 'charmain-image d-block' : 'd-none'} src={require("../assets/character-04.webp")} alt="Nori" />
      <img className={clicked === 5 ? 'charmain-image d-block' : 'd-none'} src={require("../assets/character-05.webp")} alt="Durin" />
    </div>
  </div>
}

export default Carousel;
