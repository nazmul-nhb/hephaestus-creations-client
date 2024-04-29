import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

const UpdateArt = ({ polishedArt, closeModal, handleUpdate }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const updateArt = (updatedArt) => {
        updatedArt.customization = updatedArt.customization === "true";
        updatedArt.price = parseFloat(updatedArt.price);
        updatedArt.rating = parseFloat(updatedArt.rating);

        handleUpdate(polishedArt._id, updatedArt)
        closeModal();
    }

    return (
        <section className="m-2 p-2">
            <form onSubmit={handleSubmit(updateArt)} className="flex flex-col gap-6 mx-auto px-4 lg:px-20 py-6 lg:py-10 bg-gradient-to-r from-[#86cfa157] to-[#8d6dd9a3] shadow-lg shadow-[#3c3939] rounded-lg">
                <h2 className="text-lg md:text-2xl font-semibold text-center">Update {polishedArt.item_name}</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Photo URL */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="image">Image Link for Art/Craft*</label>
                        <input
                        defaultValue={polishedArt.image}
                            {...register("image", {
                                required:
                                    { value: true, message: "You must provide a valid photo URL." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="image" id="image" placeholder="Your Photo URL for the polishedArt" />
                        {
                            errors.image && <p className="text-red-700">{errors.image.message}</p>
                        }
                    </div>
                    {/* Art Name */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="item_name">Art Name*</label>
                        <input
                        defaultValue={polishedArt.item_name}
                            {...register("item_name", {
                                required:
                                    { value: true, message: "You must provide a valid Name for the polishedArt item." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="item_name" id="item_name" placeholder="Art/Craft Name" />
                        {
                            errors.item_name && <p className="text-red-700">{errors.item_name.message}</p>
                        }
                    </div>
                    {/* Subcategory Name */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="subcategory_name">Subcategory Name*</label>
                        <input
                            defaultValue={polishedArt.subcategory_name}
                            {...register("subcategory_name", {
                                required:
                                    { value: true, message: "You must select a valid Subcategory." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" list="subcategory_names" name="subcategory_name" id="subcategory_name" placeholder="Select or Add A Subcategory"></input>
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
                            defaultValue={polishedArt.price}
                            {...register("price", {
                                required:
                                    { value: true, message: "You must provide the price for the item." },
                                min: {
                                    value: 0.1, message: "Price should not be less than 0.1"
                                },
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="number" step="0.01" name="price" id="price" placeholder="Price" />
                        {
                            errors.price && <p className="text-red-700">{errors.price.message}</p>
                        }
                    </div>
                    {/* Short Description */}
                    <div className="lg:col-span-2 w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="short_description">Short Description*</label>
                        <textarea
                            defaultValue={polishedArt.short_description}
                            {...register("short_description", {
                                required:
                                    { value: true, message: "You must write something." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="short_description" id="short_description" placeholder="Write a Short Description of the Art/Craft Item" />
                        {
                            errors.short_description && <p className="text-red-700">{errors.short_description.message}</p>
                        }
                    </div>
                    {/* Rating */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="rating">Rating*</label>
                        <input
                            defaultValue={polishedArt.rating}
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
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="number" step="0.01" name="rating" id="rating" placeholder="Critic Rating" />
                        {
                            errors.rating && <p className="text-red-700">{errors.rating.message}</p>
                        }
                    </div>
                    {/* Customization */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="customization">Customization*</label>
                        <select
                        defaultValue={polishedArt.customization}
                            {...register("customization", {
                                required: { value: true, message: "You must select a Customization option." }
                            })}
                            className="p-[9.75px] rounded-lg bg-[#F3F3F3]" name="customization" id="customization">
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
                        defaultValue={polishedArt.processing_time}
                            {...register("processing_time", {
                                required:
                                    { value: true, message: "You must provide processing time for the polishedArt item." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="processing_time" id="processing_time" placeholder="Processing Time" />
                        {
                            errors.processing_time && <p className="text-red-700">{errors.processing_time.message}</p>
                        }
                    </div>
                    {/* Stock Status */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="stock_status">Stock Status*</label>
                        <input
                        defaultValue={polishedArt.stock_status}
                            {...register("stock_status", {
                                required:
                                    { value: true, message: "You must select stock status for the polishedArt item." }
                            })}
                            className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="stock_status" list="stocks" id="stock_status" placeholder="Select or Add Stock Status" />
                        <datalist id="stocks">
                            <option value="In Stock">In Stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </datalist>
                        {
                            errors.stock_status && <p className="text-red-700">{errors.stock_status.message}</p>
                        }
                    </div>
                </div>
                <button className="px-3 py-2 font-bold rounded-lg bg-[#235d62] text-white border border-[#235d62] hover:text-[#235d62] hover:bg-transparent transition duration-500">Update</button>
            </form>
        </section>
    );
};
UpdateArt.propTypes = {
    polishedArt: PropTypes.object,
    closeModal: PropTypes.func,
    handleUpdate: PropTypes.func,
}

export default UpdateArt;