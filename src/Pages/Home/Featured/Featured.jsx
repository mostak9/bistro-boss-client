import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import img from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='my-28 md:px-52 md:py-32 text-white  px-11 py-10 featured-box'>
            <SectionTitle heading='FROM OUR MENU' subHeading='Check it out'/>
            <div className='md:flex items-center justify-center mt-12 space-y-11 md:space-y-0 md:space-x-16'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3 className=''>March 20, 2023</h3>
                    <h2 className='uppercase'>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-5 text-white border-white'>Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;