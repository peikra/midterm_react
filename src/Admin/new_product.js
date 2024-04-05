import { useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const New_Product = () => {
    

    const validationSchema = yup.object().shape({
        title: yup.string().required("Title is required"),
        price: yup.number().positive().required("Price is required"),
        description: yup.string().required("Description is required"),
        categoryId: yup.number().positive().required("Category ID is required"),
        images: yup.array().of(yup.string().required()).required('At least one image is required'),
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            price: "",
            description: "",
            categoryId: "",
            images: [""]
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            
            console.log(values);
            axios({
                method : "POST",
                url : "https://api.escuelajs.co/api/v1/products/",
                
                data : values
               }).then((res)=>{
                console.log(res)
               })
            resetForm()
        }
    
    })

    const handleImageChange = (event) => {
        formik.setFieldValue('images', [event.target.value]);
      };

      const navigate = useNavigate()

      const back = ()=>{
        navigate("/products")

      }
    

    return (
        <div className="register">
            <form onSubmit={formik.handleSubmit}>
                <fieldset>
                    <h2>Add New Product</h2>
                    <div className="Field">
                        <input
                            name="title"
                            placeholder="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div className="error">{formik.errors.title}</div>
                        ) : null}
                    </div>

                    <div className="Field">
                        <input
                            name="price"
                            placeholder="Price"
                            type="number"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.price && formik.errors.price ? (
                            <div className="error">{formik.errors.price}</div>
                        ) : null}
                    </div>

                    <div className="Field">
                        <input
                            name="description"
                            placeholder="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.description && formik.errors.description ? (
                            <div className="error">{formik.errors.description}</div>
                        ) : null}
                    </div>

                    <div className="Field">
                        <input
                            name="categoryId"
                            placeholder="Category ID"
                            type="number"
                            value={formik.values.id}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.id && formik.errors.id ? (
                            <div className="error">{formik.errors.id}</div>
                        ) : null}
                    </div>

                    <div className="Field">
                        <input
                            name="images"
                            placeholder="Image address"
                            value={formik.values.images[0]}
                            onChange={handleImageChange}
                        />
                       
                    </div>
                    <div className="flex">
                    <button type="submit">Create Product</button>
                    <button onClick={back} >Back</button>

                    </div>
                    
                </fieldset>
            </form>
        </div>
    );
}

export default New_Product;
