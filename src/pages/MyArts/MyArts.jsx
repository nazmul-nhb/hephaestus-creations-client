import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import loader from '../../assets/loader.svg';
import Art from "../../components/Art/Art";

const MyArts = () => {
    const { user } = useContext(AuthContext);
    const [myArts, setMyArts] = useState([]);
    const [artsLoading, setArtsLoading] = useState(true);
    console.log(user?.email);
    useEffect(() => {
        setArtsLoading(true);
        fetch(`http://localhost:5000/arts/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyArts(data);
                setArtsLoading(false);
            })
    }, [user])

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
                    ></Art>)
                }
            </div>
        </section>
    );
};

export default MyArts;