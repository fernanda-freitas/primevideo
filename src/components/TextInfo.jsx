import './TextInfo.css';

const TextInfo = ( {clicked} ) => {
  return (
    <>
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
    </>
  )
}

export default TextInfo;
