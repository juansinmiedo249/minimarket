// OBTENER ELEMENTOS HTML

const inputDescuento = document.getElementById('descuento');
const botonCalcular = document.getElementById('calcular');
const inputProducto = document.getElementById('productoNuevo');
const resultados = document.getElementById('resultados');
const inputPrecio = document.getElementById('fullPrecio')
const botonAgregar = document.getElementById('agregar');
const tablaFullPrecio = document.getElementById('tablaFullPrecio')

// lista de precios y productos
const precios = [];
const productos = [];


function calcularDescuento() {
    const descuento = parseFloat(inputDescuento.value);
    const preciosConDescuento = precios.map(function(precio){
        const precioConDescuento = precio - (precio * (descuento / 100));
        return precioConDescuento.toFixed(2);// redondear decimales
    });
    const h3Descuento = document.createElement('h3');
    h3Descuento.textContent = "Precio con descuento"
    h3Descuento.style = // css
                        `display: flex;  
                        font-size: 1.5rem;
                        align-items: center;
                        height: 2rem;
                        margin: 0;   `;
    resultados.appendChild(h3Descuento);
    
     preciosConDescuento.forEach((alias,index)=>{
        let container = document.createElement("div");
        let product = document.createElement("p");
        let price = document.createElement("p");

        product.textContent = productos[index];
        price.textContent = alias;

        product.style = // css
                    `font-size: 1.3rem
                    `
        container.style = //css
                        `display: flex;
                        align-items: center;
                        justify-content: space-around;
                        width: 15rem;
                        height: 2rem;
                        border-radius: 3rem;
                        background-color: rgb(234, 245, 175);`

        container.appendChild(product);
        container.appendChild(price);
        resultados.appendChild(container);
    })
   
    
}

// FUNCION AGREGAR PRODUCTO
function agregarPoducto (){
    const newProduct = inputProducto.value;
    const newPrecio = inputPrecio.value;
    productos.push(newProduct)
    precios.push(newPrecio)

    const contenedor = document.createElement('div');
    const chec = document.createElement('input');
    chec.type="checkbox";
    const price = document.createElement('p');
    price.textContent = "$ "+newPrecio;
    const product = document.createElement('p');
    product.textContent = newProduct;
    product.style = // css
                    `font-size: 1.3rem
                    `
    contenedor.style = //css
                    `display: flex;
                    align-items: center;
                    justify-content: space-around;
                    width: 15rem;
                    height: 2rem;
                    border-radius: 3rem;
                    background-color: rgb(234, 245, 175);`
    contenedor.appendChild(chec);
    contenedor.appendChild(product);
    contenedor.appendChild(price);
    tablaFullPrecio.appendChild(contenedor);


   

}
//BOTON CALCULAR
botonCalcular.addEventListener('click',calcularDescuento);
botonAgregar.addEventListener('click',agregarPoducto);
