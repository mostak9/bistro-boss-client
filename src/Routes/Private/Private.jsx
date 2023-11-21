import PropTypes from "prop-types";
import { useContext } from "react";
import {AuthContext} from "../../providers/Auth/AuthProvider";
import { FadeLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FadeLoader color="#070707" cssOverride={{}} height={13} width={2} />
      </div>
    );

    if(!user) return <Navigate to={'/login'} state={location.pathname}></Navigate>

  return children;
};

Private.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Private;
