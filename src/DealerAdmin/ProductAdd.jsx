import React, { useEffect, useState } from 'react';
import { productAdd } from '../Services/AllAPI';

function ProductAdd() {
    const [preview,setPreview] = useState('')
    const [addProduct,setProduct] = useState({
        name:'',
        category:'',
        description:'',
        prize:'',
        productImg:''
    })
    // console.log(addProduct);
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const {name,category,description,prize,productImg} = addProduct

        if(!name || !category || !description || !prize || !productImg){
            alert('plaese add all fields')
        }else{
            const reqBody =new FormData()

            reqBody.append('name',name)
            reqBody.append('category',category)
            reqBody.append('description',description)
            reqBody.append('prize',prize)
            reqBody.append('productImage',productImg)
            const token = sessionStorage.getItem('token')

            const reqHeader ={
                'Authorization': `Bearer ${token}`,
                "Content-Type":"multipart/form-data"
            }
            const response =await productAdd(reqBody,reqHeader)
            console.log(response);
            if(response.status === 200){
                setPreview('')
                setProduct({name:'',category:'',description:'',prize:'',productImg:''})
                alert("Product added Successfully")

            }else if(response.status ===406){
                alert('only png,jpg pr jpeg file are allowed')
            }
            else if(response.status === 409){
                alert(response.response.data.message)
            }else{
                alert('Server Error')
            }
        }
    }

    useEffect(()=>{
      if(addProduct.productImg){
        setPreview(URL.createObjectURL(addProduct.productImg))
      }
    },[addProduct.productImg])
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card rounded-3">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                            className="w-100 rounded-top"
                            alt="Sample"
                        />
                        <div className="card-body px-4 px-md-5">
                            <h3 className="mb-4 pb-2">Add Products</h3>
                            <form>
                                <div className="mb-4">
                                    <div class="form-group mb-4" id="productCategory">
                                        <select class="form-select" id="categorySelect" aria-label="Select product category"
                                        value={addProduct.category}
                                        onChange={(e)=>setProduct({...addProduct,category:e.target.value})}
                                        >
                                            <option value="" selected>Choose Category</option>
                                            <option value="cars">Cars</option>
                                            <option value="motorcycles">Motorcycle</option>
                                        </select>
                                    </div>


                                    <input
                                        type="text"
                                        className="form-control"
                                        id="productName"
                                        placeholder="Enter product name"
                                        value={addProduct.name}
                                        onChange={(e)=>setProduct({...addProduct,name:e.target.value})}
                                    />
                                </div>
                                <div className="mb-4">

                                    <textarea
                                        className="form-control"
                                        id="productDescription"
                                        rows="3"
                                        placeholder="Enter product description"
                                        value={addProduct.description}
                                        onChange={(e)=>setProduct({...addProduct,description:e.target.value})}
                                    ></textarea>
                                </div>
                                <div className="mb-4">

                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        placeholder="Enter product price"
                                        value={addProduct.prize}
                                        onChange={(e)=>setProduct({...addProduct,prize:e.target.value})}
                                    />
                                </div>
                                <div className="mb-4">
                                   <label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="productImage"
                                            onChange={(e)=>setProduct({...addProduct,productImg:e.target.files[0]})}
                                        />
                                   </label> <br /><br />
                                   {
                                            preview &&
                                            <img style={{height:'200px',width:"50%"}} src={preview} alt="" />
                                  }
                                </div>
                                <button type="submit" className="btn btn-success w-100"
                                onClick={(e)=>handleSubmit(e)}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductAdd;
