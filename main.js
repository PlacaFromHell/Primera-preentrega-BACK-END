class productManager {
    constructor() {
        this.products = []
    }

    static id = 0;

    addProduct(title, description, price, thumbnail, stock, code) {
        if (this.products.find((producto) => producto.title === title)){
            console.log("ERROR: producto repetido.");
        } else {
            this.products.push({title, description, price, thumbnail, stock, code:productManager.id});
            productManager.id++;
            console.log("Producto creado satisfactoriamente.");
        } 
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        if (this.products.find((producto) => producto.code === id)){
            let retorno = "El producto se encuentra en la base de datos.";
            return retorno;
        } else {
            let retorno = "ID no encontrada: si el problema persiste contacte con el administrador.";
            return retorno;
        } 

    }

}

const productos = new productManager;

console.log(productos.getProducts()); //Muestra array vacío

productos.addProduct("producto prueba", "Este es un producto de prueba", 200, "Sin imagen", 25, "ABC123");      //Crea producto
productos.addProduct("producto prueba", "Este es un producto de prueba", 200, "Sin imagen", 25, "ABC123");      //Repetido, mensaje de error
productos.addProduct("producto prueba 2", "Este es un producto de prueba 2", 200, "Sin imagen", 25, "ABC123");  //Crea producto

console.log(productos.getProducts()); //Muestra array lleno

console.log(productos.getProductsById(1)); //Muestra ID (existe)

console.log(productos.getProductsById(7)); //Muestra ID (no existe)