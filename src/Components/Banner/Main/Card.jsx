const Card = () => {
  return (
    <div className="lg:w-1/3 w-full mt-8 bg-gray-100 shadow-xl p-4">
      <div>
        <h2 className="text-2xl font-semibold border-b-2 p-2 text-center">
          Want to cook: 01
        </h2>

        <ul className="flex justify-around">
          <li>Name</li>
          <li>Time</li>
          <li>Calories</li>
        </ul>
        
        
      </div>

    </div>
    
  );
};

export default Card;
