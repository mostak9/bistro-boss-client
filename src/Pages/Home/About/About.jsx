import Bg from '../../../assets/home/chef-service.jpg'

const About = () => {
    return (
        <div style={{backgroundImage: `url(${Bg})`}} className='bg-cover w-full bg-fixed  bg-center bg-no-repeat md:py-28 md:px-24 py-16 px-12'>
            <div className='bg-white md:px-28 md:py-24 px-20 py-16 text-center'>
                <h1 className='font-cinzel text-4xl uppercase'>Bistro Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default About;