import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logoutUser } from '../actions/userAction'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userdata = JSON.parse(localStorage.getItem('user'))

    const userstate = useSelector(state => state.loginReducer)
    const { currentUser } = userstate
    // console.log(currentUser);

    useEffect(() => {
        if (!userdata)
            navigate('/')
    }, [])



    // if (!userdata) {
    //     navigate('/')
    // }





    return (
        <div className='container'>
            <div className="justify-content-center">
                <div className="row mt-4">
                    <div className="col-md-8 mt-5 mx-auto shadow-lg">
                        <div className='p-5 rounded'>
                            <h1 className='py-4'>Dashboard</h1>
                            {userdata && (
                                <div>
                                    <h2>Welcome <span className="text-style">{currentUser.username}</span></h2>
                                    <h2>Your email is <span className='text-style'>{currentUser.email}</span> </h2>
                                </div>

                            )

                            }

                            <li className='btn btn-danger rounded mt-2 float-end' onClick={() => {
                                dispatch(logoutUser())
                                toast.error("Logged out!", {
                                    position: toast.POSITION.TOP_RIGHT,
                                    autoClose: 2500,
                                    theme: "colored"
                                });
                            }}>Logout</li>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <lottie-player
                            src="https://assets10.lottiefiles.com/packages/lf20_xyadoh9h.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                    </div>

                </div>
                <div className="row m-3">
                    <div className="col-md-8 table-responsive">
                        <table className='table table-hover table-stripped'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th scope='col'>User ID</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>User Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   /* users.length > 0 ? (
                                        users.map(user => {
                                            return <tr key={user._id}>
                                                <td>{user._id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        })
                                    ) : (
                                        <h1 className='text-center'>No Users yet</h1>
                                    )
                                     {users && (
                                    users.map(user => {
                                        return <tr key={user._id}>
                                            <td>{user._id}</td>
                                            <td>{user.name}/-</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                )} */}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard