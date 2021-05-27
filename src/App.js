import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    
    fetch(`https://rickandmortyapi.com/api/character/?name=${value}&gender=${gender}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      });
  }, [value, gender]);


const handleChange = (e) => {
  setValue(e.target.value)
}

const handleGender = (e) => {
  setGender(e.target.value)
}

  return (
    <>
      <div className="contenedor">
        <div>
          FILTROS
          <input onChange={handleChange}type="text"></input>
          Female<input onChange={handleGender}  type="radio" value="female" name="gender"></input>
          Male<input onChange={handleGender} type="radio" value="male" name="gender"></input>
          Genderless<input onChange={handleGender} type="radio" value="genderless" name="gender"></input>
          Undefined<input  onChange={handleGender} type="radio" value="undefined" name="gender"></input>
          <button>BUSCAR</button>
        </div>

        <div className="contenido">
          {personajes.map((personajes) => (
            <div className="card">
              <div className="card-image">
                <img src={personajes.image}></img>
              </div>

              <div className="card-description">
                {personajes.name}
                {personajes.species}
                {personajes.location.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      );
    </>
  );
}

export default App;
