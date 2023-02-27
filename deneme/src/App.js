import { useEffect, useState } from "react";
import Loading from "./Loading"
import Tours from "./Tours"

const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false)
  
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  
  const fetcData = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
      setTours(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  useEffect(() => {
    fetcData()
  }, [])
  
  if (loading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  } 

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetcData}>refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
