import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Style from "../styles/Home.module.css";
import Image from "next/image";

export default function ModalDescription({ idGame }) {
  // const [games, setGames] = useState([])
  const [descriptionGame, setDescriptionGame] = useState([]);

  const fetchGamesGenre = async (idGame) => {
    const res = await fetch(
      `https://api.rawg.io/api/games/${idGame}?key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const gamesDesc = await res.json();
    setDescriptionGame(gamesDesc);
  };
  console.log("description games ====", descriptionGame);

  useEffect(() => {
    fetchGamesGenre(idGame);
  }, [idGame]);
  // console.log(idGame, '====== getIdGame');
  return (
    <>
      <div className="position-fixed top-0 vw-100 vh-100">
        <div className="w-100 h-100 bg-dark bg-opacity-75">
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className={Style.Zindex}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Title</h4>
                    <button className="btn-close"></button>
                  </div>
                  <div className="modal-body">
                    {/* <Image></Image> */}
                    <p> Description</p>
                    <p>Genre</p>
                    <p>Date sortie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
