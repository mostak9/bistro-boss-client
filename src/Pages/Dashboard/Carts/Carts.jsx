import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import useCarts from "../../../hooks/useCarts/useCarts";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Carts = () => {
  const [carts, , refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const price = carts?.reduce((sum, item) => sum+item.price, 0);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "The item will delete form the cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/v1/allCarts/${_id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Item deleted successfully!",
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle heading="WANNA ADD MORE?" subHeading="My Cart" />
      <div>
      <div className="p-6 bg-white">
        <div className="flex items-center justify-between my-5">
          <p className="font-cinzel text-xl font-bold">Total Orders: {carts?.length} </p>
          <p className="font-cinzel text-xl font-bold">Total Price: ${price} </p>
         
          <Link  to={'/dashboard/payment'} className={`btn bg-[#D1A054] hover:text-[#D1A054] font-cinzel text-whit ${!carts?.length && 'btn-disabled'}`}>Pay</Link>

        </div>
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th>Item image</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {carts?.map((cart) => (
                <tr key={cart._id}>
                  <td>
                    <div>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={cart.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text">{cart.name}</td>
                  <td>${cart.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(cart._id)}
                      className="btn btn-ghost text-2xl text-red-600 hover:bg-red-600/30"
                    >
                      <MdDelete />
                    </button>
                  </th>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Carts;
