import logo from "./logo.svg";
import "./App.css";
import { ExpenseItem } from "./Components/ExpenseItem";

function App() {
  const list = [
    {
      name: "Banana",
      price: "20",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg",
      secondImg: "",
      shop: "Tel Aviv shop - abu shop",
      shortDecription: "This is a Banana",
    },
    {
      name: "Apple",
      price: "25",
      img: "https://s3-us-west-2.amazonaws.com/melingoimages/Images/4315.jpg",
      secondImg: "",
      shop: "Tel Aviv shop - abu shop",
      shortDecription: "This is an Apple",
    },
    {
      name: "Rice papaer",
      price: "30",
      img: "https://m.media-amazon.com/images/I/81Lc91yOehL.jpg",
      secondImg: "",
      shop: "Tel Aviv shop - abu shop",
      shortDecription: "This is a  Rice papaer",
    },
    {
      name: "potatos",
      price: "10",
      img: "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=",
      secondImg: "",
      shop: "Tel Aviv shop - abu shop",
      shortDecription: "This is a potato",
    },
    {
      name: "water",
      price: "5",
      img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg",
      secondImg: "",
      shop: "Tel Aviv shop - abu shop",
      shortDecription: "You need this so you wont die",
    },
  ];

  return (
    <>
      <h1>Our shop</h1>
      {list.map((item) => {
        return (
          <ExpenseItem name={item.name} img={item.img} price={item.price} />
        );
      })}
    </>
  );
}

export default App;
