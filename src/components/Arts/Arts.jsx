import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Art from "../Art/Art";
import loader from '../../assets/loader.svg';

const Arts = () => {
    const [arts, setArts] = useState([]);
    const [artsLength, setArtsLength] = useState(6);
    const [artsLoading, setArtsLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);


    useEffect(() => {
        setArtsLoading(true);
        fetch('http://localhost:5000/arts')
            .then(res => res.json())
            .then(data => {
                setArts(data);
                setArtsLoading(false)
            })
    }, [])

if(artsLoading){
    return(
        <div className="flex items-center justify-center space-x-2">
            <img src={loader} alt="loader" />
        </div>
    )
}

    return (
        <section className="">
            <h3 className="">Our Arts & Crafts</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ducimus culpa consequuntur laboriosam ipsam officia reprehenderit quaerat ipsum voluptatem. Odit distinctio non officiis amet reprehenderit dolore, nulla veritatis eligendi quo?</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    arts?.slice(0, artsLength).map(art => <Art
                        key={art._id}
                        art={art}
                    ></Art>)
                }
            </div>
            <div className="flex items-center justify-center">
            <Button onClick={() => { setShowMore(!showMore), showMore ? setArtsLength(6) : setArtsLength(arts.length) }} color={'red'} buttonText={!showMore ? 'Show More' : 'Show Less'} hoverBgColor={'transparent'} hoverColor={'white'} className={'border border-red-700'}></Button>
            </div>
        </section>
    );
};

export default Arts;