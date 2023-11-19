import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';

export default function Navbar() {
    const { toggleModals, currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        }
        catch (err) {
            alert("For some reasons we can't deconnect, pleas check your Internet connection and retry !");
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} className='navbar-brand'> AuthJS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {currentUser &&
                            <li className="nav-item">
                                <Link className="nav-link" to={'private/dashboard'}>Dashboard</Link>
                            </li>
                        }
                    </ul>
                    {currentUser ?
                        <button onClick={logout} className="btn btn-danger ms-2">
                            Log Out
                        </button> :
                        <>
                            <button onClick={() => toggleModals("SignUp")}
                                className="btn btn-primary">
                                Sign Up
                            </button>
                            <button onClick={() => toggleModals("SignIn")}
                                className="btn btn-primary ms-2">
                                Sign In
                            </button>
                        </>
                    }
                    <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
