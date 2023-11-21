import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if(res.data.success) {
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            image: res.data.data.display_url,
            recipe: data.recipe,
        }
        const menuRes = await axiosSecure.post('/api/v1/menuItem', menuItem)
        if(menuRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to menu`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle heading="ADD AN ITEM" subHeading="What's new?" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input {...register("name")} size="lg" label="Recipe name" required />
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* <Select {...register("category")} size="lg" label="Category">
            <Option value="salad">Salad</Option>
            <Option value="pizza">Pizza</Option>
            <Option value="soup">Soup</Option>
            <Option value="dessert">Dessert</Option>
            <Option value="drinks">Drinks</Option>
          </Select> */}
            <select
              defaultValue="default"
              {...register("category")}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected value="default">
                Choose a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
            <Input
              {...register("price")}
              size="lg"
              type="number"
              label="Price"
              required
            />
          </div>
          <Textarea
            {...register("recipe")}
            size="lg"
            label="Recipe Details"
            required
          />
          <Input
            type="file"
            {...register("image", { required: true })}
            size="lg"
            label="Recipe image"
          />
          <Button
            type="submit"
            variant="gradient"
            className="flex gap-1 bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none"
          >
            Add Items <FaUtensils />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
