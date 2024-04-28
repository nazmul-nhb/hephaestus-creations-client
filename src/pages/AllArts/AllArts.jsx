import { Link, useLoaderData } from "react-router-dom";
import Button from "../../components/Button/Button";

const AllArts = () => {
    const arts = useLoaderData();

    return (
        <section>
            <h2 className="mb-4 text-2xl font-semibold leading-tight">All Art & Craft Items</h2>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            {/* <col /> */}
                            <col />
                        </colgroup>
                        <thead className="bg-gray-700 dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3"></th>
                                <th className="p-3">Thumbnail</th>
                                <th className="p-3">Item Name</th>
                                <th className="p-3">Subcategory</th>
                                <th className="p-3">Price</th>
                                {/* <th className="p-3">Processing Time</th> */}
                                <th className="p-3 text-right">View Details</th>
                            </tr>
                        </thead>
                        {
                            arts?.map((art, index) =>
                                <tbody key={art._id}>
                                    <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                                        <td className="p-3">
                                            <p className="flex gap-2 items-center">{index + 1}.</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="flex gap-2 items-center">
                                                <img className="w-14" src={art.image} alt={art.item_name} />
                                            </p>
                                        </td>
                                        <td className="p-3">
                                            <p className="flex gap-2 items-center">
                                                {art.item_name}
                                            </p>
                                        </td>
                                        <td className="p-3">
                                            <p>{art.subcategory_name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>${art.price}</p>
                                        </td>
                                        {/* <td className="p-3">
                                            <p>{art.processing_time}</p>
                                        </td> */}
                                        <td className="p-3 text-right">
                                            <p><Link to={`/details/${art._id}`}><Button buttonText={'View Details'}></Button></Link></p>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllArts;