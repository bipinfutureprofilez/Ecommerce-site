import React, { useState } from 'react';
import useGetRegister from '../hooks/useGetRegister';

export default function Register() {

    const { signUpHook, loading } = useGetRegister();

    const [inputValue, setInputValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValues(values => ({ ...values, [name]: value}))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        signUpHook(inputValue);
    }

    return (
        <>
            <div className='register_sec py-5'>

                <div className='container'>
                    <div className='card p-5 w-50 mx-auto'>
                        <form onSubmit={handleOnSubmit}>
                            {/* <img className="mb-4" src={Logo} alt="" width="72" height="57" /> */}
                            <h1 className="h3 mb-3 fw-bold text-center">Please sign up</h1>
                            <div className="form-floating mb-3">
                                <input type="name" name='name' className="form-control" id="floatingInput" placeholder="Username" value={inputValue.name} onChange={handleOnChange} />
                                <label htmlFor="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" value={inputValue.email} onChange={handleOnChange} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" value={inputValue.password} onChange={handleOnChange} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" name='confirmPassword' className="form-control" id="confirmPassword" placeholder="Confirm Password" value={inputValue.confirmPassword} onChange={handleOnChange} />
                                <label htmlFor="confirmPassword">Confirm Password</label>
                            </div>
                            {/* <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div> */}
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
