import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/v1/allUsers");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/api/v1/admin/${user._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${user.name} is an admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((err) => console.error(err.message));
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "The user will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/v1/admin/${user._id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Item deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="Manage all users?" subHeading="How many??" />
      <div>
        <div className="p-6 bg-white">
          <div className="flex items-center justify-between my-5">
            <p className="font-cinzel text-xl font-bold">
              Total Users: {users?.length}{" "}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="bg-[#D1A054] text-white">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th className="text-center">Role</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr key={user._id}>
                    <td className="font-bold">{index + 1}</td>
                    <td>{user.name}</td>
                    <td className="text">{user.email}</td>
                    <td className="text-center">
                      {user.role === "admin" ? (
                        <p className="badge badge-outline badge-success">
                          <MdOutlineAdminPanelSettings /> Admin
                        </p>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn text-2xl text-white bg-[#D1A054]"
                        >
                          <FaUsers />
                        </button>
                      )}
                    </td>
                    <th className="text-center">
                      <button
                        onClick={() => handleDelete(user)}
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

export default AllUsers;
