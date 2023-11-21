import PropTypes from 'prop-types'
const ItemMenu = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className='flex space-x-7'>
            <img src={image} className='w-28 rounded-tr-full rounded-br-full  rounded-bl-full' alt="" />
            <div className='flex'>
            <div>
                <h3 className='font-cinzel uppercase'>{name}.............</h3>
                <p className='text-[#737373] max-w-md'> {recipe}</p>
            </div>
            <p className='text-[#BB8506]'>$ {price}</p>
            </div>
        </div>
    );
};

ItemMenu.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ItemMenu;