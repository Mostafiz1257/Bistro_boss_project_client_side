import { useContext } from 'react';
import { FaGoogle} from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn}  = useContext(AuthContext)
    const navigate =useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogIn =()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            const saveUSer = {name:loggedUser.displayName,email:loggedUser.email}
            console.log(saveUSer);
            fetch('http://localhost:5000/users',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(saveUSer)
            })
            .then(res=>res.json())
            .then(()=>{
                
                    navigate(from,{replace:true})
                
            })
            
            
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className=' text-center my-2'>
            <button onClick={handleGoogleLogIn} className="btn btn-circle btn-outline">
             <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;