import Logo from "../components/logo";
import { Link, json } from "react-router-dom";


const cargarLibro = async () => {
    //Levanto los valores del input
    const autor = document.getElementById('author').value
    const pais = document.getElementById('country').value
    const imagen = document.getElementById('imageLink').value
    const lenguaje = document.getElementById('lenguage').value
    const enlace = document.getElementById('link').value
    const paginas = parseInt(document.getElementById('pages').value) 
    const titulo = document.getElementById('title').value
    const anio = parseInt(document.getElementById('year').value)

    //Seteo la url de la API
    const url = "http://localhost:8000/add"

    //Armo el arreglo 
    const datosPut = {
        author: autor,
        country: pais,
        imageLink: imagen,
        lenguage: lenguaje,
        link: enlace,
        pages: paginas,
        title: titulo,
        year: anio
      };

    //ver datos OK
    console.log(datosPut)
    
    //seteo los parametros del put request 
    const options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(datosPut)
        
    };

    fetch(url, options)
        .then(datosPut => console.log(datosPut)) 
        .catch(err => console.log(err));
}




export default function Agregar(){ 

    return (
        <div>
            <header>
                <h1 className="libros_title">AGREGAR LIBROS</h1>
            </header>   
            <div className="libros_cont">
                    <div className="libros_input_cont">
                        <h3 className="buscar_subtitle">Autor del libro:</h3>
                        <p className="buscar"><input type="text" name="autor" id="author" className="input_acciones_libros" /></p>

                        <h3 className="buscar_subtitle">Pais:</h3>
                        <p className="buscar"><input type="text" name="pais" id="country" className="input_acciones_libros"/></p>

                        <h3 className="buscar_subtitle">Link a Imagen de Portada:</h3>
                        <p className="buscar"><input type="text" name="imagen" id="imageLink" className="input_acciones_libros"/></p>

                        <h3 className="buscar_subtitle">Idioma: </h3>
                        <p className="buscar"><input type="text" name="lenguaje" id="lenguage" className="input_acciones_libros"/></p>

                        <h3 className="buscar_subtitle">Link a Wikipedia:</h3>
                        <p className="buscar"><input type="text" name="enlace" id="link" className="input_acciones_libros"/></p>

                        <h3 className="buscar_subtitle">Cantidad de páginas:</h3>
                        <p className="buscar"><input type="text" name="paginas" id="pages" className="input_acciones_libros"/></p>

                        <h3 className="buscar_subtitle">Título del libro: </h3>
                        <p className="buscar"><input type="text" name="titulo" id="title" className="input_acciones_libros"/></p>
                        
                        <h3 className="buscar_subtitle">Año:  </h3>
                        <p className="buscar"><input type="text" name="anio" id="year" className="input_acciones_libros"/></p>

                        <p className="buscar"><button id='agregarLibro' className="btn_buscar_libros" onClick={cargarLibro}>CARGAR LIBRO</button></p>
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