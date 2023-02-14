import {useState} from 'react'

const UseStateExample = () => {
    const [count, setCount] = useState(0);
    const [info, setİnfo] = useState({
        name:'Merve Özcan',
        email:'m@gmail.com',
        age: 23
    });

    const inc = ()=>{
        setCount(count + 1);
    }

    const dec = ()=>{
      setCount(count-1);
    }

    const incAge = () => {
        setİnfo({...info, age: info.age +1 });
    }
  return (
    <div className='container text-center mt-4'>
        <section>
            <h1 className='display-4 text-danger m-4'>USESTATE COUNT:{count}</h1>
            <button
            className='btn btn-success'onClick={inc}>INC</button>
            <button className='btn btn-dark' onClick={() => setCount(0)}>CLR</button>
            <button className='btn btn-warning' onClick={dec}>DEC</button>
        </section>
        <section>
            <h1 className='display-4 text-danger m-4'>USESTATE OBJECT</h1>
            <h2>{info.name}</h2>
            <h3>{info.email}</h3>
            <h4>{info.age}</h4>
            <button className='btn btn-info' onClick={incAge}>ING AGE</button>
        </section>

    </div>
  )
}

export default UseStateExample