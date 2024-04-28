import { Link, useLoaderData } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Helmet } from "react-helmet-async";

const AllArts = () => {
    const arts = useLoaderData();

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            <Helmet>
                <title>All Arts & Crafts List - Hephaestus Creations</title>
            </Helmet>
            <h2 className="mb-4 text-2xl font-semibold leading-tight">All Art & Craft Items</h2>
            <div className="container overflow-x-auto">
                <table className="table text-xs md:text-sm">
                    <thead className=" text-sm md:text-base">
                        <tr>
                            <th>#</th>
                            <th>Image, Name & Category</th>
                            <th>Price</th>
                            <th className="pl-4">View Details</th>
                        </tr>
                    </thead>
                    {
                        arts?.map((art, index) =>
                            <tbody key={art._id}>
                                <tr>
                                    <th>{index + 1}.</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar hidden md:inline">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={art.image} alt={art.item_name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold"> {art.item_name}</div>
                                                <div className="opacity-50">{art.subcategory_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${art.price}</td>
                                    <th>
                                        <Link to={`/details/${art._id}`}>
                                            <Button buttonText={'View Details'}></Button>
                                        </Link>
                                    </th>
                                </tr>
                            </tbody>
                        )
                    }


                </table>
            </div>
        </section>
    );
};

export default AllArts;