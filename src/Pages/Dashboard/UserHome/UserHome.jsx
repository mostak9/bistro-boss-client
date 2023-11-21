import { useContext } from "react";
import { AuthContext } from "../../../providers/Auth/AuthProvider";


const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
           <h1 className="text-3xl font-cinzel font-medium">
                Hi, Welcome <span>{user?.displayName || 'back'}!</span>
            </h1>
        </div>
    );
};

export default UserHome;