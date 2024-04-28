import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 space-y-6 flex flex-col justify-center items-center">
            <Helmet>
                <title>Profile: {user.displayName} - Hephaestus Creations</title>
            </Helmet>
            <div
                data-aos="zoom-in-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                className="bg-gradient-to-r from-[#86cfa157] to-[#8d6dd9a3] rounded-lg flex flex-col items-center gap-6 w-[96%] md:w-4/5 lg:w-3/4 mx-auto px-4 lg:px-20 py-6 lg:py-10 shadow-lg shadow-[#3c3939]">
                <div className="flex flex-col gap-3 items-center my-4">
                    <img className="rounded-full border-2 p-1 border-green-900 w-24 md:w-32 h-24 md:h-32" src={user.photoURL} alt={user.displayName} title={user.displayName} />
                    <h4 className="text-lg md:text-3xl font-bold">{user.displayName}</h4>
                </div>
                <div className="flex flex-col items-center md:flex-row gap-2 md:text-xl">
                    <h4 className="font-semibold">Registered Email:</h4>
                    {user.email}
                </div>
                {
                    user.emailVerified
                        ? <p className="text-green-900">Your Email is Verified!</p>
                        : <p className="text-red-700">Your Email is Not Verified!</p>
                }
                <div className="flex flex-col items-center md:flex-row gap-2 md:text-xl">
                    <h4 className="font-semibold">Account Created on:</h4>
                    {user.metadata.creationTime}
                </div>
                <div className="flex flex-col items-center md:flex-row gap-2 md:text-xl">
                    <h4 className="font-semibold">Last Login Time:</h4>
                    {user.metadata.lastSignInTime}
                </div>
            </div>
        </section>
    );
};

export default Profile;