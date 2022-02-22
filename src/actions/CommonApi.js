import {PRODUCTS, SINGLE_PRODUCT} from "../store/ProductStore";

export function resolveOrigin() {
    return (
      window.location.origin ||
      `${window.location.protocol}//${window.location.hostname}${
        window.location.port ? `:${window.location.port}` : ""
      }`
    );
  }

export function getProduct(id) {
    const origin = resolveOrigin();
    const path = `${origin}/product/${id}`;
    console.log(`fetch product by: ${path}`)
    return SINGLE_PRODUCT;
}

export function getProductBy(id) {
    const origin = resolveOrigin();
    const path = `${origin}/products`;
    console.log(`fetch products by: ${path}`)
    return PRODUCTS.find(p => p.id === Number.parseInt(id));
}