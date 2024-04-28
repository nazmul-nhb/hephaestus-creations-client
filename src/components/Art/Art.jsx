import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { TbEdit, TbEditOff } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { RiDeleteBin6Line, RiFileEditFill } from 'react-icons/ri';
import { useState } from 'react';
import UpdateArt from '../UpdateArt/UpdateArt';
import { IoIosCloseCircle } from 'react-icons/io';

const Art = ({ art, modifiable, handleDelete, handleUpdate }) => {
    const { _id, image, item_name, price, rating, customization, stock_status } = art;
    
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='flex gap-5 border shadow-md p-2 rounded-lg bg-gradient-to-r from-[#cf86ba57] to-[#aad96da3]'>
            <div className="flex-1">
                <div className="relative h-full">
                    <img className="rounded-lg w-full h-full" src={image} alt={item_name} />
                    <h5 title={`${customization ? 'Customizable' : 'Not Customizable'}`} className={`bg-opacity-85 cursor-pointer absolute top-1 right-1 p-1 text-lg font-black rounded-full text-white border ${customization ? 'border-green-600 bg-green-600' : 'border-red-600 bg-red-600'}`}>{customization ? <TbEdit /> : <TbEditOff />}</h5>
                    <h3 className={`w-full flex items-center justify-center gap-1 bg-opacity-80 absolute bottom-0 px-1 rounded-b-lg text-sm text-center font-semibold text-white border ${customization ? 'border-[#16a34a] bg-[#16a34a]' : 'border-[#ea580c] bg-[#ea580c]'}`}><span>Ratings: </span>{rating} <FaStar /></h3>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-between gap-2">
                <h3 className="text-lg font-semibold">{item_name}</h3>
                <h3 className="text-lg font-bold"><span>Price: </span>${price}</h3>
                <h4 className="flex-grow"><span>Stock Status: </span>{stock_status}</h4>
                {
                    !modifiable ? <Link to={`/details/${_id}`}><Button buttonText={'View Details'} color={'red'} hoverBgColor={'transparent'} hoverColor={'white'} className={'border border-red-700 w-full'}></Button></Link>
                        : <div className="flex justify-between gap-2">
                            <button onClick={() => setShowModal(true)} className='flex items-center gap-1'>
                                <RiFileEditFill /> Update
                            </button>
                            <button onClick={() => handleDelete(_id)} className='flex items-center gap-1'>
                                <RiDeleteBin6Line /> Delete
                            </button>
                        </div>
                }
            </div>
            {/* Update Popup */}
            {
                showModal && (
                    <dialog open className="w-full lg:w-4/5 h-3/4 bg-white bg-opacity-95 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg z-20 overflow-y-auto">
                        <UpdateArt
                            art={art}
                            handleUpdate={handleUpdate}
                            closeModal={closeModal}
                        ></UpdateArt>
                        <button onClick={closeModal} className='absolute top-1 right-1 text-5xl text-red-800 hover:text-red-600 hover:opacity-80 transition-all duration-500' title='Close'><IoIosCloseCircle/></button>
                    </dialog>
                )
            }
        </div>
    );
};

Art.propTypes = {
    art: PropTypes.object,
    modifiable: PropTypes.bool,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func,
}

export default Art;