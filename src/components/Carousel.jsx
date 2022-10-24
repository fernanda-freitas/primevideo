import { useState } from 'react';
import './Carousel.css';
import TextInfo from './TextInfo';
import ImageBackground from './ImageBackground';
import ImageMain from './ImageMain';

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
      <ImageBackground clicked={clicked} />
    </div>
    <div className='col-md-5 position-relative'>
      <ImageMain key={clicked} clicked={clicked} />
    </div>
  </div>
}

export default Carousel;
