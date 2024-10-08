import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../../components/Button/Button";
import Swal from 'sweetalert2';
import { IoIosCloseCircle } from "react-icons/io";
import Preview from "../../components/Preview/Preview";

const AddArts = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showModal, setShowModal] = useState(false);
    const [previewItem, setPreviewItem] = useState("");

    const closeModal = () => {
        setShowModal(false);
    };

    const handlePreviewImage = (item) => {
        setPreviewItem(item);
        setShowModal(true);
    }

    const handleAddArt = (newItem) => {
        newItem.customization = newItem.customization === "true";
        newItem.price = parseFloat(newItem.price);
        newItem.rating = parseFloat(newItem.rating);

        // send data to the server
        fetch('https://hephaestus-creations-server.vercel.app/arts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulations!!',
                        text: `"${newItem.item_name}" Added Successfully!`,
                        icon: 'success',
                        confirmButtonText: 'Close'
                    });
                    reset();
                }
            })
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            <Helmet>
                <title>Add Arts & Crafts - Hephaestus Creations</title>
            </Helmet>
                <h2 className="text-lg md:text-2xl font-semibold text-center mb-8 md:mb-12">Add an Art or Craft Item</h2>

            <form onSubmit={handleSubmit(handleAddArt)} className="flex flex-col gap-6 mx-auto px-4 lg:px-20 py-6 lg:py-10 bg-gradient-to-r from-[#9da4dded] to-[#8774dacc] shadow-lg shadow-[#6b5caf] rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Photo URL */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="image">Image Link for Art/Craft*</label>
                        <input
                            {...register("image", {
                                required:
                                    { value: true, message: "You must provide a valid photo URL." }
                            })}
                            className="p-2 rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" type="text" name="image" id="image" placeholder="Your Photo URL for the art" />
                        {
                            errors.image && <p className="text-red-700">{errors.image.message}</p>
                        }
                    </div>
                    {/* Art Name */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="item_name">Art Name*</label>
                        <input
                            {...register("item_name", {
                                required:
                                    { value: true, message: "You must provide a valid Name for the art item." }
                            })}
                            className="p-2 rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" type="text" name="item_name" id="item_name" placeholder="Art/Craft Name" />
                        {
                            errors.item_name && <p className="text-red-700">{errors.item_name.message}</p>
                        }
                    </div>
                    {/* Subcategory Name */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="subcategory_name">Subcategory Name*</label>
                        <input
                            {...register("subcategory_name", {
                                required:
                                    { value: true, message: "You must select a valid Subcategory." }
                            })}
                            className="p-2 rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" type="text" list="subcategory_names" name="subcategory_name" id="subcategory_name" placeholder="Select or Add A Subcategory"></input>
                        <datalist id="subcategory_names">
                            {/* <option value={""}>Select A Subcategory</option> */}
                            <option value="Clay Sculpture">Clay Sculpture</option>
                            <option value="Stone Sculpture">Stone Sculpture</option>
                            <option value="Metal Sculpture">Metal Sculpture</option>
                            <option value="Food Carving">Food Carving</option>
                            <option value="Natural Material Sculpture">Natural Material Sculpture</option>
                            <option value="Beaded Sculpture">Beaded Sculpture</option>
                            <option value="Wood Engraving">Wood Engraving</option>
                        </datalist>
                        {
                            errors.subcategory_name && <p className="text-red-700">{errors.subcategory_name.message}</p>
                        }
                    </div>
                    {/* Price */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="price">Price*</label>
                        <input
                            {...register("price", {
                                required:
                                    { value: true, message: "You must provide the price for the item." },
                                min: {
                                    value: 0.1, message: "Price should not be less than 0.1"
                                },
                            })}
                            className="p-2 rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" type="number" step="0.01" name="price" id="price" placeholder="Price" />
                        {
                            errors.price && <p className="text-red-700">{errors.price.message}</p>
                        }
                    </div>
                    {/* Short Description */}
                    <div className="lg:col-span-2 w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="short_description">Short Description*</label>
                        <textarea
                            {...register("short_description", {
                                required:
                                    { value: true, message: "You must write something." }
                            })}
                            className="p-2 rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" type="text" name="short_description" id="short_description" placeholder="Write a Short Description of the Art/Craft Item" />
                        {
                            errors.short_description && <p className="text-red-700">{errors.short_description.message}</p>
                        }
                    </div>
                    {/* Rating */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="rating">Rating*</label>
                        <input
                            {...register("rating", {
                                required:
                                    { value: true, message: "You must provide a rating for the item." },
                                min: {
                                    value: 0.0, message: "Rating cannot be a negative value!"
                                },
                                max: {
                                    value: 5.0, message: "Rating cannot exceed 5.0!"
                                },
                            })}
                            className="p-2 rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" type="number" step="0.01" name="rating" id="rating" placeholder="Critic Rating" />
                        {
                            errors.rating && <p className="text-red-700">{errors.rating.message}</p>
                        }
                    </div>
                    {/* Customization */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="customization">Customization*</label>
                        <select
                            {...register("customization", {
                                required: { value: true, message: "You must select a Customization option." }
                            })}
                            className="p-[9.75px] rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" name="customization" id="customization">
                            <option value="">Select Customization Option</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        {
                            errors.customization && <p className="text-red-700">{errors.customization.message}</p>
                        }
                    </div>
                    {/* Processing Time */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="processing_time">Processing Time*</label>
                        <input
                            {...register("processing_time", {
                                required:
                                    { value: true, message: "You must provide processing time for the art item." }
                            })}
                            className="p-2 rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" type="text" name="processing_time" id="processing_time" placeholder="Processing Time" />
                        {
                            errors.processing_time && <p className="text-red-700">{errors.processing_time.message}</p>
                        }
                    </div>
                    {/* Stock Status */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="stock_status">Stock Status*</label>
                        <input
                            {...register("stock_status", {
                                required:
                                    { value: true, message: "You must select stock status for the art item." }
                            })}
                            className="p-2 rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" type="text" name="stock_status" list="stocks" id="stock_status" placeholder="Select or Add Stock Status" />
                        <datalist id="stocks">
                            <option value="In Stock">In Stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </datalist>
                        {
                            errors.stock_status && <p className="text-red-700">{errors.stock_status.message}</p>
                        }
                    </div>
                    {/* User Email */}
                    <div className="flex flex-col gap-3">
                        <label className="font-medium" htmlFor="user_email">Your Email*</label>
                        <input readOnly
                            value={user?.email}
                            {...register("user_email", {
                                required:
                                    { value: true, message: "You must provide your email address." }
                            })}
                            className="p-2 rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" type="email" name="user_email" id="user_email" placeholder="Your Email" />
                        {
                            errors.user_email && <p className="text-red-700">{errors.user_email.message}</p>
                        }
                    </div>
                    {/* User Name */}
                    <div className="flex flex-col gap-3">
                        <label className="font-medium" htmlFor="user_name">Your Name*</label>
                        <input readOnly
                            value={user?.displayName}
                            {...register("user_name", {
                                required:
                                    { value: true, message: "You must provide your name." }
                            })}
                            className="p-2 rounded-lg border border-[midnightblue] focus:bg-[#6262b69b] transition duration-500 focus:outline-0" type="text" name="user_name" id="user_name" placeholder="Your Name" />
                        {
                            errors.user_name && <p className="text-red-700">{errors.user_name.message}</p>
                        }
                    </div>
                </div>
                <Button onClick={handleSubmit(handlePreviewImage)} buttonType={'button'} className={'border w-full text-xl font-semibold'} color={'red'} hoverColor={'white'} hoverBgColor={'transparent'} buttonText={'Preview Item'}></Button>
                <Button buttonType={'submit'} className={'border w-full text-xl font-semibold'} buttonText={'Add Item'} color={'midnightblue'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
            </form>
            {
                showModal && (
                    <dialog open className="w-full xl:w-auto h-full bg-gradient-to-b from-[#7076a0ed] to-[#8078a4fb] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-20 overflow-y-auto">
                        <Preview previewItem={previewItem}></Preview>
                        <button onClick={closeModal} className='absolute top-1 right-1 text-5xl text-red-900 hover:text-red-700 hover:opacity-80 transition-all duration-500' title='Close'><IoIosCloseCircle /></button>
                    </dialog>
                )
            }
        </section>
    );
};

export default AddArts;