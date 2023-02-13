import Card from './components/card/Card';
import data from './util/data'


const App = () => {
 console.log(data)
  return (
    <>
     {data.map((item) =>{
      const {id,img,btnName,dil} = item;
      return <Card key={id} img={img} btnName={btnName} dil={dil}/>
     })}
      
    </>
  );
}

export default App