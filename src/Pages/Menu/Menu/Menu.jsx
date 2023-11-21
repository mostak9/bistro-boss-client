import { Helmet } from "react-helmet-async";
import menuBg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu, isLoading] = useMenu();
    if(isLoading) return <span className="loading loading-infinity loading-lg"></span>

    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover title="OUR MENU" img={menuBg} description="Would you like to try a dish?"/>
            {/* offered category */}
            <SectionTitle heading="Don't miss" subHeading="TODAY'S OFFER"/>
            <MenuCategory items={offered}/>
            {/* dessert category */}
            <MenuCategory items={dessert} title={'DESSERTS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={dessertBg}/>
            {/* pizza category */}
            <MenuCategory items={pizza} title={'PIZZA'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={pizzaBg}/>
            {/* Salad category */}
            <MenuCategory items={salad} title={'Salad'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={saladBg}/>
            {/* soup category */}
            <MenuCategory items={soup} title={'Soup'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={soupBg}/>
        </div>
    );
};

export default Menu;