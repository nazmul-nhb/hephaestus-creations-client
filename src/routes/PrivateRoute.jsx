import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, userLoading } = useContext(AuthContext);
    if (userLoading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-teal-600"></div>
                <div className="w-5 h-5 rounded-full animate-pulse dark:bg-teal-600"></div>
                <div className="w-6 h-6 rounded-full animate-pulse dark:bg-teal-600"></div>
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}