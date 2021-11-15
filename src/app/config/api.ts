import { environment } from "src/environments/environment";

//Front end
export const baseUrl = environment.production ? 'https://api.shoppingcart.com': 'http://localhost:3000'
export const productsURl = baseUrl + '/products'
export const cartURl = baseUrl + '/carts'
export const wishlistURL = baseUrl + '/wishlist'


//Backend 
export const baseApi = '/api'
export const baseBackendUrl = environment.production ? 'https://api.shoppingcart.com': 'http://localhost:3000' + baseApi
export const postLoginURL = baseBackendUrl + '/login'