import PropTypes from 'prop-types';
import Category from '../Category/Category';

const Categories = ({ categories }) => {
    return (
        <section className='space-y-6 my-8 md:my-16'>
            <div className='my-8 md:my-16 flex flex-col gap-3 md:gap-6 justify-center items-center pr-4 text-center mx-auto'>
                <h3 className='text-xl md:text-5xl font-bold md:leading-snug'>Art & Craft Categories</h3>
                <p className='w-[88%] md:w-4/5 text-[#898585] text-base md:text-xl'>From the timeless elegance of Stone Sculpture to the vibrant intricacies of Beaded Sculpture, each subcategory offers a unique artistic journey. Explore and let these diverse subcategories spark your creativity and elevate your artistic endeavors to new heights.</p>
            </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {
                        categories.map(category => <Category
                            key={category._id}
                            category={category}
                        ></Category>)
                    }
                </div>
        </section>
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
}

export default Categories;