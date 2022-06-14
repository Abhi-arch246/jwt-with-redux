import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginpic from '../online-optics.svg'
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
        <div className='row bgcolor p-4'>
            <h2 className='text-white text-center pb-1'>Ay! Captain Register here</h2>

            <div className="col-md-5 mx-auto mt-3 py-5 px-5">
                <div className="card p-3 bg-white">
                    <h2 className='pt-2 px-4'>Register</h2>
                    <form className='mt-5 mx-4' onSubmit={registerSubmit}>
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
                        <div className='text-center'>

                            <button type="submit" className="submit-btn mt-5">Submit</button>
                        </div>
                    </form>
                    <Link className="text-primary text-center my-3" to="/">Already Registered? Click here to login</Link>
                </div>
                <ToastContainer />
            </div>
            <div className="col-md-6 mr-5 text-center mt-3 py-5">
                <img className='img-class img-fuild' src={loginpic} width="450px" height="450px" alt="" />
            </div>

        </div>
    )
}

export default Register