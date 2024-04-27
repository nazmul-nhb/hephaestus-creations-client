import PropTypes from 'prop-types';

const Art = ({ art }) => {
    const { _id, image, item_name, subcategory_name, price, short_description, rating, customization, processing_time, stock_status, user_email, user_name } = art;

    console.log(_id);

    return (
        <div className=''>
            <img src={image} alt={item_name} className='' />
        </div>
    );
};

Art.propTypes={
    art: PropTypes.object,
}

export default Art;