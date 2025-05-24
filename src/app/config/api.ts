import { environment } from "src/environments/environment";

//Front end
// export const baseUrl = environment.production ? 'https://api.shoppingcart.com': 'https://68203e5572e59f922ef81312.mockapi.io/tienda/v1'
export const baseUrl = environment.production ? 'https://68203e5572e59f922ef81312.mockapi.io/tienda/v1': 'https://68203e5572e59f922ef81312.mockapi.io/tienda/v1'

export const productsURl = baseUrl + '/products'
export const singleProductURl = baseUrl + '/products/:id'

export const cartURl = baseUrl + '/carts'
export const updateCartURl = baseUrl + '/carts/:id'
export const deleteCartUrl = baseUrl + '/carts'
export const wishlistURL = baseUrl + '/wishlist'


//Backend 
export const baseApi = '/api'
export const baseBackendUrl = environment.production ? 'https://api.shoppingcart.com': 'https://pupicatwebapidesa-frcwdyakgba4dzaq.eastus2-01.azurewebsites.net' + baseApi
// export const postLoginURL = baseBackendUrl + '/User/Login'
export const postLoginURL = baseBackendUrl + '/Authentication/login'