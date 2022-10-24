import { useState } from 'react';
import './Carousel.css';
import TextInfo from './TextInfo';
import ImageBackground from './ImageBackground';
import ImageMain from './ImageMain';
import Thumbnail from './Thumbnail';

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
        <div className={clicked === 1 ? 'thumbnail-list' : 'd-none'}>
          <Thumbnail image={require('../assets/thumbnail-01-01.jpg')} alt="Galadriel" />
          <Thumbnail image={require('../assets/thumbnail-01-02.jpg')} alt="Elrond" />
          <Thumbnail image={require('../assets/thumbnail-01-03.jpg')} alt="Elrond" />
        </div>
        <div className={clicked === 2 ? 'thumbnail-list' : 'd-none'}>
          <Thumbnail image={require('../assets/thumbnail-02-01.jpg')} alt="Míriel" />
          <Thumbnail image={require('../assets/thumbnail-02-02.jpg')} alt="Elendil" />
          <Thumbnail image={require('../assets/thumbnail-02-03.jpg')} alt="Pharazôn" />
        </div>
        <div className={clicked === 3 ? 'thumbnail-list' : 'd-none'}>
          <Thumbnail image={require('../assets/thumbnail-03-01.jpg')} alt="Bronwyn" />
          <Thumbnail image={require('../assets/thumbnail-03-02.jpg')} alt="Halbrand" />
          <Thumbnail image={require('../assets/thumbnail-03-03.jpg')} alt="theo" />
        </div>
        <div className={clicked === 4 ? 'thumbnail-list' : 'd-none'}>
          <Thumbnail image={require('../assets/thumbnail-04-01.jpg')} alt="Nori" />
          <Thumbnail image={require('../assets/thumbnail-04-02.jpg')} alt="Poppy" />
          <Thumbnail image={require('../assets/thumbnail-04-03.jpg')} alt="Brandepé" />
        </div>
        <div className={clicked === 5 ? 'thumbnail-list' : 'd-none'}>
          <Thumbnail image={require('../assets/thumbnail-05-01.jpg')} alt="Durin" />
          <Thumbnail image={require('../assets/thumbnail-05-02.jpg')} alt="Disa" />
        </div>
      </div>
      <ImageBackground clicked={clicked} />
    </div>
    <div className='col-md-5 position-relative'>
      <ImageMain key={clicked} clicked={clicked} />
    </div>
  </div>
}

export default Carousel;
