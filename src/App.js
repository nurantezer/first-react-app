import Person from "./components/Person";
import { data } from "./data";

function App() {
  return (
    <div>
      {data.map((item,index) => {
        const { name} = item;
        return (
          <div key={index}>
            <h1>{name}</h1>
            <Person  item={item} />
          </div>
        );
      
    }
        
      )}
    </div>
  );
}

export default App;

