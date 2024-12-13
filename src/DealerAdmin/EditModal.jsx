import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { updateproducts } from '../Services/AllAPI';
import { baseURL } from '../Services/baseURL';

function EditModal({product}) {
    const [preview, setPreview] = useState('')
    
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editproduct,seteditProduct] = useState({
        name: product.productname,
        category: product.category,
        description: product.aboutProduct,
        prize: product.price,
        productImg: ''
    })
 const handleUpdate =async()=>{
    
    const {name,category,description,prize,productImg} =  editproduct
    if(!name || !category || !description || !prize ){
        alert('fill the form')
    }else{
        
        const token = sessionStorage.getItem('token')

        const reqHeader = {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
        const reqBody = new FormData()

        reqBody.append('name',name)
        reqBody.append('category',category)
        reqBody.append('description',description)
        reqBody.append('prize',prize)
         preview ? reqBody.append('productImage',editproduct.productImg) : reqBody.append('productImage',product.productImage)

         const response = await updateproducts(product._id,reqHeader,reqBody)
         console.log(response);
         if(response.status === 200){
            alert("Update Successfully")
             setShow(false);

        }else if(response.status === 406){
            alert('Only png and jpg are allowed')
        }else{
            alert('Internal Serer Error')

        }
        
    }
 }
    console.log(editproduct);
    useEffect(()=>{
        if(editproduct.productImg){
            setPreview(URL.createObjectURL(editproduct.productImg))
        }
    },[editproduct.productImg])

    return (
        <div>
            <Button className='ms-5' variant="primary" onClick={handleShow}>Edit</Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="form-group mb-4" id="productCategory">
                                        <select class="form-select" id="categorySelect" aria-label="Select product category"
                                        value={editproduct.category} 
                                        onChange={(e)=>seteditProduct({...editproduct,category:e.target.value})}
                                        >
                                            <option value="" selected>Choose Category</option>
                                            <option value="cars">Cars</option>
                                            <option value="motorcycles">Motorcycle</option>
                                        </select>
                                    </div>
                    <div className="mb-4">
                        <label htmlFor="form1" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="form1" value={editproduct.name}
                        onChange={(e)=>seteditProduct({...editproduct,name:e.target.value})}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="form2" className="form-label">Discription</label>
                            <textarea className='form-control' name="" id="" style={{ width: "470px", height: "30px" }}
                            value={editproduct.description}
                            onChange={(e)=>seteditProduct({...editproduct,description:e.target.value})}
                            ></textarea>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="form1" className="form-label">Price</label>
                        <input type="text" className="form-control" id="form1"
                        value={editproduct.prize}
                        onChange={(e)=>seteditProduct({...editproduct,prize:e.target.value})}
                        />
                    </div>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <label>
                        Product Image
                            <input type="file" style={{display:'none'}}
                            onChange={(e)=>seteditProduct({...editproduct,productImg:e.target.files[0]})}
                            />
                            <img src={preview?preview:`${baseURL}/uploads/${product.productImage}`} alt="product image" className='img-fluid'
                            style={{height:'300px',width:'100%'}}
                            />
                        </label>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

          
        </div>
    )
}

export default EditModal