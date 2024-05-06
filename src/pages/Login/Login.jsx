import { useState, useContext } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from 'react-helmet-async';
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userLogin, googleLogin, facebookLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = data => {
        const { email, password } = data;
        userLogin(email, password)
            .then(() => {
                toast.success("Successfully Logged in!", { autoClose: 2500 });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/invalid-credential).") {
                    Swal.fire({
                        title: 'Error!',
                        text: "Email & Password Did Not Match!",
                        icon: 'error',
                        confirmButtonText: 'Close'
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: error.message,
                        icon: 'error',
                        confirmButtonText: 'Close'
                    });
                }
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("Successfully Logged in!", { autoClose: 2500 });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/popup-closed-by-user).") {
                    Swal.fire({
                        title: 'Alert!',
                        text: "Popup Closed by User!",
                        icon: 'warning',
                        confirmButtonText: 'Close'
                    });
                } else {

                    Swal.fire({
                        title: 'Error!',
                        text: error.message.split(': ')[1] || error.message,
                        icon: 'error',
                        confirmButtonText: 'Close'
                    });
                }
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(() => {
                toast.success("Successfully Logged in!", { autoClose: 2500 });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/popup-closed-by-user).") {
                    Swal.fire({
                        title: 'Alert!',
                        text: "Popup Closed by User!",
                        icon: 'warning',
                        confirmButtonText: 'Close'
                    });
                } else {

                    Swal.fire({
                        title: 'Error!',
                        text: error.message.split(': ')[1] || error.message,
                        icon: 'error',
                        confirmButtonText: 'Close'
                    });
                }
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                toast.success("Successfully Logged in!", { autoClose: 2500 });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/popup-closed-by-user).") {
                    Swal.fire({
                        title: 'Alert!',
                        text: "Popup Closed by User!",
                        icon: 'warning',
                        confirmButtonText: 'Close'
                    });
                } else {

                    Swal.fire({
                        title: 'Error!',
                        text: error.message.split(': ')[1] || error.message,
                        icon: 'error',
                        confirmButtonText: 'Close'
                    });
                }
            })
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 text-[midnightblue] space-y-6 flex flex-col lg:flex-row justify-around items-center">
            <Helmet>
                <title>Login - Hephaestus Creations</title>
            </Helmet>
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-6 w-[96%] md:w-4/5 lg:w-1/2 px-4 lg:px-20 py-4 lg:py-10 bg-gradient-to-r from-[#9da4dded] to-[#8774dacc] shadow-lg shadow-[#6b5caf] border border-[#d3d0d0] rounded-md">
                <h2 className="text-2xl font-medium">Please, Login</h2>
                <div className="flex flex-col gap-3">
                    <label htmlFor="email">Your Email</label>
                    <input
                        {...register("email", {
                            required:
                                { value: true, message: "You must provide your email address." }
                        })}
                        className="p-2 rounded-lg bg-[#F3F3F3]" type="email" name="email" id="email" placeholder="Your Email" />
                    {
                        errors.email && <p className="text-red-700">{errors.email.message}</p>
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="password">Your Password</label>
                    <div className="relative">
                        <input
                            {...register("password", {
                                required:
                                    { value: true, message: "You must provide a valid password." }
                            })}
                            className="p-2 rounded-lg w-full bg-[#F3F3F3]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Your Password" />
                        {
                            errors.password && <p className="text-red-700">{errors.password.message}</p>
                        }
                        <span className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                </div>

                <Button buttonType={'submit'} className={'border w-full text-xl font-semibold'} buttonText={'Login'} color={'midnightblue'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                <p className="text-center text-sm md:text-base font-medium">New to this site? <Link className="text-red-700 hover:text-blue-800" to={'/register'}>Register Here!</Link></p>
            </form>

            {/* Social Login */}
            <div className="flex flex-col gap-2 pt-6 lg:pt-0 text-[mediumslateblue]">
                <h3 className="text-center">Or</h3>
                <h3 className="text-center text-xl font-semibold">Login Using Social Media</h3>
                <div className="flex gap-4 justify-center items-center text-3xl">
                    <button onClick={handleGoogleLogin} className="text-[#4285f4] border border-[#4285f4] hover:text-white hover:bg-[#4285f4] rounded-full p-2 transition-all duration-500"><FaGoogle></FaGoogle></button>
                    <button onClick={handleFacebookLogin} className="text-[#0964ff] border border-[#0964ff] hover:text-white hover:bg-[#0964ff] rounded-full p-2 transition-all duration-500"><FaFacebook></FaFacebook></button>
                    <button onClick={handleGithubLogin} className="text-black border border-black hover:text-white rounded-full hover:bg-black p-2 transition-all duration-500"><FaGithub></FaGithub></button>
                </div>
            </div>
        </section>
    );
};

export default Login;