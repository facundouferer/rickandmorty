import React, { useEffect, useState } from "react";
import { allCharacters } from "../functions/functions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const params = useParams();

  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    allCharacters(setCharacters, params.page, "Rick");
    document.title = "Rick and Morty";
  }, [params]);

  var nextPage = null;
  var prevPage = null;
  if (characters) {
    prevPage = characters.data.info.prev
      ? characters.data.info.prev.split("page=")[1]
      : null;
    nextPage = characters.data.info.next
      ? characters.data.info.next.split("page=")[1]
      : null;
  }

  if (!characters) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-3">
      <div className="row">
        {characters != null
          ? characters.data.results.map((character) => (
              <div className="p-1 col-md-6 col-lg-3" key={character.id}>
                <div className="card">
                  <img
                    src={character.image}
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">
                      {character.name}
                      {character.status === "Dead" ? " (dead)" : ""}
                    </h5>
                    <p className="card-text">{character.species}</p>
                    <Link
                      to={`/character/${character.id}`}
                      className="btn btn-secondary"
                    >
                      more
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : "cargando"}
      </div>
      <div className="pagination justify-content-center">
        {prevPage != null ? (
          <Link to={`/characters/${prevPage}`} className="btn btn-primary m-1">
            prev
          </Link>
        ) : (
          ""
        )}{" "}
        {nextPage != null ? (
          <Link to={`/characters/${nextPage}`} className="btn btn-primary m-1">
            next
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
