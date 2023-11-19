import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function SignInModale() {
    const {modaleState, toggleModals, signIn } = useContext(UserContext);

    const [validation, setValidation] = useState('');
    const inputs = useRef([]);
    const formRef= useRef();
    const navigate = useNavigate();
    //console.log(signUp)
    
    const addInputs = el=> {
        if(el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    }

    const handleSubmit= async (e)=> {
        e.preventDefault();
        setValidation('');
       console.log("INPUTS ====>",inputs.current[0].value, inputs.current[1].value);
        try {
            await signIn(inputs.current[0].value, inputs.current[1].value);
            //formRef.current.reset();
            setValidation('');
            toggleModals('Close');
            navigate('/private/dashboard');
            
        } catch {
            setValidation('Email and/or password incorrect');
        }
    }

    const closeModal =()=>{
        setValidation('');
        toggleModals('Close');
    }

    return (
        <>
        {modaleState.SignInModale && (
        <div className="position-fixed top-0 vw-100 vh-100">
                <div onClick={() => closeModal()}
                 className="w-100 h-100 bg-dark bg-opacity-75">
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
                        
                        <div className="modal-dialog bg-white p-4">
                            <div className="modal-content">
                                <div className="modal-header mb-4">
                                    <h4 className="modal-title ">Sign In</h4>
                                    <button onClick={() => closeModal()} type="button" className="btn-close"></button>
                                </div>
                                <div className="modal-body" onSubmit={handleSubmit}>
                                    <form className='sign-up-form' ref={formRef}>
                                        <div className="mb-3">
                                            <label className='form-label' htmlFor='signInEmail'>Email</label>
                                            <input ref={addInputs} type='email' className='form-control' name='signInEmail' id='signInEmail' placeholder="Email" />

                                        </div>
                                        <div className="mb-3">
                                            <label className='form-label' htmlFor='signInPwd'>Password</label>
                                            <input ref={addInputs} type='password' className='form-control' name='signInPwd' id='signInPwd' placeholder="#############" />

                                        </div>
                                        {validation && 
                                        <div className="mb-3 text-danger text-sm">
                                            {validation}
                                        </div>
                                        }
                                        <div className="mb-0 mt-3">
                                                <button  type="submit" className="btn w-100 btn-dark">Sign in</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
