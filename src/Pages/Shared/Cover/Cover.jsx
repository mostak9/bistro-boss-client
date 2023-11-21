import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
        className="bg-center bg-cover"
    >
         <div
      className="hero h-[700px]"
      
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-2/3 h-2/3 flex items-center justify-center text-center bg-[#15151599] text-neutral-content">
        <div className="max-w-md font-cinzel">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
           {description}
          </p>
        </div>
      </div>
    </div>
    </Parallax>
   
  );
};

Cover.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Cover;
