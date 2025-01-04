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
//get dealers
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
export const getProductCategory = async(category,searchKey)=>{    
    return await commonAPI('GET',`${baseURL}/get-products/${category}?search=${searchKey}`,"","")
}
//get productDeatils

export const getProductDeatils = async(id)=>{
    return await commonAPI('GET',`${baseURL}/getDeatileProduct/${id}`,"","")
}
// add cart
export const addcart = async(id,reqBody,reqHeader)=>{
    return await commonAPI('POST',`${baseURL}/addtocart/${id}`,reqBody,reqHeader)
} 
//get product from cart

export const getcartDetails = async(id,reqHeader)=>{
    return await commonAPI('GET',`${baseURL}/get-product-from-cart/${id}`,"",reqHeader)
}
//delete cart

export const deleteFromcart = async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${baseURL}/delete-from-cart/${id}`,{},reqHeader)
}

//delete dealer byy admin
export const deleteDealer = async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${baseURL}/delete-dealer/${id}`,{},reqHeader)
}

// otp verification

export const otpVerification = async(reqBody)=>{
    return await commonAPI('POST',`${baseURL}/verify-otp`,reqBody,"")
}

//otp resend

export const otpResend = async(reqBody)=>{
    return await commonAPI('POST',`${baseURL}/resend-otp`,reqBody,"")
}

//google signIn
export const googleSignIn = async(reqBody)=>{
    return await commonAPI('POST',`${baseURL}/google_signIn`,reqBody,"")
}

//Forgot password
export const forgotpassword = async(reqBody)=>{    
    return await commonAPI('POST',`${baseURL}/forgotpassword`,reqBody,"")
}

//update password

export const updatedPassword = async(reqBody)=>{
    return await commonAPI('PUT',`${baseURL}/updatedpassword`,reqBody,"")
}

//Payment

export const paymentController = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${baseURL}/payment`,reqBody,reqHeader)
}
//place Order

export const placeOrder = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${baseURL}/placeOrder`,reqBody,reqHeader)
}

//get Orders
export const getOrders = async(reqHeader)=>{
    return await commonAPI('GET',`${baseURL}/get-Orders`,"",reqHeader)
}

//get order for admin

export const getOrderadmin = async(reqHeader)=>{
    return await commonAPI('GET',`${baseURL}/getOrder-admin`,"",reqHeader)
}

//view product admin

export const viewproductAdmin =async(reqHeader)=>{
    return await commonAPI('GET',`${baseURL}/getProductAdmin`,"",reqHeader)
}

// product review

export const productReview = async(reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${baseURL}/product-review`,reqBody,reqHeader)
}
//get users
export const getUsers = async(reqHeader)=>{
    return await commonAPI('GET',`${baseURL}/getUsersAdmin`,"",reqHeader)
}

//delete user by admin
export const deleteUser = async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${baseURL}/delete-user/${id}`,{},reqHeader)
}

//app Review
export const appReview =async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${baseURL}/app-Review`,reqBody,reqHeader)
}

//get app review

export const getAppreview = async(reqHeader)=>{
    return await commonAPI('GET',`${baseURL}/getreview`,"",reqHeader)
}

//user profile edit
export const userprofile = async(reqHeader,reqBody)=>{
    return await commonAPI('PUT',`${baseURL}/updateprofile`,reqHeader,reqBody)
}

