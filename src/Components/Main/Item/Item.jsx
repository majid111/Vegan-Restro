import Ingredient from "./Ingredient";
import fire from '../../../assets/Image/Fire.png'
import clock from '../../../assets/Image/clock.png'

const Item = ({ item, handleWantToCook }) => {
    const { title, description, ingredients, cooking_time, calories, cover } = item;
    return (
        <div className="p-6 rounded-2xl border-2">
            <img className="cover rounded-2xl h-52" src={cover} alt="" />
            <h3 className="m-6 text-xl font-semibold">{title}</h3>
            <p className="p-4">{description}</p>
            <div className="border-y-2 p-6">
                <h2 className="mb-4 font-semibold text-lg">Ingredients: {ingredients.length}</h2>
                <ul>
                        {
                            ingredients.map((ingredient, idx) => <Ingredient ingredient={ingredient} key={idx}></Ingredient>)
                        }
                </ul>
            </div>
            <div className="flex gap-6 m-7">
                <p> <img className="inline" src={clock} alt="" /> {cooking_time} minutes</p>
                <p><img className="inline" src={fire} alt="" /> {calories} calories</p>
            </div>
            <button onClick={()=>handleWantToCook(item)} className="bg-[#0BE58A] btn rounded-full">Want to Cook</button>
        </div>
    );
};

export default Item;