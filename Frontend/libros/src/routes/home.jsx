import { Link } from "react-router-dom";
import Logo from "../components/logo";

export default function Home(){
    return (
        <div>
            <header>
                <h1 className="libros_title">Home App Libros</h1>
            </header>
            <div className="home_cont">
                <div className="home_libros_cont">
                    <Link to={'/libros'}>VER LIBROS</Link>
                </div>
                <div className="home_libros_cont">
                    <Link to={'/buscar'}>BUSCAR LIBROS</Link>
                </div>
                <div className="home_libros_cont">
                    <Link to={'/agregar'}>AGREGAR LIBROS</Link>
                </div>
                <div className="home_libros_cont">
                    <Link to={'/eliminar'}>ELIMINAR LIBROS</Link>
                </div>
            </div>
            <footer>
                <div className="footer_cont">
                    <Link to={'/'}><Logo /></Link>
                </div>
            </footer>
        </div>
    );
}