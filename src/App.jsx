import { useState, useEffect } from 'react'
import './App.css'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';













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
  const [search, setSearch] = useState(" ")


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
  
  
  
  

  const charInfo = data.filter((person) => {
    return search.toLowerCase() === " " ? person : person.name.toLowerCase().includes(search)
  }).map(person =>
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
  
  
  
  
  console.log(search);
  


// const flip = data.forEach((person) => {
// <li key={person.id1}>
//     <div class="flip-card">
//   <div class="flip-card-inner">
//       <div class="flip-card-front">
//         <img
//         src={person.image}
//           alt={person.name}
//         />
//     </div>
//     <div class="flip-card-back">
//         <h1>{person.name}</h1>
//       <p>Architect & Engineer</p>
//       <p>We love that guy</p>
//     </div>
//   </div>
// </div>

//     </li>
// })

  
   
      const flip = data.map((person, index) => (
        <div className="flip-card" key={index}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={person.image} alt={person.name} style={{ width: '300px', height: '300px' }}/>
            </div>
            <div className="flip-card-back">
              <h1>{person.name}</h1>
              <p>{person.gender}</p>
              <p>{person.species}</p>
            </div>
          </div>
        </div>
      ))
    

  
  

    return (
      <>
        <Form.Control onChange={(e) => setSearch(e.target.value)}  type="text" placeholder="Name" />
      <br />
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
      
        {/* <ul className="no-bullets">{charInfo}</ul> */}
        <br />
        <ul className="no-bullets">{flip}</ul>


        








      </>
  );
  
  }

  export default App;
