import Header from "../Components/Header";
import ListGameGenre from "../Components/ListGameGenre";
import PrincipalPage from "../Components/PrincipalPage";
import Style from "../styles/Home.module.css";

export default function Home(idGenreGame) {
  return (
    <>
      <Header />
      <div className={Style.backgroundDiv}>
        <PrincipalPage />
        
      </div>
    </>
  );
}
