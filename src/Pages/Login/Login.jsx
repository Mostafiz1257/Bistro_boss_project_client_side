import { useEffect, useRef, useState } from 'react';
import loginImage from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)

    const { signIn, logOut } = useContext(AuthContext)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message
                console.log(errorMessage);
            })


    }

    const handleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) == true) {

            setDisable(false)
        }

        else {
            setDisable(true)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Please log in now!</h1>
                    <img src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplateNoReload />
                            </label>
                            <input type="text" ref={captchaRef} name='captcha' placeholder="Enter the above captcha" className="input input-bordered" required />
                            <button onClick={handleCaptcha} className='mt-2 btn-xs btn btn-tiny btn-secondary'>confirm captcha</button>
                        </div>
                        <div className="form-control mt-6">

                            <input disabled={disable} type="submit" className='btn btn-primary' value="Login" />
                        </div>
                    </form>
                    <Link to='/signUp'>  <p className=' flex justify-center mb-2 text-pink-500'> Create account</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;