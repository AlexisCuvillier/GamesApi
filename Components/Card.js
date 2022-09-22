import React from "react";
import Image from "next/image";
import Style from "../styles/Home.module.css";

export default function Card(props) {
  return (
    <>
          <div className={Style.cartes} id={props.id} onClick={props.func}>
            <div className={Style.test}>
              <div className={Style.partImg}>
                <Image
                  width={220}
                  height={200}
                  alt="imgGame"
                  src={props.image}
                ></Image>
              </div>
              <div className={Style.game}>
                <h2 className={Style.genreTitle}> {props.name}</h2>
                <p className={Style.pGenre}>
                  Nombre de jeux dans la categorie &quot;{props.gamesCount}
                  &quot;{" "}
                </p>
              </div>
            </div>
          </div>
      
    </>
  );
}
