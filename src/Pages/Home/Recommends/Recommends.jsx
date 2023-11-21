import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/menu/salad-bg.jpg'

const Recommends = () => {
  return (
    <div className="mt-20 px-6 md:px-0">
      <SectionTitle heading="CHEF RECOMMENDS" subHeading="Should Try" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#F3F3F3] shadow-xl">
          <div className="w-full">
            <img
              src={img}
              alt="food img"
              className="w-full "
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline  border-b-4 border-b-[#BB8506] text-[#BB8506]">add to cart</button>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F3F3] shadow-xl">
          <div className="w-full">
            <img
              src={img}
              alt="food img"
              className="w-full "
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline  border-b-4 border-b-[#BB8506] text-[#BB8506]">add to cart</button>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F3F3] shadow-xl">
          <div className="w-full">
            <img
              src={img}
              alt="food img"
              className="w-full "
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline  border-b-4 border-b-[#BB8506] text-[#BB8506]">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommends;
