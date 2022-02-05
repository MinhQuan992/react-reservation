import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../../features/customerSlice";
import "./CustomerCard.css";

interface CustomerCardProps {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard: React.FC<CustomerCardProps> = ({ id, name, food }) => {
  const dispatch = useDispatch();
  const [foodInput, setFoodInput] = useState("");

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (!foodInput) return;

              dispatch(
                addFoodToCustomer({
                  customerId: id,
                  food: foodInput,
                })
              );

              setFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
