import Item from '../Item/Item';

const Menu = ({menu , handleWantToCook}) => {
    return (
        <div className='w-2/3'>
            <div className='grid md:grid-cols-2 gap-6'>
            {
                menu.map(item => <Item handleWantToCook={handleWantToCook} key={item.id} item={item}></Item>)
            }
            </div>
        </div>
    );
};

export default Menu;