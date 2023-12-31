import { Link, useNavigate } from 'react-router-dom';
import signUpImg from '../../assets/others/authentication2.png'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';



const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const onSubmit = data => {
        createUser(data.email, data.password)

            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        
                        const saveUSer = {name:data.name,email:data.email}
                        fetch('http://localhost:5000/users',{
                            method:"POST",
                            headers:{
                                "content-type":"application/json"
                            },
                            body:JSON.stringify(saveUSer)
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            if(data.insertedId){
                                reset();
                                Swal.fire('SignUp successfully !')
                            }
                            navigate('/')
                        })
                        

                    })
                    .catch(error => console.log(error))
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

            })

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
                            <input type="text"  {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className=' text-red-400'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                            {errors.name && <span className=' text-red-400'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className=' text-red-400'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" required />
                            {errors.password && <span className=' text-red-400'>This field is required</span>}
                            {
                                errors.password?.type === "minLength" && <p className=' text-red-600'>Password at least 6 digit</p>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className=' flex justify-center mb-2 text-green-400'><Link to="/login">I have an account ? Log In</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;