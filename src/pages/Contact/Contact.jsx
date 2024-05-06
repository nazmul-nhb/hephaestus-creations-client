import { useContext } from 'react';
import contactDoodle from '../../assets/contact.png';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Contact = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleMessage = (data) => {
        Swal.fire({
            title: 'Success!',
            text: `Hi, ${data?.name}, Your Message has been sent. You will be replied soon!`,
            icon: 'success',
            confirmButtonText: 'Okay'
        })
        reset();
    }

    return (
        <div className="mx-2 md:mx-8 my-2 md:my-8 p-8 grid grid-cols-1 gap-8 rounded-2xl md:grid-cols-2 bg-gradient-to-r from-[#7076a0ed] to-[#6b5caffb] shadow-lg shadow-[#6b5caf]">
            <Helmet>
                <title>Contact - Hephaestus Creations</title>
            </Helmet>
            <div
                data-aos="zoom-in-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="flex flex-col justify-between">
                <div className="space-y-8">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight lg:text-5xl">Let&rsquo;s talk!</h2>
                    <div className="text-justify md:pr-12">Thank you for your interest in reaching out to us! Whether you have a question, suggestion, or just want to say &ldquo;hello&rdquo;, we&rsquo;re here to listen. Please, feel free to use the form to get in touch with our team. We&rsquo;ll do our best to respond to you as soon as possible.</div>
                </div>
                <img src={contactDoodle} alt="Contact Us" className="w-full md:w-4/5 px-6" />
            </div>
            <form
                data-aos="zoom-out-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                onSubmit={handleSubmit(handleMessage)} className="gap-6 flex flex-col justify-between">
                <div>
                    <label htmlFor='name' className="text-lg">Full name</label>
                    <input
                        {...register("name", {
                            value: `${user?.displayName || ''}`,
                            required:
                                { value: true, message: "You must provide your name." }
                        })}
                        name='name' id="name" type="text" placeholder="Your Full Name" className="border border-[midnightblue] rounded-lg focus:outline-0 w-full p-3 focus:bg-[#6262b69b] transition duration-500" />
                    {
                        errors.name && <p className="text-red-700">{errors.name.message}</p>
                    }
                </div>
                <div>
                    <label htmlFor='email' className="text-lg">Email</label>
                    <input
                        {...register("email", {
                            value: `${user?.email || ''}`,
                            required:
                                { value: false, message: "You must provide a valid email address." }
                        })}
                        name='email' id="email" type="email" placeholder="Your Email" className="border border-[midnightblue] rounded-lg focus:outline-0 w-full p-3 focus:bg-[#6262b69b] transition duration-500" />
                    {
                        errors.email && <p className="text-red-700">{errors.email.message}</p>
                    }
                </div>
                <div>
                    <label htmlFor='msg' className="text-lg">Message</label>
                    <textarea
                        {...register("msg", {
                            required:
                                { value: true, message: "You must write something." }
                        })}
                        name='msg' id="msg" rows="3" placeholder="Write Your Message to us" className="border rounded-lg focus:outline-0 w-full p-3 border-[midnightblue] focus:bg-[#6262b69b] transition duration-500"></textarea>
                    {
                        errors.msg && <p className="text-red-700">{errors.msg.message}</p>
                    }
                </div>
                <button type="submit" className="w-full flex items-center justify-center tracking-wide uppercase p-3 font-bold rounded-lg bg-[midnightblue] text-white border border-[midnightblue] hover:text-[midnightblue] hover:bg-transparent transition duration-500">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;