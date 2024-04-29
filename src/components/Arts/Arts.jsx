import { useState } from "react";
import Button from "../Button/Button";
import Art from "../Art/Art";
import PropTypes from 'prop-types';

const Arts = ({ arts }) => {
    const [artsLength, setArtsLength] = useState(6);
    const [showMore, setShowMore] = useState(false);


    return (
        <section className="space-y-6">
            <h3 className="">Our Arts & Crafts</h3>
            <p className=""><span className="">Hephaestus Creations</span> offers a diverse selection of meticulously crafted sculptures and artworks, each imbued with intricate details and artistic flair. From captivating clay sculptures to elegant stone carvings, our collection showcases the talent and creativity of skilled artisans, making it easy for enthusiasts and collectors alike to find unique pieces that inspire and delight.</p>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    arts?.slice(0, artsLength).map(art => <Art
                        key={art._id}
                        art={art}
                    ></Art>)
                }
            </div>
            <div className="flex items-center justify-center">
                <Button onClick={() => { setShowMore(!showMore), showMore ? setArtsLength(6) : setArtsLength(arts.length) }} color={'#272c50'} buttonText={!showMore ? 'Show More' : 'Show Less'} hoverBgColor={'transparent'} hoverColor={'white'} className={'border !rounded-3xl font-bold text-xl !px-4'}></Button>
            </div>
        </section>
    );
};

Arts.propTypes = {
    arts: PropTypes.array,
}

export default Arts;