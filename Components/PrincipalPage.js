import React, { useEffect, useState } from "react";
import Style from "../styles/Home.module.css";
import Image from "next/image";
import Card from "./Card";
import ListGameGenre from "./ListGameGenre";

export default function GenrePage() {

  const fetchGenre = async () => {
    const res = await fetch(
      `https://api.rawg.io/api/genres?key=${process.env.NEXT_PUBLIC_API_KEY}`
      // `https://api.rawg.io/api/genres?key=` + process.env.NEXT_PUBLIC_API_KEY
    );
    const allGames = await res.json();

    SetAllGames(allGames);
  };

  const [AllGames, SetAllGames] = useState([]);


  /////////

  // const fetchGamesGenre = async (e) => {
  //   const res = await fetch(
      // `https://api.rawg.io/api/genres?key=${process.env.NEXT_PUBLIC_API_KEY}&genres/${idGenreGame}`
  //   );
  //   const gameGenre = await res.json();

  //   setGenreGame(gameGenre);
  // }

 
  const [idGenreGame, setIdGenreGame] = useState([]);
  


  const [buttonAccueil , setButtonAcceuil] = useState(false)
  const handleClick = () => {
     console.log(buttonAccueil, "===== button ");
     setButtonAcceuil(!buttonAccueil)
  }

  //////////

  const selectIdGenre = async(e) => {
    e.preventDefault();
    setIdGenreGame(e.currentTarget.id);
  };

  // console.log(fetchGamesGenre.results, '========== result fetch');

  console.log("idGenre ====", idGenreGame);


///////////////

  useEffect(() => {
    fetchGenre();
  }, []);


  return (
    <>

    
 <button className={Style.index} onClick={() => handleClick()}>TEST</button>
        <div className={Style.container}>

         
        {AllGames.results?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image_background}
            name={item.name}
            gamesCount={item.games_count}
            func={selectIdGenre}
          />
        ))}
      </div>
      

      

      <ListGameGenre idGenreGame={idGenreGame}/>
    </>
  );
}
