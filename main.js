class productManager {
    constructor() {
        this.products = []
    }

    static id = 0;

    addProduct(title, description, price, thumbnail, stock, code) {
        if (this.products.find((producto) => producto.code === code) || Array.from(arguments).length !== 6){
            console.log("ERROR: producto repetido o campos faltantes.");
        } else {
            this.products.push({title, description, price, thumbnail, stock, code, id:productManager.id});
            productManager.id++;
            console.log("Producto creado satisfactoriamente.");
        } 
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        const paquete = this.products.find((producto) => producto.id === id)
        if (paquete) {
            let retorno = paquete;
            return retorno;
        } else {
            let retorno = "ID no encontrada: si el problema persiste contacte con el administrador.";
            return retorno;
        } 

    }

}

const productos = new productManager;

console.log(productos.getProducts()); //Muestra array vacío

productos.addProduct("producto prueba 0", "Este es un producto de prueba 0", 200, "Sin imagen", 25, "ABC123");      //Crea producto
productos.addProduct("producto prueba 1", "Este es un producto de prueba 1", 200, "Sin imagen", 25, "ABC123");      //Repetido
productos.addProduct("producto prueba 2", "Este es un producto de prueba 2", 200, "Sin imagen", 25);                //Falta

console.log(productos.getProducts()); //Muestra array lleno

console.log(productos.getProductsById(0)); //Muestra ID (existe)

console.log(productos.getProductsById(7)); //Muestra ID (no existe)