import { Link } from "react-router-dom";
import Logo from "../components/logo";

const buscarAutor = async () => {
    // const response = await fetch("http://localhost:8000/searchAuthor");
    const buscador = document.getElementById("buscador").value;
    const response = await fetch("http://localhost:8000/searchAuthor?nombreAutor=" + buscador);

    const data = await response.json(); 

    const divResultados = document.getElementById("resultados");
    
    console.log(data); 

    const imprimirResultados = (data) => {

        divResultados.innerHTML = "";

        data.forEach(resultado => {
          const p = document.createElement("p");
          p.innerHTML = resultado;
          divResultados.appendChild(p);
        });
      };
    
    imprimirResultados(data);   
  };

const buscarTitulo = async () => {

    const buscador = document.getElementById("buscador_titulo").value;
    const response = await fetch("http://localhost:8000/searchTitle?titulo=" + buscador);

    const data = await response.json(); 

    const divResultados = document.getElementById("resultados_titulo");
    
    console.log(data); 

    const imprimirResultados = (data) => {

        divResultados.innerHTML = "";

        data.forEach(resultado => {
          const p = document.createElement("p");
          p.innerHTML = resultado;
          divResultados.appendChild(p);
        });
      };
    
    imprimirResultados(data);   
};

const buscarIdioma = async () => {

    const buscador = document.getElementById("buscador_idioma").value;
    const response = await fetch("http://localhost:8000/searchLanguage?language=" + buscador);

    const data = await response.json(); 

    const divResultados = document.getElementById("resultados_idioma");
    
    console.log(data); 

    const imprimirResultados = (data) => {

        divResultados.innerHTML = "";

        data.forEach(resultado => {
          const p = document.createElement("p");
          p.innerHTML = resultado;
          divResultados.appendChild(p);
        });
      };
    
    imprimirResultados(data);   
};

export default function Buscar(){
    return (
        <div>
        <header>
                <h1 className="libros_title">BUSCAR LIBROS</h1>
        </header>
        <div className="libros_cont">
            <div className="libros_input_cont">
                <h3 className="buscar_subtitle border_subtitle">Buscar por Autor</h3>
                <p className="buscar"><input type="text" id='buscador'className="input_acciones_libros"/></p>
                <p className="buscar"><button id='buscarAutor' onClick={buscarAutor} className="btn_buscar_libros">BUSCAR POR AUTOR</button></p>
            </div>
            <div id='resultados' className="buscar"></div>

            <div className="libros_input_cont">
                <h3 className="buscar_subtitle border_subtitle">Buscar por Título</h3>
                <p className="buscar"><input type="text" id='buscador_titulo'className="input_acciones_libros"/></p>
                <p className="buscar"><button id='buscarTitulo' onClick={buscarTitulo} className="btn_buscar_libros">BUSCAR POR TÍTULO</button></p>                
            </div>
            <div id='resultados_titulo' className="buscar"></div>

            <div className="libros_input_cont">
                <h3 className="buscar_subtitle border_subtitle">Buscar por Idioma</h3>
                <p className="buscar"><input type="text" id='buscador_idioma'className="input_acciones_libros"/></p>
                <p className="buscar"><button id='buscarIdioma' onClick={buscarIdioma} className="btn_buscar_libros">BUSCAR POR IDIOMA</button></p>
            </div>
            <div id='resultados_idioma' className="buscar"></div>
            
        </div>
        <footer>
               <div className="footer_cont">
                    <Link to={'/'}><Logo /></Link>
                </div>
        </footer>
        </div>
    );
}