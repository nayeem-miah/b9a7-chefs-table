import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Header from "./Components/Banner/Header";
import Main from "./Components/Banner/Main/Main";

function App() {
  const [products, setProducts] = useState([]);
  const [card, setCart] = useState([]);
  const [useId, setUseId] = useState([]);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (pd) => {
    const isExitProduct = card.find(
      (product) => product.recipe_id == pd.recipe_id
    );
    if (!isExitProduct) {
      setCart([...card, pd]);
    } else {
      toast("This Card Already Exit");
    }
  };

  const handleRemoveCart = (item) => {
    
    const newCard = card.filter(
      (product) => product.recipe_id !== item.recipe_id
    );
    setCart(newCard);
    setUseId([...useId, item]);
    
    
  };
  // console.log(card);
  return (
    <>
      {/* banner section  */}
      <div className="lg:p-10 p-1">
        <Header></Header>
        <div className="lg:flex  justify-between">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mb-4">
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
                {card.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between bg-gray-200 p-4 shadow-xl rounded-xl items-center mb-4"
                  >
                    <p className="ml-2">
                      {index + 1}. {item.recipe_name}{" "}
                    </p>
                    <p className="mr-2"> {item.preparing_time} minutes</p>
                    <p>{item.calories} calories</p>
                    <button
                      onClick={() => handleRemoveCart(item, index)}
                      className="rounded-2xl btn bg-green-600"
                    >
                      Preparing
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold border-b-2 p-2 text-center">
                Currently cooking: <span>{useId.length}</span>
              </h2>

              <ul className="flex justify-between  font-bold text-gray-800 mb-5 text-xl">
                <li>Name</li>
                <li>Time</li>
                <li>Calories</li>
              </ul>
              <div>
                <div>
                  {useId.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between bg-gray-200 p-4 shadow-xl rounded-xl items-center mb-4"
                    >
                      <p className="ml-2">
                        {index + 1}. {item.recipe_name}
                      </p>
                      <p className="mr-2"> {item.preparing_time} minutes</p>
                      <p>{item.calories} calories</p>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex justify-around text-2xl">

                    <p>Total Time = 45 minutes</p>
                    <p>Total Calories = 1050 calories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
