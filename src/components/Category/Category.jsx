import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { _id, category_name, category_image } = category;

    return (
        <Link to={`/category-details/${_id}`}>
            <div className='flex flex-col w-[300px] gap-3 border border-gray-500 rounded-lg px-4 py-3 bg-[#beafaf51] shadow-md shadow-gray-800 mx-4 my-6'>
                <img className='rounded-lg' src={category_image} alt={category_name} />
                <h4 className="font-medium">{category_name}</h4>
            </div>
        </Link>
    );
};

Category.propTypes = {
    category: PropTypes.object,
}

export default Category;