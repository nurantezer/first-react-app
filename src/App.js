import "./App.css";
import {Middle} from "./components/Middle";
import Footer from "./components/Footer"
import Header from "./Header";
import Content from "./Content";


function App() {

  return (
  <main className="renk" style={{color:"red"}}>
    <h3>Nuran</h3>
    <Header/>
    <Content/>
    <Middle/>
    <Footer/>
  </main>
  ) 

}

export default App;
