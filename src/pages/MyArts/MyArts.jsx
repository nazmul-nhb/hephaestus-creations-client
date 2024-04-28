import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import loader from '../../assets/loader.svg';
import Art from "../../components/Art/Art";
import Swal from "sweetalert2";

const MyArts = () => {
    const { user } = useContext(AuthContext);
    const [myArts, setMyArts] = useState([]);
    const [artsLoading, setArtsLoading] = useState(true);

    useEffect(() => {
        setArtsLoading(true);
        fetch(`http://localhost:5000/arts/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyArts(data);
                setArtsLoading(false);
            })
    }, [user])

    // Delete from My Art & Crafts
    const handleDelete = (id) => {
        const deletableArt = myArts?.find(art => art._id === id);
        Swal.fire({
            title: 'Are You Sure?',
            text: `Delete ${deletableArt.item_name}?
            You won't be able to revert the process!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete It!'
        }).then((result) => {
            if (result.isConfirmed) {

                setArtsLoading(true);
                fetch(`http://localhost:5000/arts/id/${id}`, { method: "DELETE" })
                    .then(res => res.json()).then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Art has been deleted.',
                                'success'
                            )
                        const remainingArts = myArts?.filter(art => art._id !== id);
                        setMyArts(remainingArts);
                        setArtsLoading(false);
                        }
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
        <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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