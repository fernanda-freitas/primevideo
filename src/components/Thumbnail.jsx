import './Thumbnail.css';

const Thumbnail = ( {image, alt} ) => {
  return (
    <div className="thumbnail-wrapper">
      <img src={image} alt={alt} />
    </div>
  )
}

export default Thumbnail;
