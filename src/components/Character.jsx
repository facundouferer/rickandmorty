import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleCharacter } from "../api/functions";
import { Link } from "react-router-dom";

const Character = () => {
  const [character, serCharacter] = useState(null);

  const params = useParams();

  useEffect(() => {
    document.title = "Rick and Morty";
    singleCharacter(params.id, serCharacter);
  }, [params]);

  return (
    <div className="container p-3">
      {character != null ? (
        <>
          <div className="card">
            {character.status === "Dead" ? (
              <div className="card-header text-bg-danger">
                {character.status}
              </div>
            ) : (
              <div className="card-header text-bg-success ">
                {character.status}
              </div>
            )}
            <div className="card-body">
              <div className="row card-text">
                <div className="col-lg-3">
                  <img className="img-thumbnail" src={character.image} alt="" />
                </div>
                <div className="col-lg-9">
                  <div className="card-body">
                    <h1>{character.name}</h1>
                    <h3>{character.location.name}</h3>
                    <h4>you can see it in the episodes</h4>
                    {character.episode.map((episode) => (
                      <Link
                        to={"/"}
                        className="btn btn-primary m-1"
                        key={episode.split("episode/")[1]}
                      >
                        {episode.split("episode/")[1]}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        "cargando..."
      )}
    </div>
  );
};

export default Character;
