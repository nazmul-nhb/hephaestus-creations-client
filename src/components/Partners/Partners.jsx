import { useEffect, useState } from 'react';
import loader from '../../assets/loader.svg';


const Partners = () => {
    const [partners, setPartners] = useState([]);
    const [partnersLoading, setPartnersLoading] = useState(false);
    // get review data
    useEffect(() => {
        setPartnersLoading(true);
        fetch('https://hephaestus-creations-server.vercel.app/partners')
            .then(res => res.json())
            .then(data => {
                setPartners(data);
                setPartnersLoading(false);
            })
    }, [])

    if (partnersLoading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <img src={loader} alt="loader" />
            </div>
        )
    }
    return (
        <section className="space-y-4 my-8 md:my-16">
            <div className='my-8 md:my-16 flex flex-col gap-3 md:gap-6 justify-center items-center pr-4 text-center mx-auto'>
                <h3 className='text-xl md:text-5xl font-bold md:leading-snug'>Our Partners Around the Globe</h3>
                <p className='w-[88%] md:w-4/5 text-[#898585] text-base md:text-xl'>Explore the network of esteemed partners who collaborate with Hephaestus Creations to bring our artisanal masterpieces to discerning customers worldwide.</p>
                <div className='mx-auto'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-8 md:my-16">
                        {
                            partners?.map(partner => <div key={partner._id}
                                className="bg-[#cfc6c634] flex md:flex-row flex-col gap-5 p-4 border border-slate-800 shadow-lg shadow-slate-800 rounded-lg">
                                <div className="text-left flex-1 flex flex-col">
                                    <h3 className="text-lg font-semibold">{partner.partner_name}</h3>
                                    <p className="text-slate-500">{partner.partner_description}</p>
                                </div>
                                <figure className='flex-1 border border-slate-300 rounded-lg p-2'><img className='opacity-80 hover:opacity-100 transition-all duration-500 h-full rounded-lg' src={partner.partner_image} alt={partner.partner_name} /></figure>
                            </div>)
                        }
                    </div>
                </div>
                <h3 className='text-[slateblue]text-lg md:text-2xl font-bold'>Together, we strive to enrich lives through the beauty of artistry and creativity.</h3>
            </div>

        </section>
    );
};

export default Partners;