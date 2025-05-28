import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import axios from "axios";

//base url per attori
const baseURLActresses = "https://lanciweb.github.io/demo/api/actresses/";
//base url per attrici
const baseURLActors = "https://lanciweb.github.io/demo/api/actors/";

export default function App() {
  // useState
  const [actors, setActors] = useState([]);

  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => {
      const results = res.data;

      console.log(results);
      setActors(results);
    });
  };

  return (
    <div className="container">
      <h1 className="mt-5">ACTORS LIST</h1>
      <hr />
      {/* fine header */}
      {/* INIZIO CARDS ATTORI */}
      <button className="btn btn-primary mb-3" onClick={fetchActresses}>
        See actresses
      </button>
      <div className="container row g-5">
        {actors.map((actor) => (
          <div className="col col-3" key={actor.id}>
            <div className="card h-100">
              <img
                src={actor.image}
                className="card-img-top"
                alt={actor.image}
              />
              <div className="card-body">
                <h5 className="card-title">{actor.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {actor.birth_year}
                </h6>
                <p className="card-text">{actor.biography}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
