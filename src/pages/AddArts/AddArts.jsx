import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../../components/Button/Button";
import Swal from 'sweetalert2';

const AddArts = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleAddArt = (newItem) => {
        console.log(newItem);
        // send data to the server
        fetch('http://localhost:5000/arts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Art Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
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
            <form onSubmit={handleSubmit(handleAddArt)} className="flex flex-col gap-6 mx-auto px-4 lg:px-20 py-6 lg:py-10 bg-gradient-to-r from-[#86cfa157] to-[#8d6dd9a3] shadow-lg shadow-[#3c3939] rounded-lg">
                <h2 className="text-lg md:text-2xl font-semibold text-center">Add an Item</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Photo URL */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="image">Image Link for Art/Craft*</label>
                        <input
                            {...register("image", {
                                required:
                                    { value: true, message: "You must provide a valid photo URL." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="image" id="image" placeholder="Your Photo URL for the art" />
                        {
                            errors.image && <p className="text-red-700">{errors.image.message}</p>
                        }
                    </div>
                    {/* Art Name */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="itemName">Art Name*</label>
                        <input
                            {...register("itemName", {
                                required:
                                    { value: true, message: "You must provide a valid Name for the art item." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="itemName" id="itemName" placeholder="Art/Craft Name" />
                        {
                            errors.itemName && <p className="text-red-700">{errors.itemName.message}</p>
                        }
                    </div>
                    {/* Subcategory Name */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="subcategoryName">Subcategory Name*</label>
                        <input
                            {...register("subcategoryName", {
                                required:
                                    { value: true, message: "You must select a valid Subcategory." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" list="subcategoryNames" name="subcategoryName" id="subcategoryName" placeholder="Select A Subcategory"></input>
                        <datalist id="subcategoryNames">
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
                            errors.subcategoryName && <p className="text-red-700">{errors.subcategoryName.message}</p>
                        }
                    </div>
                    {/* Price */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="price">Price*</label>
                        <input
                            {...register("price", {
                                required:
                                    { value: true, message: "You must the price of the item." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="number" name="price" id="price" placeholder="Price" />
                        {
                            errors.price && <p className="text-red-700">{errors.price.message}</p>
                        }
                    </div>
                    {/* Short Description */}
                    <div className="lg:col-span-2 w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="shortDescription">Short Description*</label>
                        <textarea
                            {...register("shortDescription", {
                                required:
                                    { value: true, message: "You must write something." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="shortDescription" id="shortDescription" placeholder="Write a Short Description of the Art/Craft Item" />
                        {
                            errors.shortDescription && <p className="text-red-700">{errors.shortDescription.message}</p>
                        }
                    </div>
                    {/* Rating */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="rating">Rating*</label>
                        <input
                            {...register("rating", {
                                required:
                                    { value: true, message: "You must provide a rating for the item." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="number" name="rating" id="rating" placeholder="Critic Rating" />
                        {
                            errors.rating && <p className="text-red-700">{errors.rating.message}</p>
                        }
                    </div>
                    {/* Customization */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="customization">Customization*</label>
                        <input
                            {...register("customization", {
                                required:
                                    { value: true, message: "You must select a Customization option." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="customization" list="customizations" id="customization" placeholder="Select Customization Option" />
                        <datalist id="customizations">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </datalist>
                        {
                            errors.customization && <p className="text-red-700">{errors.customization.message}</p>
                        }
                    </div>
                    {/* Processing Time */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="processingTime">Processing Time*</label>
                        <input
                            {...register("processingTime", {
                                required:
                                    { value: true, message: "You must provide processing time for the art item." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="processingTime" id="processingTime" placeholder="Processing Time" />
                        {
                            errors.processingTime && <p className="text-red-700">{errors.processingTime.message}</p>
                        }
                    </div>
                    {/* Stock Status */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="stockStatus">Stock Status*</label>
                        <input
                            {...register("stockStatus", {
                                required:
                                    { value: true, message: "You must select stock status for the art item." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="stockStatus" list="stocks" id="stockStatus" placeholder="Stock Status" />
                        <datalist id="stocks">
                            <option value="In Stock">In Stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </datalist>
                        {
                            errors.stockStatus && <p className="text-red-700">{errors.stockStatus.message}</p>
                        }
                    </div>
                    {/* User Email */}
                    <div className="flex flex-col gap-3">
                        <label className="font-medium" htmlFor="userEmail">Your Email</label>
                        <input
                            {...register("userEmail", {
                                value: `${user?.email || ''}`,
                                required:
                                    { value: true, message: "You must provide your email address." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="email" name="userEmail" id="userEmail" placeholder="Your Email" />
                        {
                            errors.userEmail && <p className="text-red-700">{errors.userEmail.message}</p>
                        }
                    </div>
                    {/* User Name */}
                    <div className="flex flex-col gap-3">
                        <label className="font-medium" htmlFor="userName">Your Name</label>
                        <input
                            {...register("userName", {
                                value: `${user?.displayName || ''}`,
                                required:
                                    { value: true, message: "You must provide your name." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="userName" id="userName" placeholder="Your Name" />
                        {
                            errors.userName && <p className="text-red-700">{errors.userName.message}</p>
                        }
                    </div>
                </div>

                <Button buttonType={'submit'} className={'border w-full text-xl font-semibold'} buttonText={'Add Item'} color={'teal'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
            </form>
        </section>
    );
};

export default AddArts;