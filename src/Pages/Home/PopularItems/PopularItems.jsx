
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ItemMenu from "../../../Components/ItemMenu/ItemMenu";
import useMenu from "../../../hooks/useMenu/useMenu";


const PopularItems = () => {

    const [items, isLoading] = useMenu('popular');

    if(isLoading) return <span className="loading loading-infinity loading-lg"></span>


    return (
        <div className="mt-20">
            <SectionTitle heading="FROM OUR MENU" subHeading="Check it out"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    items.map(item => <ItemMenu key={item.name} item={item}/>)
                }
            </div>
        </div>
    );
};

export default PopularItems;