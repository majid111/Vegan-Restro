const array = [1, 2, 3, 4, 5, 6, 7, 8];
const array4 = ["Vegan Chickpea Curry"];
const array2 = {
    "id": 1,
    "title": "Vegan Chickpea Curry",
    "description": "Savor the rich flavors of this aromatic chickpea curry, simmered in a fragrant blend of spices and coconut milk.",
    "ingredients": ["Chickpeas", "Coconut milk", "Tomatoes", "Onion", "Garlic", "Ginger", "Turmeric", "Cumin", "Coriander", "Chili powder", "Garam masala", "Fresh cilantro"],
    "cooking_time": 35,
    "calories": 320,
    "cover": "https://i.ibb.co/Jz1znbH/Vegan-Chickpea-Curry.jpg"
};
const array3 = [{
    "id": 1,
    "title": "Vegan Chickpea Curry",
    "description": "Savor the rich flavors of this aromatic chickpea curry, simmered in a fragrant blend of spices and coconut milk.",
    "ingredients": ["Chickpeas", "Coconut milk", "Tomatoes", "Onion", "Garlic", "Ginger", "Turmeric", "Cumin", "Coriander", "Chili powder", "Garam masala", "Fresh cilantro"],
    "cooking_time": 35,
    "calories": 320,
    "cover": "https://i.ibb.co/Jz1znbH/Vegan-Chickpea-Curry.jpg"
},
{
    "id": 2,
    "title": "Quinoa Stuffed Bell Peppers",
    "description": "Enjoy the hearty goodness of quinoa stuffed into vibrant bell peppers, baked to perfection and topped with a savory tomato sauce.",
    "ingredients": ["Quinoa", "Bell peppers", "Tomatoes", "Onion", "Garlic", "Spinach", "Vegetable broth", "Olive oil", "Basil", "Oregano", "Salt", "Pepper"],
    "cooking_time": 45,
    "calories": 280,
    "cover": "https://i.ibb.co/gRHVr6M/Quinoa-Stuffed-Bell-Peppers-by-freepik.jpg"
}];
const a2 = array2.title;
const a = array4['0'];
const validity = array3.find(number => number === 1);
const v = array3.find(bb => bb?.title === a);
console.log(v);