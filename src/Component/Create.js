import React, { useState } from 'react'
import { Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import User from '../Component/User';
import {v4 as uuid} from "uuid";
  
function Create() {

    let history = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobileno,setMobileno] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uni = ids.slice(0,8);
        let a = name ,
        b = email ,
        c = mobileno ;

        if(name === "" || email === "" || mobileno === "" ){
            alert("Invalid input");
            return;
        }
        User.push({
        id : uni,
        Name : a,
        Email : b,
        MobileNumber : c
        })
        history("/")
    }

  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"5rem"}}>
        <Form.Group className='mb-3' controlId='Name'>
            <Form.Control onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Your Name' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='Email'>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Enter Your Email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='MobileNumber'>
            <Form.Control onChange={(e) => setMobileno(e.target.value)} type='text' placeholder='Enter Your Mobile Number' required />
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e) }
        variant='success' type='submit'>Submit</Button>
         
        <Link className='d-grid gap-2' to="/" style={{textDecoration : "none"}}> 
            <Button variant='info' size='lg'>
                Home
            </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Create
