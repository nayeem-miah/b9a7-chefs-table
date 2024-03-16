import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Banner/Header";
import Card from "./Components/Banner/Main/Card";
import Main from "./Components/Banner/Main/Main";

function App() {
  const [products, setProducts] = useState([]);
  const [card, setCart] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(value);

  const handleCart = (pd) => {
    setCart([pd]);
  };
  console.log(card);
  return (
    <>
      {/* banner section  */}
      <div className="p-10">
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
        <Card></Card>

          
        </div>
        
        
      </div>
    </>
  );
}

export default App;
