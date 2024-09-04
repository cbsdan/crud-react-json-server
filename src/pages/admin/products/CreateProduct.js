import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default  function CreateProduct () {

    const [validationErrors ,setValidationErrors] = useState([]);

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const product = Object.fromEntries(formData.entries())
        console.log("FormData Entries:", [...formData.entries()]); // Log FormData entries


        if (!product.name || !product.brand || !product.category || !product.price || !product.description || !product.image.name) {
            alert("Please fill all the fields!")
            return
        }

        try {
            const response = await fetch("http://localhost:4000/products", {
                method: "POST",
                body: formData
            })
            const data = await response.json()
            console.log(data);

            if(response.ok) {
                //Product created correctly!
                navigate("/admin/products")
            } else if (response.status === 400) {
                setValidationErrors(data);
            } else {
                alert("Unable to create the product")
            }
        } catch(error) {
            alert("Unable to connect to the server!")
        }
    }

    return (
        <div className="container my-4">
            <div className="col-md-8 mx-auto rounded border p-4">
                <h2 className="text-center mb-5">Create Product</h2>

                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-8">
                            <input className="form-control" name="name" />
                            <span className="text-danger">{validationErrors.name}</span>
                        </div>
                    </div>
                    
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Brand</label>
                        <div className="col-sm-8">
                            <input className="form-control" name="brand" />
                            <span className="text-danger">{validationErrors.brand}</span>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Category</label>
                        <div className="col-sm-8">
                            <select className="form-control" name="category" > 
                                <option value="Other">Other</option>
                                <option value="Pastry">Pastry</option>
                                <option value="Bread">Bread</option>
                                <option value="Cake">Cake</option>
                                <option value="Custard">Custard</option>
                                <option value="Pie">Pie</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Snack">Snack</option>
                            </select>
                            <span className="text-danger">{validationErrors.category}</span>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Price</label>
                        <div className="col-sm-8">
                            <input className="form-control" name="price" type="number" min="0" />
                            <span className="text-danger">{validationErrors.price}</span>
                        </div>
                    </div>
                    
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Description</label>
                        <div className="col-sm-8">
                            <textarea className="form-control" name="description" rows="4"></textarea>
                            <span className="text-danger">{validationErrors.description}</span>
                        </div>
                    </div>
                    
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Image</label>
                        <div className="col-sm-8">
                            <input className="form-control" name="image" type="file" />
                            <span className="text-danger">{validationErrors.image}</span>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="offset-sm-4 col-sm-4 d-grid">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div className="col-sm-4 d-grid">
                            <Link className="btn btn-secondary" to="/admin/products" role="button">Cancel</Link>
                        </div>
                    </div>
                </form>                
            </div>

        </div>
    )
}