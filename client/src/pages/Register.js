import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const dispatch = useDispatch()
    const registerSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: username,
            email: email,
            password: password
        }
        if (password == cpassword) {
            dispatch(registerUser(user))
            toast.success("Registration successful!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2500,
                theme: "colored"
            });

        } else {
            alert('Passwords doesnt match')
        }

    }

    return (
        <div className='row bgcolor px-5 pt-5'>
            <div className="col-md-6 text-center py-5">
                <img className='img-class img-fuild' src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1651744935~exp=1651745535~hmac=d4f6d78ec33831fc619d1d3eee3555a57f64a8ac5e700f2a0c17cc4942d50d2d" alt="" />
            </div>
            <div className="col-md-4">
                <div className="card p-2 bg-white">
                    <h2 className='mt-2' style={{ textAlign: "left", marginLeft: "40px" }}>Register</h2>
                    <form className='col-md-9 mt-5' onSubmit={registerSubmit} style={{ textAlign: "left", marginLeft: "40px" }}>
                        <div className="form-group">
                            <h5>Name</h5>
                            <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className="form-control" placeholder="Enter name" required />
                        </div>
                        <div className='form-group mt-4'>
                            <h5>Email address</h5>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="Enter email" required />
                        </div>
                        <div className="form-group mt-4">
                            <h5>Password</h5>
                            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" placeholder="Password" required />
                        </div>
                        <div className="form-group mt-4">
                            <h5>Confirm Password</h5>
                            <input type="password" value={cpassword} onChange={(e) => setcpassword(e.target.value)} className="form-control" placeholder="Confirm Password" required />
                        </div>
                        <button type="submit" className="submit-btn mt-5">Submit</button>

                    </form>
                    <Link className="text-primary my-3" to="/login">Already Registered? Click here</Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Register