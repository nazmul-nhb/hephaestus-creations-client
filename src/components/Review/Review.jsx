import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';

const Review = ({ review }) => {
    const [star, setStar] = useState(0);
    const [arrayStar, setArrayStar] = useState([]);

    const { client_name, client_image, review_text, review_stars, review_date } = review;

    useEffect(() => {
        setStar(review_stars);
        const starArray = Array.from({ length: Math.round(star) }, (_, index) => index + 1);
        setArrayStar(starArray);
    }, [review_stars, star]);

    return (
        <div className='w-[320px] flex flex-col gap-3 border border-gray-500 rounded-lg px-4 py-3 bg-gray-100 shadow-md shadow-gray-800 mx-4 my-6'>
            <div className="flex gap-6 items-center">
                <img src={client_image} alt={client_name} title={client_name} className="w-12 rounded-full border border-gray-900 p-[2px]" />
                <div className="text-[steelblue]">
                    <h3 className="text-lg font-medium">{client_name}</h3>
                    <h5 className="text-gray-500">{review_date}</h5>
                </div>
            </div>
            <div className='flex gap-2 items-center' title={`${review_stars} Stars`}>
                {
                    star && arrayStar.map((star, idx) => <FaStar key={idx} className='text-[#fe7827] text-2xl'></FaStar>)
                }
            </div>
            <p className="text-gray-600">
                {review_text}
            </p>
        </div>
    );
};

Review.propTypes = {
    review: PropTypes.object.isRequired,
}

export default Review;