import { useContext, useState } from 'react';
import contactDoodle from '../../assets/contact.png';
import success from '../../assets/success.png';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleMessage = () => {
        setShowModal(true);
        reset();
    }

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="mx-2 md:mx-8 my-2 md:my-8 p-8 grid grid-cols-1 gap-8 rounded-2xl md:grid-cols-2 dark:bg-gray-100 dark:text-gray-800 shadow-lg shadow-[#2b7178]">
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
                    <div className="dark:text-gray-600 text-justify md:pr-12">Thank you for your interest in reaching out to us! Whether you have a question, suggestion, or just want to say &ldquo;hello&rdquo;, we&rsquo;re here to listen. Please, feel free to use the form to get in touch with our team. We&rsquo;ll do our best to respond to you as soon as possible.</div>
                </div>
                <img src={contactDoodle} alt="Contact Us" className="w-full md:w-4/5 px-6" />
            </div>
            <form
                data-aos="zoom-out-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                onSubmit={handleSubmit(handleMessage)} className="text-[#2b7178] gap-6 flex flex-col justify-between">
                <div>
                    <label htmlFor='name' className="text-lg">Full name</label>
                    <input
                        {...register("name", {
                            value: `${user?.displayName || ''}`,
                            required:
                                { value: true, message: "You must provide your name." }
                        })}
                        name='name' id="name" type="text" placeholder="Your Full Name" className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500" />
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
                        name='email' id="email" type="email" placeholder="Your Email" className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500" />
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
                        name='msg' id="msg" rows="3" placeholder="Write Your Message to us" className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500"></textarea>
                    {
                        errors.msg && <p className="text-red-700">{errors.msg.message}</p>
                    }
                </div>
                <button type="submit" className="w-full flex items-center justify-center tracking-wide uppercase p-3 font-bold rounded-lg bg-teal-600 text-white border border-teal-600 hover:text-teal-600 hover:bg-transparent transition duration-500">Send Message</button>
            </form>
            {
                showModal && (
                    <dialog open className="w-4/5 md:w-2/5 h-auto bg-white bg-opacity-90 p-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg">
                        <div className="flex flex-col items-center justify-center text-center text-[#235d62]">
                            <div className='h-full flex justify-center items-center'><img className='w-1/2' src={success} alt="Success" /></div>
                            <h3 className="font-bold text-lg">Success!</h3>
                            <p className="py-4">Message Sent. You will be replied soon.</p>
                            <div className="">
                                <button className="px-3 py-2 font-bold rounded-lg bg-[#235d62] text-white border border-[#235d62] hover:text-[#235d62] hover:bg-transparent transition duration-500" onClick={closeModal}>Okay</button>
                            </div>
                        </div>
                    </dialog>
                )
            }
        </div>
    );
};

export default Contact;