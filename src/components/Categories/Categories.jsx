import PropTypes from 'prop-types';
import Category from '../Category/Category';
import Marquee from 'react-fast-marquee';

const Categories = ({ categories }) => {
    return (
        <section className=''>
            <div>
                <h3>Art & Craft Categories</h3>
                <p>From the timeless elegance of Stone Sculpture to the vibrant intricacies of Beaded Sculpture, each subcategory offers a unique artistic journey. Discover the beauty of Clay Sculpture, the versatility of Metal Sculpture, and the whimsy of Food Carving, alongside the organic charm of Natural Material Sculpture and the intricate craftsmanship of Wood Engraving. Let these diverse subcategories spark your creativity and elevate your artistic endeavors to new heights.</p>
            </div>
            <Marquee pauseOnHover={true}>
                <div className="flex">
                    {
                        categories.map(category => <Category
                            key={category._id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </Marquee>
        </section>
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
}

export default Categories;