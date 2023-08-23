import { defineStore } from 'pinia';
import { useCoursesStore } from '@/stores/courses.store.js';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    productos: localStorage.getItem('productos') ? JSON.parse(localStorage.getItem('productos')) : [],
    myCourses: localStorage.getItem('cursosComprados') ? JSON.parse(localStorage.getItem('cursosComprados')) : [],
    sumaTotalPrecio: 0,
  }),
  actions: {
    async addProduct(productId) {
      const data = await useCoursesStore().getDetalleCurso(productId);
      const product = {
        nombre: data.nombre,
        precio: data.precio,
        descripcion: data.descripcion,
        productoId: data.id,
        idstripe: data.idstripe,
        imagen: data.imagen,
        certificado: data.certificado,
        activo: data.activo,
        cantidad: 1
      }

      const productosEnLocalStorage = localStorage.getItem('productos');

      const productos = productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];

      const productoExistente = productos.find(function (producto) {
        return producto.idstripe === product.idstripe;
      });

      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        product.cantidad = 1;
        productos.push(product);
      }

      localStorage.setItem('productos', JSON.stringify(productos));
    },
    async getProductsCart() {
      this.productos = JSON.parse(localStorage.getItem('productos'));
    },
    async increaseProductQuantity(idstripe) {
      const productosEnLocalStorage = localStorage.getItem('productos');
      if (productosEnLocalStorage) {
        const productos = JSON.parse(productosEnLocalStorage);
        const updatedProductos = productos.map((producto) => {
          if (producto.idstripe === idstripe) {
            return {
              ...producto,
              cantidad: producto.cantidad + 1
            };
          }
          return producto;
        });
        localStorage.setItem('productos', JSON.stringify(updatedProductos));
      }
    },
    async decreaseProductQuantity(idstripe) {
      const productosEnLocalStorage = localStorage.getItem('productos');
      if (productosEnLocalStorage) {
        const productos = JSON.parse(productosEnLocalStorage);
        const updatedProductos = productos.map((producto) => {
          if (producto.idstripe === idstripe) {
            const newQuantity = producto.cantidad - 1;
            if (newQuantity <= 0) {
              return null;
            }
            return {
              ...producto,
              cantidad: newQuantity
            };
          }
          return producto;
        }).filter(Boolean);
        localStorage.setItem('productos', JSON.stringify(updatedProductos));
      }
    },
    async deleteProduct(idstripe) {
      const productosEnLocalStorage = localStorage.getItem('productos');
      if (productosEnLocalStorage) {
        const productos = JSON.parse(productosEnLocalStorage);
        const updatedProductos = productos.filter((producto) => producto.idstripe !== idstripe);
        localStorage.setItem('productos', JSON.stringify(updatedProductos));
      }
    },
    calcularSumaTotal(clave) {
      const productosEnLocalStorage = localStorage.getItem(clave);
      if (productosEnLocalStorage) {
        const productos = this.productos;
        let sumaTotal = 0;

        productos.forEach((producto) => {
          let precioFinal = producto.precio;

          if (producto.descuento) {
            const descuento = (producto.precio * producto.descuento) / 100;
            precioFinal = producto.precio - descuento;
          }

          const valorProducto = precioFinal * producto.cantidad;

          sumaTotal += valorProducto;
        });
        this.sumaTotalPrecio = sumaTotal
        return sumaTotal;
      }

      return 0;
    },
    async getProductsResume() {
      this.productos = JSON.parse(localStorage.getItem('cursosComprados'));
    },
    resumenSumaTotal(clave) {
      const productosEnLocalStorage = localStorage.getItem(clave);
      if (productosEnLocalStorage) {
        const productos = this.myCourses;
        let sumaTotal = 0;

        productos.forEach((producto) => {
          let precioFinal = producto.precio;

          if (producto.descuento) {
            const descuento = (producto.precio * producto.descuento) / 100;
            precioFinal = producto.precio - descuento;
          }

          const valorProducto = precioFinal * producto.cantidad;

          sumaTotal += valorProducto;
        });
        return sumaTotal;
      }

      return 0;
    },
  }
});
