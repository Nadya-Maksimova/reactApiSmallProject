import { useState } from 'react';


function Dogs(): JSX.Element {
  const [ file, setImage] = useState('https://www.thesprucepets.com/thmb/7TDhfkK5CAKBWEaJfez6607J48Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg')
  
  const getDogs = (): void => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(results => results.json())
    .then(dog=>{
      setImage(dog.message)
     
    })
  };
  
  return ( 
    <div>
      <div className="card" style={{width: '40rem', height:'auto'}}>
  <img className="border rounded border-warning" src={file} alt="..."/>
</div>
        <div>
          <br></br>
        <button style={{fontSize:'2rem'}} onClick={getDogs} type="button" className="btn btn-warning">Press me</button>
        </div>
     </div>   
  );
}

export default Dogs;