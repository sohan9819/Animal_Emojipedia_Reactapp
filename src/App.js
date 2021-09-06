import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕": "🦺 Service Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat",
  "🐈": "⬛ Black Cat",
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐴": "Horse Face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🦬": "Bison",
  "🐮": "Cow Face",
  "🐂": "Ox",
  "🐃": " Water Buffalo",
  "🐄": " Cow",
  "🐷": " Pig Face",
  "🐖": " Pig",
  "🐗": "Boar",
  "🐽": "Pig Nose",
  "🐏": "Ram",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🦣": "Mammoth",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐭": "Mouse Face",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🐹": "Hamster",
  "🐰": "Rabbit Face",
  "🐇": "Rabbit",
  "🐿": "Chipmunk",
  "🦫": "Beaver",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐻": "‍❄️ Polar Bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo"
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");
  var [clicked, setclicked] = useState("");

  const emojiInputHandler = (event) => {
    if (event.target.value === "") {
      setmeaning("");
    } else if (emojiDictionary[event.target.value] === undefined) {
      setmeaning(" : Not avilable in the database :(");
    } else {
      setmeaning(" : " + emojiDictionary[event.target.value]);
    }
    setclicked(event.target.value);
  };

  const liClickhandler = (item) => {
    setmeaning(" : " + emojiDictionary[item]);
    setclicked(item);
  };

  return (
    <div className="App">
      <h1>Welcome to Animal emojipedia app</h1>
      <h2> Enter you animal emoji here</h2>
      <input onChange={emojiInputHandler} type="text"></input>
      <h2>
        {clicked}
        {meaning}
      </h2>
      <ul>
        {emojiList.map((item, index) => {
          if (index <= 10) {
            return (
              <li
                onClick={() => {
                  liClickhandler(item);
                }}
              >
                {" "}
                {item}{" "}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
