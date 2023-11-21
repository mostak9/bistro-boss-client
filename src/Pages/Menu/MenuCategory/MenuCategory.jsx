import { Link } from "react-router-dom";
import ItemMenu from "../../../Components/ItemMenu/ItemMenu";
import Cover from "../../Shared/Cover/Cover";
import PropTypes from 'prop-types';


const MenuCategory = ({items, title, coverImg, description}) => {
    return (
        <div className="my-12">
            {title && <Cover title={title} description={description} img={coverImg}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {
                    items.map(item => <ItemMenu key={items._id} item={item}/>)
                }
            </div>
            <div className="text-center mt-5">
            <Link to={`/shop/${items[0].category}`}><button className="btn btn-outline border-b-4">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.object.isRequired,
    title: PropTypes.string,
    coverImg: PropTypes.any,
    description: PropTypes.string
}

export default MenuCategory;