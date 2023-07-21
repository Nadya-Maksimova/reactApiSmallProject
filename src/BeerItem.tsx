
import { Beer } from './BeerType';

const BeerItem = ({ beer }: { beer: Beer }) => {
  return (

   <div className='card'style={{backgroundColor:'#FCF4F2'}} key={beer.id}>
    <p className="card-title" style={{color:'red', fontSize:'xx-large', fontFamily:'fantasy'}}>{beer.name}</p>
  <img className="card-img-top" style={{ width: '200px', height:"auto" }} src={beer.image_url} alt="..."/>
  <div className='card-body'>
    <p className="card-text" style={{color:'black', fontSize:'20px'}}>{beer.description}</p>
  </div>
  </div>
  

  );
};

export default BeerItem;