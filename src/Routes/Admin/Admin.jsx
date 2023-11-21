import { useContext } from "react";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import { AuthContext } from "../../providers/Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import PropTypes from 'prop-types';

const Admin = ({ children }) => {
  const [isAdmin, isPending] = useAdmin();
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isPending || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FadeLoader color="#070707" cssOverride={{}} height={13} width={2} />
      </div>
    );
  }
  if(user && isAdmin){
    return children;
  }
  return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

Admin.propTypes = {
    children: PropTypes.node.isRequired
}

export default Admin;
