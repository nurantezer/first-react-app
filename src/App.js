import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import Person from "./Person"


const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <Person
        name="Canan Bayram"
        img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
        tel="5555 555555"
      />
    </div>
  );
}

export default App