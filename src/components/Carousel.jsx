import { useState } from 'react';
import './Carousel.css';

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
        <div className={clicked === 1 ? 'content-text active' : 'content-text'}>
          <h1 className='header'>Galadriel</h1>
          <p className='textbody'>Uma lendária guerreira élfica e Comandante das Forças do Norte. Ainda longe de ser a sábia e etérea Senhora de Lórien, esta Galadriel bem mais jovem é teimosa e persistente - e obcecada em caçar um mal furtivo.</p>
        </div>
        <div className={clicked === 2 ? 'content-text active' : 'content-text'}>
          <h1 className='header'>Rainha-regente Míriel</h1>
          <p className='textbody'>Oficialmente, seu pai idoso ainda detém o cetro do Reino da Ilha de Númenor, mas a Rainha-Regente Míriel é a governante interina. Embora o reino esteja no auge de suas riquezas e poder, Míriel carrega o fardo de um terrível segredo que paira sobre todo seu povo.</p>
        </div>
        <div className={clicked === 3 ? 'content-text active' : 'content-text'}>
          <h1 className='header'>Bronwyn</h1>
          <p className='textbody'>Bronwyn é uma mãe solteira e curandeira das Terras do Sul que tem uma inteligência e curiosidade jamais valorizadas por aqueles a seu redor. Mas tem alguém que reconhece suas qualidades: o soldado Elfo Arondir. Só que ele é odiado por todos os conterrâneos de Bronwyn, e isso torna qualquer relação entre eles proibida.</p>
        </div>
        <div className={clicked === 4 ? 'content-text active' : 'content-text'}>
          <h1 className='header'>Elanor "Nori" Brandepé</h1>
          <p className='textbody'>Nori é uma Pé-Peludo, uma comunidade migratória e ancestral dos Pequenos que mais tarde dará origem aos Hobbits. Uma sonhadora nata, Nori anseia por aventuras além dos limites restritos do perigoso mundo dos Pequenos.</p>
        </div>
        <div className={clicked === 5 ? 'content-text active' : 'content-text'}>
          <h1 className='header'>Príncipe Durin IV</h1>
          <p className='textbody'>O Príncipe Durin IV é tão durão e taciturno em público quanto se esperaria de um Anão de sua importância, mas longe dos olhares alheios, ele é afetuoso, atencioso e barulhento. Como herdeiro do trono de Khazad-dûm, ele almeja o dia em que poderá deixar sua marca no mundo.</p>
        </div>
      </div>
      <img className={clicked === 1 ? 'background-image d-block' : 'd-none'} src={require("../assets/background-01.jpeg")} alt="representative of character" />
      <img className={clicked === 2 ? 'background-image d-block' : 'd-none'} src={require("../assets/background-02.jpeg")} alt="representative of character" />
      <img className={clicked === 3 ? 'background-image d-block' : 'd-none'} src={require("../assets/background-03.jpeg")} alt="representative of character" />
      <img className={clicked === 4 ? 'background-image d-block' : 'd-none'} src={require("../assets/background-04.jpeg")} alt="representative of character" />
      <img className={clicked === 5 ? 'background-image d-block' : 'd-none'} src={require("../assets/background-05.jpeg")} alt="representative of character" />
    </div>
    <div className='col-md-5 character-col'>
      <img className={clicked === 1 ? 'charmain-image d-block' : 'd-none'} src={require("../assets/character-01.webp")} alt="Galadriel" />
      <img className={clicked === 2 ? 'charmain-image d-block' : 'd-none'} src={require("../assets/character-02.webp")} alt="Míriel" />
      <img className={clicked === 3 ? 'charmain-image d-block' : 'd-none'} src={require("../assets/character-03.webp")} alt="Bronwyn" />
      <img className={clicked === 4 ? 'charmain-image d-block' : 'd-none'} src={require("../assets/character-04.webp")} alt="Nori" />
      <img className={clicked === 5 ? 'charmain-image d-block' : 'd-none'} src={require("../assets/character-05.webp")} alt="Durin" />
    </div>
  </div>
}

export default Carousel;
