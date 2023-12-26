import { Link } from "react-router-dom";
import Logo from "../components/logo";


const borrarLibroPorTítulo = async () => {

    const eliminar = document.getElementById("borrarAutor").value;

    const options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },           
    };

    const response = await fetch("http://localhost:8000/delete?titulo=" + eliminar, options);

}

export default function Eliminar(){
    return (
        <div>
            <header>
                <h1 className="libros_title">ELIMINAR LIBROS</h1>
            </header>   

            <div className="libros_cont">
                <div className="libros_input_cont">
                    <h3 className="buscar_subtitle border_subtitle">Ingrese el Título del libro que desea eliminar</h3>
                    <p className="buscar"><input type="text" id='borrarAutor'className="input_acciones_libros"/></p>
                    <p className="buscar"><button id='borrar' onClick={borrarLibroPorTítulo} className="btn_buscar_libros">Borrar Libro</button></p>
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