import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const LogIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: 'User Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })


    }
    return (
        <>

            <Helmet>
                <title>Bistro Boss | menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>


            <div onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form className="card md:w-1/2  max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">

                                <input disabled={false} className="btn btn-primary" type="submit" value="Please Login" />
                            </div>
                        </div>
                        <p className='p-4 text-center text-red-800' ><small>New Here? <Link to='/signup'>Create an Account</Link></small></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogIn;