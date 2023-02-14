const Events = () => {
let info = 'EVENTS'

const handleClick = () =>{
    alert('Btn Clicked');
}

const handleClear = (text) =>{
alert(text);
} 

const handleChange = (e) =>{
    info = 'HOOKS'
    console.log(info)
    console.log(e.target)
}
  return (
    <div className="container text-center mt-4">
    <div className="display-4 text-danger m-4">{info}</div>
    <button onClick={handleClick} className="btn btn-warning">CLİCK</button>
    <button className="btn btn-dark" onClick={() => handleClear('Clear Btn Pressed')}>CLEAR</button>
    <button className="btn btn-danger" onClick={(e) => handleChange(e)}>CHANGE</button>

    </div>
  )
}

export default Events