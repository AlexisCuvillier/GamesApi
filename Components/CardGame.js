import Image from 'next/image'
import React from 'react'
import Style from "../styles/Home.module.css";

export default function CardGame(props) {
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
                <h3 className={Style.genreTitle}> {props.name}</h3>
                <p>Release date : {props.released}</p>
              </div>
            </div>
          </div>
    </>
  )
}
