import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Button, Input, Textarea } from "@material-tailwind/react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItems = () => {
    const {name, category, price, recipe, _id} = useLoaderData();

    const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()
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
        const menuRes = await axiosSecure.patch(`/api/v1/menu/${_id}`, menuItem)
        if(menuRes.data.modifiedCount) {
            // reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is updated successfully.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log(res.data);
  };
    return (
        <div>
        <SectionTitle heading="UPDATE ITEM" subHeading="Fresh update?" />
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input defaultValue={name} {...register("name")} size="lg" label="Recipe name" required />
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* <Select {...register("category")} size="lg" label="Category">
              <Option value="salad">Salad</Option>
              <Option value="pizza">Pizza</Option>
              <Option value="soup">Soup</Option>
              <Option value="dessert">Dessert</Option>
              <Option value="drinks">Drinks</Option>
            </Select> */}
              <select
                defaultValue={category}
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
              defaultValue={price}
                {...register("price")}
                size="lg"
                type="number"
                label="Price"
                required
              />
            </div>
            <Textarea
            defaultValue={recipe}
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
              Update Recipe Details
            </Button>
          </form>
        </div>
      </div>
    );
};

export default UpdateItems;