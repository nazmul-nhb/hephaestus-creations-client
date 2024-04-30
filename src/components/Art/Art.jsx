import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { TbEdit, TbEditOff } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { RiDeleteBin6Line, RiFileEditFill } from 'react-icons/ri';
import { useState } from 'react';
import UpdateArt from '../UpdateArt/UpdateArt';
import { IoIosCloseCircle, IoMdPricetags } from 'react-icons/io';
import Swal from 'sweetalert2';
import loader from '../../assets/loader.svg';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { GiStockpiles } from 'react-icons/gi';
import { BiSolidCategory } from 'react-icons/bi';
import { PiTimerBold } from 'react-icons/pi';
import { MdDescription } from 'react-icons/md';

const Art = ({ art, modifiable, handleDelete, fromCategory }) => {
    const [polishedArt, setPolishedArt] = useState(art);
    const { _id, subcategory_name, image, item_name, price, rating, customization, stock_status, processing_time, short_description } = polishedArt;
    const [artsLoading, setArtsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    const handleUpdate = (id, updatedArt) => {
        setArtsLoading(true);
        fetch(`https://hephaestus-creations-server.vercel.app/arts/id/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedArt)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setPolishedArt(updatedArt);
                    setArtsLoading(false);
                    Swal.fire({
                        title: 'Success!',
                        text: `"${polishedArt?.item_name}" Updated Successfully!`,
                        icon: 'success',
                        confirmButtonText: 'Okay!'
                    })
                }
            })
    }

    const [text] = useTypewriter({
        words: [`${price}`],
        loop: true,
    })

    if (artsLoading) {
        return (
            <div className="flex items-center justify-center">
                <img src={loader} alt="loader" />
            </div>
        )
    }

    return (
        <div className='flex flex-col md:flex-row gap-5 border border-[#bbbece41] shadow-md shadow-[#272c5041] p-2 rounded-lg bg-[#bbbece41]'>
            <div className="flex-1">
                <div className="relative h-full">
                    <img className={"rounded-lg w-full h-full"} src={image} alt={item_name} />
                    {
                        fromCategory && <h3 className={`w-full flex items-center justify-center gap-1 bg-opacity-80 absolute top-0 px-1 rounded-t-lg text-sm text-center font-medium text-white border ${customization ? 'border-[#16a34a] bg-[#16a34a]' : 'border-[#ea580c] bg-[#ea580c]'}`}><BiSolidCategory />{subcategory_name}</h3>
                    }
                    <h3 className={`w-full flex items-center justify-center gap-1 bg-opacity-80 absolute bottom-0 px-1 rounded-b-lg text-sm text-center font-semibold text-white border ${customization ? 'border-[#16a34a] bg-[#16a34a]' : 'border-[#ea580c] bg-[#ea580c]'}`}><span>Rating: </span>{rating} <FaStar /></h3>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-between gap-2 text-gray-900 !text-[110%] md:!text-[100%]">
                <Link className='hover:opacity-90' to={`/details/${_id}`}>
                    <h3 className={`font-semibold ${customization ? 'text-[slateblue] hover:text-[darkred]' : 'text-[steelblue] hover:text-[darkred]'}`}>{item_name}</h3>
                </Link>
                <h3 className={`flex gap-1 items-center flex-grow font-medium ${customization ? 'text-[midnightblue]' : 'text-[darkred]'}`}><IoMdPricetags /><span className='font-semibold'>Price: </span>${text} <Cursor cursorColor='red' /></h3>
                <h4 className={`flex gap-1 items-center flex-grow text-sm font-medium ${stock_status === 'In Stock' ? 'text-[midnightblue]' : 'text-[darkred]'}`}><GiStockpiles /><span className='font-semibold'>Stock: </span>{stock_status}</h4>
                <h4 className={`flex-grow flex items-center gap-1 text-sm font-medium ${customization ? 'text-[midnightblue]' : 'text-[darkred]'}`}><span className='flex items-center gap-1'>{customization ? <TbEdit /> : <TbEditOff />} <span className="font-semibold">Customization: </span></span>{customization ? "Yes" : "No"}</h4>
                {
                    fromCategory && <div className="flex-1 flex flex-col justify-between gap-2">
                        <h4 className="flex-grow flex-1 flex gap-1 items-center text-[#1d1d49]"><PiTimerBold /><span className='font-semibold'>Processing Time: </span>{processing_time}</h4>
                        <h4 className="flex-grow flex-1 flex flex-col text-[#20204db9]"><span className='flex gap-1 items-center font-semibold'><MdDescription />Short Description: </span>{short_description.slice(0, 64)}...</h4>
                    </div>
                }

                {
                    !modifiable ? <Link to={`/details/${_id}`}><Button buttonText={'View Details'} color={customization ? 'midnightblue' : 'slateblue'} hoverBgColor={'transparent'} hoverColor={'white'} className={'border w-full font-medium tracking-wide'}></Button></Link>
                        : <div className="flex justify-between gap-2 md:text-base">
                            <button onClick={() => setShowModal(true)} className='flex items-center gap-1 border text-white border-green-900 px-2 rounded-3xl bg-green-900'>
                                <RiFileEditFill /> Update
                            </button>
                            <button onClick={() => handleDelete(_id)} className='flex items-center gap-1 border text-white border-red-700 px-2 rounded-3xl bg-red-700'>
                                <RiDeleteBin6Line /> Delete
                            </button>
                        </div>
                }
            </div>
            {/* Update Modal */}
            {
                showModal && (
                    <dialog open className="w-full xl:w-auto h-full bg-opacity-95 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-20 overflow-y-auto">
                        <UpdateArt
                            polishedArt={polishedArt}
                            handleUpdate={handleUpdate}
                            closeModal={closeModal}
                        ></UpdateArt>
                        <button onClick={closeModal} className='absolute top-1 right-1 text-5xl text-red-800 hover:text-red-600 hover:opacity-80 transition-all duration-500' title='Close'><IoIosCloseCircle /></button>
                    </dialog>
                )
            }
        </div>
    );
};

Art.propTypes = {
    art: PropTypes.object,
    modifiable: PropTypes.bool,
    fromCategory: PropTypes.bool,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func,
}

export default Art;