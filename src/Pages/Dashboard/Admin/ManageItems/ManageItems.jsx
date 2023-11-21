import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import useMenu from "../../../../hooks/useMenu/useMenu";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [data, isLoading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "The item will delete form menu items!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("count success")
          axiosSecure.delete(`/api/v1/menuItem/${item._id}`).then((res) => {
            if (res.data.deletedCount) {
                refetch();
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Item deleted successfully!",
                showConfirmButton: false,
                timer: 1500
              });
              
            }
          });
        // const res = await axiosSecure.delete(`/api/v1/menuItem/${item._id}`);
        // if (res.data.deletedCount) {
        //   Swal.fire({
        //     position: "top",
        //     icon: "success",
        //     title: "Item deleted successfully!",
        //     showConfirmButton: false,
        //     timer: 1500,
        //   });
        //   refetch();
        // }
      }
    });
  };
  return (
    <div>
      <SectionTitle heading="MANAGE ALL ITEMS" subHeading="Hurry Up!" />
      <div className="p-6 bg-white">
        <div className="flex items-center justify-between my-5">
          <p className="font-cinzel text-xl font-bold">
            Total Items: {data?.length}{" "}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>Item image</th>
                <th>Item name</th>
                <th>Price</th>
                <th className="text-center">Update</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text">{item.name}</td>
                  <td>${item.price}</td>
                  <td className="text-center">
                    <Link to={`/dashboard/updateItems/${item._id}`}>
                    <button className="btn bg-[#D1A054]">
                      <FaRegEdit className="text-white text-xl hover:text-[#D1A054]" />
                    </button></Link>
                  </td>
                  <th className="text-center">
                    <button
                      onClick={() => handleDelete(item)}
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
  );
};

export default ManageItems;
