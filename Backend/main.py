from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import json
from pydantic import BaseModel



data = requests.get('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
data_json = data.json()

#-----APP-------
app = FastAPI()

#-----CORS-------
origins = [
    "http://localhost:3000",
    "localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
#-------- PARA AGREGAR LIBRO CON EL METODO POST Y QUE LOS DATOS SE AGREGUEN DESDE EL BODY---------
class Libro(BaseModel):       
        author: str
        country: str
        imageLink: str
        lenguage: str
        link: str
        pages: int
        title: str
        year: int

#-----FUNCIONES VARIAS-------
def encontrarTitulo(titulo, archivo = list):
    indice = 0
    for diccionario in archivo:
        if diccionario['title'] == titulo:
            return indice
        else:
            indice += 1
def buscarAnioxAutor(nombreAutor):#Buscar Anios en los que el autor escribio
    for diccionario in data_json:
        if diccionario['author'] == nombreAutor:
            print(diccionario["year"])

#------------INDEX-------------
@app.get('/')
def root():
    text = 'Inicio'
    return text

#------------GET-------------
@app.get('/json')
def documento():
    return data_json

#------------OPTIONS-------------
@app.options('/json')
def documento_options():
    return 

#BUSCAR
@app.get("/searchAuthor")
def buscarInfoLibrosxAutor(nombreAutor = None): #esto ya esta bien :)
    lista = []
    contador = 0

    '''NOTA: En la app del cliente verificar que se elija solo uno de estos parametros'''
    if nombreAutor == None: #captura si no paso nada
        return "Ingrese el campo por el que desea buscar"

    else:
        for diccionario in data_json:
                if diccionario['author'] == nombreAutor:
                    contador += 1
                    lista.append(f"{nombreAutor} escribio el libro {diccionario['title']}, en el año {diccionario['year']}")

    if contador == 0:
         return "no existe"
    else:
        return lista

@app.get("/searchTitle")
def buscarInfoLibrosxTitulo(titulo = None):
    lista = []
    contador = 0

    if titulo != None: #por titulo
        for diccionario in data_json:
                if diccionario['title'] == titulo:
                    contador += 1
                    lista.append(f"{diccionario['author']} escribio el libro {diccionario['title']}, en el año {diccionario['year']}")

    else:
        return "Ingrese algo"

    if contador == 0:
         return "no existe"
    else:
        return lista

@app.get("/searchLanguage")
def buscarInfoLibrosxIdioma(language = None):
    lista = []
    contador = 0

    if language != None: #por titulo
        for diccionario in data_json:
                if diccionario['language'] == language:
                    contador += 1
                    lista.append(f"{diccionario['author']} escribio el libro {diccionario['title']}, en el año {diccionario['year']}")

    else:
        return "Ingrese algo"

    if contador == 0:
         return "no existe"
    else:
        return lista

@app.get("/searchYear")
def buscarInfoLibrosxAnio(year = None):
    lista = []
    contador = 0

    if year != None: #por titulo
        for diccionario in data_json:
                if diccionario['year'] == int(year):
                    contador += 1
                    lista.append(f"{diccionario['author']} escribio el libro {diccionario['title']}, en el año {diccionario['year']}")

    else:
        return "Ingrese algo"

    if contador == 0:
         return "no existe"
    else:
        return lista

#------------POST-------------
#Instancia del objeto
@app.post('/add')
#
def agregar(libro: Libro):
    nuevoLibro = {
        'author': libro.author,
        'country': libro.country,
        'imageLink': libro.imageLink,
        'lenguage': libro.lenguage,
        'link': libro.link,
        'pages': libro.pages,
        'title': libro.title,
        'year': libro.year
    }
    data_json.append(nuevoLibro)


#------------DELETE-------------
#borrar libro
@app.delete("/delete")
def borrarLibro(titulo):
    return data_json.pop(encontrarTitulo(titulo, data_json))