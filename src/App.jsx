import { useState, useEffect } from 'react'
import './App.css'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Logo from './images/logo.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';







console.log(Logo);







// function MyButton({ count, onClick }) {
  // const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count + 1);
  // }
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   )
// }
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([])
  const [search, setSearch] = useState(" ")
  const [modalShow, setModalShow] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);



  // function handleClick() {
  //   setCount(count + 1);
  // }

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
  
  
  
  

  const charInfo = data.filter((person, index) => {
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
  




  
   
      // const flip = data.map((person, index) => (
      //   <div className="flip-card" key={index}>
      //     <div className="flip-card-inner">
      //       <div className="flip-card-front">
      //         <img src={person.image} alt={person.name} style={{ width: '300px', height: '300px' }}/>
      //       </div>
      //       <div className="flip-card-back">
      //         <h1>{person.name}</h1>
      //         <p>{person.gender}</p>
      //         <p>{person.species}</p>
      //       </div>
      //     </div>
      //   </div>
  // ))
  

// original function
  const flip = data
  .filter((person) => {
    if (search.trim() === "") {
      return true;
    }
    return person.name.toLowerCase().includes(search.toLowerCase());
  })
  .map((person, index) => (
    <div className="flip-card" key={index}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={person.image} alt={person.name}/>
        </div>
        <div className="flip-card-back">
          <h1>{person.name}</h1>
          {/* <p>{person.gender}</p>
          <p>{person.species}</p> */}
          <br />
          <br />
          <br />
          <br />

           <Button
            variant="primary"
            onClick={() => {
              setSelectedPerson(person);
              setModalShow(true);
            }}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  ));

    function CharacterModal({ show, onHide, person }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{person?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={person?.image} alt={person?.name} />
        <p><strong>Gender:</strong> {person?.gender}</p>
        <p><strong>Species:</strong> {person?.species}</p>
        <p><strong>Status:</strong> {person?.status}</p>
        <p><strong>Origin:</strong> {person?.origin.name}</p>
        <p><strong>Location:</strong> {person?.location.name}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

  
  

    return (
      <>
        <div className="background-container"></div>
        {/* <img className="logoPicture" src={Logo} alt="My Picture" /> */}
        <br />
        <Form.Control onChange={(e) => setSearch(e.target.value)}  type="text" placeholder="Name" />
      <br />
        {/* <h1>Hello Friends!</h1>
        <p>Welcome to my very simple React app.</p>
        <MyButton count={count} onClick={handleClick} /><br />
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
        <MyButton /> */}
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
        {/* <ul className="no-bullets">{flip}</ul> */}
        
<div className="no-bullets">
    {flip}
    <CharacterModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      person={selectedPerson}
    />
  </div>

        








      </>
  );
  
  }

  export default App;
