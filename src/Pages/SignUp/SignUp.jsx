import { Link } from 'react-router-dom';
import signUpImg from '../../assets/others/authentication2.png'
import { useForm } from "react-hook-form";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:W-1/2  lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <img src={signUpImg} alt="" />
                </div>
                <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name" , { required: true })} name='name' placeholder="Name" className="input input-bordered"  />
                            {errors.name && <span className=' text-red-400'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered"  />
                            {errors.email && <span className=' text-red-400'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", { required: true,minLength:6 ,maxLength: 20 })} placeholder="password" className="input input-bordered" required />
                            {errors.password && <span className=' text-red-400'>This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className=' flex justify-center mb-2 text-green-400'><Link to="/login">I have an account ? Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;