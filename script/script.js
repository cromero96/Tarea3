//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];


let btnMostrarPaises = document.getElementById('mostrarPaises');
let btnAgregarPaises = document.getElementById('agregarPais');

//funcion para agregar listeners a los botones
function agregarMonitores() {
    //TODO
    btnMostrarPaises.addEventListener("click", mostrarPaises);
    btnAgregarPaises.addEventListener("click", agregarPais);
}
agregarMonitores();

//funcion que mostrara las paises en la pagina
function mostrarPaises() {
  //TODO
    
    //Funcion para mostrar body en la tabla
    let bodyTabla = paises.map(function(paisesTod){
        
            return `
            <thead>
                <tr class="trTabla">
                <td>Nombre:</td>
                <td>Capital:</td>
                <td>Idioma:</td>
                <td>Moneda:</td>
                </tr>
            </thead>
            <tbody id="">
                <tr class="trTabla">
                <td>${paisesTod.nombre}</td>
                <td>${paisesTod.capital}</td>
                <td>${paisesTod.idioma_oficial}</td>
                <td>${paisesTod.moneda}</td>
                </tr>
            </tbody>
            <tfoot>
                <section class"text-center">
                <img src="${paisesTod.bandera}" alt="" class"text-center">
                </section>
            </tfoot>
            `;  
        })
   document.getElementById('tablaGen').innerHTML = bodyTabla;
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
    let promtNombre = prompt('Agregar Nombre del país');
    let promtCapital = prompt('Agregar capital del país');
    let promtIdioma = prompt('Agregar Idioma del país');
    let promptMoneda = prompt('Agregar aquí la moneda');
    let promptImg = prompt('Agragar una imagen');
    let todosLosPaises = promtNombre + promtCapital + promtIdioma + promptMoneda + promptImg;
    if(todosLosPaises == ""){ 
          
    }else{
        paises.unshift({
            nombre: promtNombre,
            capital: promtCapital,
            idioma_oficial: promtIdioma,
            moneda: promptMoneda,
            bandera: promptImg
        })
    }
    mostrarPaises()
}