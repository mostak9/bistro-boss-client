import { Button, Input } from "@material-tailwind/react";
import bg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import authenticImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Auth/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const Login = () => {

    const [captchaError, setCaptchaError] = useState(false)
    const captchaRef = useRef(null);
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.state);


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


 
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user_captcha = captchaRef.current.value;

    if(!validateCaptcha(user_captcha)) {
      setCaptchaError(true);
      return;
    } else setCaptchaError(false)

    console.log(email, password);
    signIn(email, password)
    .then(res => {
      console.log(res.user)
      Swal.fire({
        icon: "success",
        title: "Sign in successful!",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(location.state || '/')
    })
    .catch(err => console.log(err.message))

  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-center text-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Helmet><title>Bistro Boss | Sign in</title></Helmet>
      <div className="flex flex-col md:flex-row items-center gap-5 p-12 shadow-2xl rounded-md w-3/4  m-auto">
        <div>
          <img src={authenticImg} alt="" />
        </div>
        <div className="w-3/4">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4">Sign In</h1>
          </div>
          <form action="" onSubmit={handleSignIn} className="space-y-4">
            <Input size="lg" name="email" type="email" label="Email" required/>
            <Input size="lg" name="password" type="password" label="Password" required />
            <div className="text-left space-y-2 mt-5">
                <LoadCanvasTemplate/>
                <Input inputRef={captchaRef} size="lg" name="captcha" type="text" label="Enter captcha here" required />
                {captchaError && <p className="text-xs italic text-red-500">⚠️ Enter correct captcha</p>}
               
            </div>
            <Button variant="gradient" type="submit" className="w-full mt-5">
              Sign in
            </Button>
            <p>New here? <Link to={'/signUp'} className="btn-link">Create an account.</Link></p>
          </form>
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Login;
