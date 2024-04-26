import { useState, useContext } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from 'react-helmet-async';
import { toast } from "react-toastify";

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
                toast.success("Successfully Logged in!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                if (error.message.split(': ')[1] === "Error (auth/invalid-login-credentials).") {
                    toast.error("Email & Password Did Not Match");
                } else {
                    toast.error(error.message);
                }
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("Successfully Logged in!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(error.message.split(': ')[1]);
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(() => {
                toast.success("Successfully Logged in!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(error.message.split(': ')[1]);
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                toast.success("Successfully Logged in!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(error.message.split(': ')[1]);
            })
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 text-teal-900 space-y-6 flex flex-col lg:flex-row justify-around items-around">
            <Helmet>
                <title>Login - Hephaestus Creations</title>
            </Helmet>
            <form
                data-aos="zoom-out-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-6 w-[96%] md:w-4/5 lg:w-1/2 px-4 lg:px-20 py-4 lg:py-10 bg-white shadow-lg shadow-[#3c3939] border border-[#d3d0d0] rounded-md mx-auto">
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
                        <span className="absolute top-1/2 right-2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                </div>

                {/* <div className="flex gap-2">
                    <h3>Forgot Password? <button className="text-red-700">Click Here</button></h3>
                </div> */}

                <Button buttonType={'submit'} className={'border w-full text-xl font-semibold'} buttonText={'Login'} color={'teal'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                <p className="text-center text-sm md:text-base font-medium">New to this site? <Link className="text-red-700 hover:text-blue-800" to={'/register'}>Register Here!</Link></p>
            </form>

            {/* Social Login */}
            <div
                data-aos="zoom-out-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="flex flex-col gap-2 pt-6 lg:pt-20">
                <h3 className="text-center">Or</h3>
                <h3 className="text-center text-xl font-semibold">Login Using Social Media</h3>
                <div className="flex gap-4 justify-center items-center text-3xl">
                    <button
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        onClick={handleGoogleLogin} className="text-[#4285f4] hover:text-green-700"><FaGoogle></FaGoogle></button>
                    <button
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                        onClick={handleFacebookLogin} className="text-[#0964ff] hover:text-green-700"><FaFacebook></FaFacebook></button>
                    <button
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        data-aos-delay="1500"
                        onClick={handleGithubLogin} className="text-[#000000] hover:text-green-700"><FaGithub></FaGithub></button>
                </div>
            </div>
        </section>
    );
};

export default Login;