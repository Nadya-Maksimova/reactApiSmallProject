
import './App.css';
import Cats from './Cats'
import Dogs from './Dogs'
import './App.css';
import { useState, useEffect } from 'react';
import BeerItem from './BeerItem'
import { Beer } from './BeerType'
import RandomBeer from './RandomBeer';




function App(): JSX.Element {
  const [page, setPage] = useState('main');
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=77')
      .then((response) => response.json())
      .then((json) => setBeers(json));
  }, []);

  return (
    <div className="App"> 
      <header className="App-header"> 
     
      {page === 'main' && (
  
  <>

   <h2 style={{color:'black'}}>Time to have fun</h2>
   <br></br>
   <img style={{width:'400px', height:'auto'}} src='https://derpicdn.net/img/view/2016/11/7/1290888.gif'/>
   <br></br>
      <h2 style={{color:'black'}}>What will you choose?</h2>
      <br></br>
      <div className="buttons">
      <button style={{fontSize:'2rem'}} onClick={() => setPage('cats')} type="button" className="btn btn-warning">I like Cats</button> 
      {' '}
      <button style={{fontSize:'2rem'}} onClick={() => setPage('dogs')} type="button" className="btn btn-warning">I like Dogs</button>
      {' '}
      <button style={{fontSize:'2rem'}} onClick={() => setPage('beer')} type="button" className="btn btn-warning">I like Beer</button>
    </div>
  </>
   )}
      
    {page === 'cats' && (
          <>
   <button style={{fontSize:'1rem'}} onClick={() => setPage('main')} type="button" className="btn btn-light">Back to main</button> 
   <br></br>
   <Cats/>
 
   
   </>
   )}
    {page === 'dogs' && (
  
    <>
        <button style={{fontSize:'1rem'}} onClick={() => setPage('main')} type="button" className="btn btn-light">Back to main</button> 
        <br></br>
   <Dogs/>      
    </>
     )}
   {page === 'beer' && (

<>
<br></br>
<button style={{fontSize:'1rem'}} onClick={() => setPage('main')} type="button" className="btn btn-light">Back to main</button> 
          <div>
            <br></br>
          <RandomBeer/>
            </div> 
            <br></br>
            <div className="card-columns">
            {beers.map((beer) => (
             
              <BeerItem beer={beer} key={beer.id} />
           
            
            ))}
               </div>
       
          </>
     
          
     )}
   
      </header>

  </div>
  );
}

export default App;



