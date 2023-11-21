import { Button, Input } from "@material-tailwind/react";
import bg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import authenticImg from "../../assets/others/authentication2.png";
import { Link,  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/Auth/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();

  const {createUser, updateUserProfile, logOut} = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
    .then(res => {
      console.log(res.user)
      updateUserProfile(data.name, data.photoURL)
      .then (() => {
        const userInfo = {name: data.name, email: data.email}
        axiosPublic.post('/api/v1/users', userInfo)
        .then(res => {
          if(res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Sign up successful!",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/login')
          }
        })
        
        logOut()
        .then(() => {
        })
        .catch(err => console.log(err.message))
        
      })
      .catch(err => console.log(err.message))
      
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Failed to sign Up. User might be exist",
        showConfirmButton: false,
        timer: 1500
      });
    })
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-center text-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Helmet><title>Bistro Boss | Sign up</title></Helmet>
      <div className="flex flex-col md:flex-row-reverse items-center gap-5 p-12 shadow-2xl rounded-md w-3/4  m-auto">
        <div>
          <img src={authenticImg} alt="" />
        </div>
        <div className="w-3/4">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
          </div>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div>
            <Input
              size="lg"
              {...register("name", { required: true })}
              name="name"
              type="text"
              label="Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-xs italic text-red-600 text-left">Name is required</p>
            )}
            </div>
            <div>
            <Input
              size="lg"
              {...register("email", { required: true })}
              name="email"
              type="email"
              label="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-xs italic text-red-600 text-left">Email is required</p>
            )}
            </div>
            <div>
            <Input
              size="lg"
              {...register("photoURL", { required: true })}
              
              type="text"
              label="Photo URL"
            />
            {errors.email?.type === "required" && (
              <p className="text-xs italic text-red-600 text-left">Photo URL is required</p>
            )}
            </div>
            <div>
            <Input
              size="lg"
              {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/ })}
              name="password"
              type="password"
              label="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-xs italic text-red-600 text-left">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-xs italic text-red-600 text-left">Password must be 6 characters!</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-xs italic text-red-600 text-left">Password must contain at least one uppercase, number and special character!</p>
            )}
            </div>
            <Button variant="gradient" type="submit" className="w-full mt-5">
              Sign Up
            </Button>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="btn-link">
                Sign In
              </Link>
            </p>
          </form>
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
