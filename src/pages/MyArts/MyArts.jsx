import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import loader from '../../assets/loader.svg';
import Art from "../../components/Art/Art";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyArts = () => {
    const { user } = useContext(AuthContext);
    const [myArts, setMyArts] = useState([]);
    const [artsLoading, setArtsLoading] = useState(false);
    const [customizationFilter, setCustomizationFilter] = useState('');

    const loadMyArts = () => {
        setArtsLoading(true);
        fetch(`https://hephaestus-creations-server.vercel.app/arts/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyArts(data);
                setArtsLoading(false);
            })
    }

    useEffect(() => {
        if (user) {
            loadMyArts();
        }
    }, [user])

    const handleFilter = (e) => {
        e.preventDefault();
        const customization = e.target.value;
        setCustomizationFilter(customization);
        if (customization === 'true' || customization === 'false') {
            setArtsLoading(true);
            fetch(`https://hephaestus-creations-server.vercel.app/arts/filter/${user.email}/${customization}`)
                .then(res => res.json())
                .then(data => {
                    setMyArts(data);
                    setArtsLoading(false);
                })
        } else if (customization === 'all') {
            loadMyArts();
        }
    }

    // Delete from My Art & Crafts
    const handleDelete = (id) => {
        const deletableArt = myArts?.find(art => art._id === id);
        Swal.fire({
            title: 'Are You Sure?',
            text: `Do you want to delete "${deletableArt?.item_name}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff0000',
            cancelButtonColor: '#2a7947',
            confirmButtonText: 'Yes, Delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hephaestus-creations-server.vercel.app/arts/id/${id}`, { method: "DELETE" })
                    .then(res => res.json()).then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted!',
                                'success'
                            )
                            const remainingArts = myArts?.filter(art => art._id !== id);
                            setMyArts(remainingArts);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error)
                    })
            }
        })
    }

    if (artsLoading) {
        return (
            <div className="flex items-center justify-center">
                <img src={loader} alt="loader" />
            </div>
        )
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            <Helmet>
                <title>My Arts & Crafts - Hephaestus Creations</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center">
                <h3 className="">My Arts & Crafts ({myArts.length})</h3>
                <form className="my-8">
                    <select
                        onChange={handleFilter}
                        value={customizationFilter}
                        className="p-2 rounded-lg text-center outline outline-gray-700"
                        name="customization" id="customization">
                        <option value="">Filter by Customization</option>
                        <option value="true">Customization: Yes</option>
                        <option value="false">Customization: No</option>
                        <option value="all">Show All</option>
                    </select>
                </form>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    myArts?.map(art => <Art
                        key={art._id}
                        art={art}
                        modifiable={true}
                        handleDelete={handleDelete}
                    ></Art>)
                }
            </div>
        </section>
    );
};

export default MyArts;