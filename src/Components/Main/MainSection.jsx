import { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import SideBar from "./SideBar/SideBar";
import delay from "../js/delay";

const MainSection = () => {
    const [menu, setMenu] = useState([]);
    const [items, setItems] = useState([]);
    const [hid, setHid] = useState('hidden');

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, []);

    const handleWantToCook = (item) => {

        if (!items.includes(item)) {
            const newItem = [...items, item];
            setItems(newItem);
        }
        else {
            setHid('');
        }
    }

    //////////////////// 
    const [processingMenu, setProcessingMenu] = useState([]);
    const [time1, setTime1] = useState(0);
    const [time2, setTime2] = useState(0);

    const handleProcessingButton = (item) => {
        const newProcessingMenu = [...processingMenu, item];
        setProcessingMenu(newProcessingMenu);

        const newTime1 = time1+item.cooking_time;
        setTime1(newTime1);
        const newTime2 = time2+item.calories;
        setTime2(newTime2);

        const remaining = items.filter(newitem => newitem !== item);
        setItems(remaining);

    }


    return (
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold mb-6">Our Recipes</h2>
                <p>Our vegan menu boasts a delicious selection of plant-based dishes, crafted with wholesome ingredients to satisfy every palate. From aromatic curries to refreshing salads and hearty burgers, each dish celebrates the vibrant flavors of vegan cuisine, offering a delightful dining experience that is both nourishing and delicious.</p>
            </div>
            <div className='flex gap-6'>
                <Menu menu={menu} handleWantToCook={handleWantToCook}></Menu>
                <SideBar time1={time1} time2={time2} processingMenu={processingMenu} handleProcessingButton={handleProcessingButton} items={items} ></SideBar>
            </div>
            <div className={`toast toast-top toast-end ${hid}`}>
                <div className="alert alert-info">
                    <span>New mail arrived.</span>
                </div>
            </div>
        </div>
    );
};

export default MainSection;