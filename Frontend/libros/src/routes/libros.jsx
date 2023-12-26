import { Link } from "react-router-dom";
import Logo from "../components/logo";

const verLibros = async () => {

    const response = await fetch("http://localhost:8000/json");
    
    const data = await response.json(); 

    const divResultados = document.getElementById("ver_libros");
    
    console.log(data); 

    const imprimirResultados = (data) => {

        divResultados.innerHTML = "";

        data.forEach(resultado => {
          const a = document.createElement("a");
          a.innerHTML = resultado["title"] + " - " + resultado["author"];
          a.href= resultado["link"];
          const p = document.createElement("p")
          p.appendChild(a);
          divResultados.appendChild(p);
        });
      };
    
    imprimirResultados(data);
      
};


export default function Libros(){
    return (
        <div>
            <header>
                <h1 className="libros_title">LIBROS</h1>
            </header>
            <div className="libros_buscar_cont">
                <div id="ver_libros" onLoad={verLibros()}></div>
            </div>
            <footer>
                <div className="footer_cont">
                    <Link to={'/'}><Logo /></Link>
                </div>
            </footer>

        </div>
    );
}