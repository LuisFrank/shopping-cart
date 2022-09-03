import { environment } from "src/environments/environment";

//Front end
export const baseUrl = environment.production ? 'https://api.shoppingcart.com': 'http://localhost:3000'

export const productsURl = baseUrl + '/products'
export const singleProductURl = baseUrl + '/products/:id'

export const cartURl = baseUrl + '/carts'
export const updateCartURl = baseUrl + '/carts/:id'
export const deleteCartUrl = baseUrl + '/carts'
export const wishlistURL = baseUrl + '/wishlist'


//Backend 
export const baseApi = '/api'
export const baseBackendUrl = environment.production ? 'https://api.shoppingcart.com': 'https://localhost:49153' + baseApi
export const postLoginURL = baseBackendUrl + '/User/Login'