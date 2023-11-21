import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoInstagram } from "react-icons/io";
import { AuthContext } from "../../providers/Auth/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    // console.log(location.state);

    const handleSignIn = media => {
        media()
        .then(res => {
            console.log(res.user);
            const userInfo ={name: res.user?.displayName, email: res.user?.email}
            axiosPublic.post('/api/v1/users', userInfo)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    icon: "success",
                    title: "Sign in successful!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(location.state || '/')
            })
           
        })
        .catch(err => console.log(err.message))
    }
    return (
        <div className="mt-5">
            <div className="divider divider-neutral">Or</div>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
                <button onClick={() => handleSignIn(googleSignIn)} className="btn btn-outline btn-wide"><FcGoogle className="text-xl"/> Google</button>
                <button className="btn btn-outline btn-wide"><IoLogoInstagram className="text-xl"/> Instagram</button>
            </div>
        </div>
    );
};

export default SocialLogin;