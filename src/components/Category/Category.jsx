import PropTypes from 'prop-types';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { _id, category_name, category_image } = category;

    return (
        <Slide>
            <Link className='hover:scale-105 hover:opacity-90 transition-all duration-500' to={`/category-details/${_id}`}>
                <div className='flex flex-col gap-3 border border-gray-500 rounded-lg px-4 py-3 bg-[#beafaf51] shadow-md shadow-gray-800 mx-4 my-6 text-center'>
                    <img className='rounded-lg' src={category_image} alt={category_name} />
                    <h4 className="font-bold">{category_name}</h4>
                </div>
            </Link>
        </Slide>
    );
};

Category.propTypes = {
    category: PropTypes.object,
}

export default Category;