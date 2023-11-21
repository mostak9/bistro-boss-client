import { useContext } from "react";
import { AuthContext } from "../../../providers/Auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: payments, isLoading: loader } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
        
        const res = await axiosSecure.get(`/api/v1/getPayments/${user.email}`);

        return res.data;
    },
  });

  if (loader)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  return (
    <div>
      <SectionTitle heading="PAYMENT HISTORY" subHeading="At a Glance!" />
      <div>
        <div className="p-6 bg-white">
          <div className="flex items-center justify-between my-5">
            <p className="font-cinzel text-xl font-bold">
              Total Payments: {payments?.length}{" "}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="bg-[#D1A054] text-white">
                <tr>
                  <th></th>
                  <th>Email</th>
                  <th>Transaction Id</th>
                  <th>Total Price</th>
                  <th>Payment Date</th>
                  <th>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((payment, index) => (
                  <tr key={payment._id}>
                    <td className="font-bold">{index + 1}</td>
                    <td>{payment.email}</td>
                    <td className="text">{payment.transactionId}</td>
                    <td>$ {payment.price}</td>
                    <td>{payment.date}</td>
                    <th><div className="badge badge-primary">{payment.status}</div></th>
                  </tr>
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
