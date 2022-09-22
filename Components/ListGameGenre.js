import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react'
import CardGame from './CardGame';
import Style from "../styles/Home.module.css";
import ModalDescription from './ModalDescription';

export default function ListGameGenre({idGenreGame}) {

    console.log("test ========", idGenreGame);

    const [genreGame, setGenreGame] = useState([]);








    const [idGame, setIdGame] = useState([]);

    const getIdGame = async(e) => {
      e.preventDefault();
      setIdGame(e.currentTarget.id)
    }

    console.log('id game ====', idGame);


    const fetchGamesGenre = async (idGenreGame) => {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&genres=${idGenreGame}`
        );
        const gameGenre = await res.json();
         console.log(gameGenre)
        setGenreGame(gameGenre);

      }

      useEffect(() => {
        fetchGamesGenre(idGenreGame)
      },[idGenreGame])

    console.log(genreGame, '============= testofetcho');

    
  return (
    <>
    <div className={Style.container}>
         {genreGame.results?.map((item) => (
            <CardGame
                id= {item.id}
                key={item.id}
                name = {item.name}
                image = {item.background_image}
                released = {item.released}
                func = {getIdGame}
            />
         ))}   
    </div>

    {/* <ModalDescription idGame={idGame} /> */}
    </>
  )
}
