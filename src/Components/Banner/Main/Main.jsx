
import { IoMdTime } from "react-icons/io";
import { PiFireSimpleFill } from "react-icons/pi";
import PropTypes from 'prop-types';

const Main = ({product, handleCart}) => {
    
    // console.log(product)
    const {recipe_name,recipe_image,preparing_time,short_description,calories,
        ingredients} =product;
        // console.log(ingredients)
        
  return (
    <div className="lg:w-2/3 w-full">
      <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={recipe_image}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">{recipe_name}</h2>
            <p className="text-gray-700 border-b-2 pb-4">
             {short_description}
            </p>
            <div className="">
             <p>
             <h2 className="text-xl">
                Ingredients: <span>{ingredients.length}</span>
              </h2>
              {
                ingredients.map((value, idx) => <span key={idx}> <li className="li">{value}</li></span>)
              }
             </p>
              <ul className="border-b-2 mb-4 pb-4">
                
                

              </ul>

              <div className="flex mb-4">
                <p className="flex items-center gap-3 text-xl">
                  <IoMdTime></IoMdTime> <span>{preparing_time}</span>minutes
                </p>
                <p className="flex items-center gap-3 text-xl">
                  <PiFireSimpleFill></PiFireSimpleFill> <span>{calories}</span>calories
                </p>
              </div>
              <button onClick={()=> handleCart(product)} className="btn rounded-3xl text-[18px] bg-green-500">
                Want to Cook
              </button>
            </div>
          </div>
        </div>
        
    </div>
  );
};
Main.propTypes={
    product : PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired,
}

export default Main;
