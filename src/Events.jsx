


const Events = () => {
let info = 'EVENTS'

const handleClick = () =>{
    alert('Btn Clicked');
}

const handleClear = (text) =>{
alert(text);
} 
  return (
    <div className="container text-center mt-4">
    <div className="display-4 text-danger m-4">{info}</div>
    <button onClick={handleClick} className="btn btn-warning">CLİCK</button>
    <button className="btn btn-dark" onClick={() => handleClear('Clear Btn Pressed')}>CLEAR</button>


    </div>
  )
}

export default Events