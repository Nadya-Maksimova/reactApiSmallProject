import { useState } from 'react';


function Cats(): JSX.Element {
  const [ file, setImage] = useState('https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg')
  
  const getCats = (): void => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(results => results.json())
    .then(cat=>{
      setImage(cat[0].url)
     
    })
  };
  
  return ( 
    <div>
      <div className="card" style={{width: '40rem', height:'auto'}}>
  <img className="border rounded border-warning" src={file} alt="..."/>
</div>
        <div>
          <br></br>
        <button style={{fontSize:'2rem'}} onClick={getCats} type="button" className="btn btn-warning">Press me</button>
        </div>
     </div>   
  );
}

export default Cats;

