import React from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../features/customerSlice";
import { removeReservation } from "../../features/reservationSlice";
import "./ReservationCard.css";

interface ReservationCardProps {
  name: string;
  index: number;
}

const ReservationCard: React.FC<ReservationCardProps> = ({ name, index }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="reservation-card-container"
      onDoubleClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: uuid(),
            name,
            food: [],
          })
        );
      }}
    >
      {name}
    </div>
  );
};

export default ReservationCard;
