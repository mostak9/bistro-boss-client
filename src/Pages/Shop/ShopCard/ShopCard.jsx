import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../../providers/Auth/AuthProvider";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import useCarts from "../../../hooks/useCarts/useCarts";

const ShopCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [,,refetch] = useCarts();

  const handleCart = () => {
    const cartInfo = { itemId: item?._id, email: user?.email, name: item?.name, image: item?.image, price: item.price };
    
    if (user && user.email) {
      // something todo will happen
      axiosSecure
        .post("/api/v1/allCarts", cartInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.name} added to the cart`,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        })
        .catch((err) => console.log(err.message));
    } else {
      Swal.fire({
        title: "You are not signed in",
        text: "Please sign in to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: `/shop/${item.category}` });
        }
      });
    }
  };
  return (
    <div>
      <div className="card  bg-[#F3F3F3] shadow-xl">
        <figure>
          <img src={item.image} className="w-full" alt="Shoes" />
          <p className="bg-[#111827] text-white px-4 py-1 absolute top-4 right-4">
            $ {item.price}
          </p>
        </figure>
        <div className="card-body text-center flex flex-col items-center justify-center gap-3">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleCart}
              className="btn btn-outline border-b-4 border-b-[#BB8506] text-[#BB8506]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShopCard;
