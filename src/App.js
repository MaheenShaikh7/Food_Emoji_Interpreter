import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🥚": "Egg",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey Pot",
  "🍼": "Baby Bottle",
  "🥛": "Glass of Milk",
  "☕": "Hot Beverage",
  "🍵": "Teacup Without Handle",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw",
  "🧃": "Beverage Box",
  "🧉": "Mate",
  "🧊": "Ice"
};

var food1 = [
  "🥞",
  "🍹",
  "🥨",
  "🥬",
  "🦪",
  "🥧",
  "🍱",
  "🥟",
  "🍒",
  "🧃",
  "🍷",
  "🥐",
  "🍮",
  "🧁"
];

export default function App() {
  var [meaning, setMeaning] = useState("See Meaning Here..");
  function onChangeHandler(event) {
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("Sorry could'nt find it in our database :(");
    }
  }

  function onClickHandler(item) {
    if (item in emojiDictionary) {
      setMeaning(emojiDictionary[item]);
    }
  }
  return (
    <div className="App">
      <h1>Food Emoji Interpreter</h1>
      <h2>
        Enter food emoji or choose from given emojis to know what it means
      </h2>
      <input
        style={{
          fontSize: "2rem",
          padding: "0.5rem",
          margin: "1rem"
        }}
        onChange={onChangeHandler}
      ></input>

      <h1 id="meaning">
        <span
          style={{
            backgroundColor: "wheat",
            padding: " 0.5rem 0.5rem",
            borderRadius: "1rem"
          }}
        >
          {meaning}
        </span>
      </h1>
      <ul style={{ padding: " 1rem 20rem", marginBottom: "5%" }}>
        {food1.map(function (item) {
          return (
            <span
              key={item}
              style={{ cursor: "pointer", fontSize: "3rem", padding: "1rem" }}
              onClick={() => onClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </ul>

      <footer>
        <h2>Made with 💖 & 🧠 by Maheen | Dec 2022 </h2>
      </footer>
    </div>
  );
}
