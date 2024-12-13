import { baseURL } from "./baseURL"
import { commonAPI } from "./commonAPI"

export const userRegister = async(user)=>{
    return await commonAPI('POST',`${baseURL}/register`,user,"")
}
export const userlogin = async(user)=>{
    return await commonAPI('POST',`${baseURL}/login`,user,"")
}
export const dealeRegister = async(dealer,reqHeader)=>{
    return await commonAPI('POST',`${baseURL}/dealer-register`,dealer,reqHeader)
}
export const getDealers = async(reqHeader)=>{
    return await commonAPI('GET',`${baseURL}/dealer-get`,"",reqHeader)
}

// dealer status update- approve or reject
export const dealerStatus = async(id,status,reqHeader)=>{
    return await commonAPI('PUT',`${baseURL}/dealer-status-update/${id}`,{status},reqHeader)
}
// add product
export const productAdd = async(product,reqHeader)=>{
    return await commonAPI('POST',`${baseURL}/addproduct`,product,reqHeader)
}
// get all products - dealer
export const getDealerProducts = async(reqHeader)=>{
    return await commonAPI('GET',`${baseURL}/getProduct-dealer`,"",reqHeader)
}

// delete product - dealer
export const deleteProduct = async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${baseURL}/delete-product-dealer/${id}`,{},reqHeader)
}

// update product-dealer
export const updateproducts = async(id,reqHeader,reqBody)=>{
    return await commonAPI('PUT',`${baseURL}/update-product-dealer/${id}`,reqBody,reqHeader)
}

// get product based on category
export const getProductCategory = async(category)=>{
    return await commonAPI('GET',`${baseURL}/get-products/${category}`,"","")
}


