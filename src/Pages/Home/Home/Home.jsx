import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {


  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Navbar />
      <Banner />
      <Category />
      <About />
      <PopularItems />
      <CallUs />
      <Recommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
