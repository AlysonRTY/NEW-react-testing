import { useState, useEffect } from 'react'
import './App.css'









function MyButton({ count, onClick }) {
  // const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count + 1);
  // }
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([])

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character/").then(res => {
      return res.json()
    }).then(result => {
      setData(result.results)
      console.log(result.results);
    })
  }
  fetchData()
}, [])
  
  
  

 const charInfo = data.map(person =>
   <li key={person.id}>
     <p>
        <b>{person.name}:</b>
      </p>
      <img
        src={person.image}
        alt={person.name}
      />
    </li>
 );
  
  
  
  
  
  
  
  

  return (
    <>
      <h1>Hello Friends!</h1>
      <p>Welcome to my very simple React app.</p>
      <MyButton count={count} onClick={handleClick} /><br />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <MyButton />
      {/* <MyButton /><br /><MyButton /><br /><MyButton /> */}
      {/* {data.map((element) => {
        return (
          <div key={element.name}>
            <p>{element.name}</p>
            </div>
        )
      })} */}
      {/* {data.map((element) => {
        return (
          <li key={element.data}>
            <p>{element.name}</p>
              <img src={element.image}></img>   
            </li>
        )
      })} */}
      
      <ul className="no-bullets">{charInfo}</ul>



    </>
  )
}

export default App
