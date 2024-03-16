import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Banner/Header";
// import Card from "./Components/Banner/Main/Card";
import Main from "./Components/Banner/Main/Main";

function App() {
  const [products, setProducts] = useState([]);
  const [card, setCart] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(card);

  const handleCart = (pd) => {
    
    const isExitProduct = card.find(product=> product.recipe_id == pd.recipe_id);
    if(!isExitProduct){
      setCart([...card,pd]);
    }
    else{
      alert('This Card Already Exit');
    }
    
  };

const handleRemoveCart= id=>{
  const newCard =card.filter(product=> product.recipe_id !=id);
  setCart(newCard);
}

  // console.log(card);
  return (
    <>
      {/* banner section  */}
      <div className="p-10">
        <Header></Header>
        <div className="lg:flex  justify-between">
          <div  className="grid lg:grid-cols-2 grid-cols-1 gap-6 mb-4">
            {products.map((product) => (
              <Main
                key={product.id}
                product={product}
                handleCart={handleCart}
              ></Main>
            ))}
          </div>
          {/* side ver section  */}
          <div className="lg:w-1/3 w-full mt-8  shadow-xl p-4">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold border-b-2 p-2 text-center">
          Want to cook: <span>{card.length}</span>
        </h2>

        <ul className="flex justify-evenly mr-20 font-bold text-gray-800 mb-5 text-xl">
          <li>Name</li>
          <li>Time</li>
          <li>Calories</li>
        </ul>
        <div>
          {
            card.map((item,index) => ( 
              <div key={index} className="flex justify-between bg-gray-200 p-4 shadow-xl rounded-xl items-center mb-4">
                <p className="ml-2">{index+1}. {item.recipe_name } </p>
                <p className="mr-2"> {item.preparing_time} minutes</p>
                <p>{item.calories} calories</p>
                <button onClick={()=> handleRemoveCart(item.recipe_id)} className="rounded-2xl btn bg-green-600">Preparing</button>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold border-b-2 p-2 text-center">
          Want to cook: <span>2</span>
        </h2>

        <ul className="flex justify-between  font-bold text-gray-800 mb-5 text-xl">
          <li>Name</li>
          <li>Time</li>
          <li>Calories</li>
        </ul>
        <div>
          {
            card.map((item,index) => ( 
              <div key={index} className="flex justify-between bg-gray-200 p-4 shadow-xl rounded-xl items-center mb-4">
                <p className="ml-2">{index+1}. {item.recipe_name } </p>
                <p className="mr-2"> {item.preparing_time} minutes</p>
                <p>{item.calories} calories</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
          
          {/* <Card></Card> */}
        </div>
      </div>
    </>
  );
}

export default App;
