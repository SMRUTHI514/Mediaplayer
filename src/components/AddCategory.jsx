import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';


function AddCategory({addres}) {
    const [show, setShow] = useState(false);
    const [Category, setCategory] = useState({
        name: "", videos: []
    })

    const addCategory = async () => {
        const { name } = Category
        if (!name) {
            toast.warning("Enter valid inputs!!")
        }
        else {
            const result = await addCategoryApi(Category)
            console.log(result)
            if (result.status == 201) {
                toast.success("Category Added Successfully!!")
                handleClose()
                setCategory({ name: "", videos: [] })
                addres(result)
            }
            else {
                toast.error("Something went wrong!!")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className="btn btn-success" onClick={handleShow}>Add Category +</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text" placeholder='Enter Category Name' onChange={(e) => { setCategory({ ...Category, name: e.target.value }) }} className="form-control" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addCategory}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCategory