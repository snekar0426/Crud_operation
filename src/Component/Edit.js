import React, { useEffect, useState } from 'react'
import { Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import User from '../Component/User';
function Edit  ()  {

    let history = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobileno,setMobileno] = useState("");
    const [id,setid] = useState("");

    let index = User.map(function (e) {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === "" || email === "" || mobileno === "" ){
            alert("Invalid input");
            return;
        }

        let a = User[index];
        a.Name = name;
        a.Email = email;
        a.MobileNumber = mobileno ;

        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem("Name"))
        setEmail(localStorage.getItem("Email"))
        setMobileno(localStorage.getItem("MobileNumber"))
        setid(localStorage.getItem("id"))
    },[])
    
  return (
    <div>
       <div>
      <Form className='d-grid gap-2' style={{margin:"5rem"}}>
        <Form.Group className='mb-3' controlId='Name'>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Your Name' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='Email'>
            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Enter Your Email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='MobileNumber'>
            <Form.Control value={mobileno} onChange={(e) => setMobileno(e.target.value)} type='text' placeholder='Enter Your Mobile Number' required />
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e) }
        variant='success' type='submit'>Update</Button>
         
        <Link className='d-grid gap-2' to="/">
            <Button variant='info' size='lg'>
                Home
            </Button>
        </Link>
      </Form>
    </div>
    </div>
  )
}

export default Edit
