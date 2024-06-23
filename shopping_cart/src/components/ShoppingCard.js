import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCard } from "../context/ShoppingCardContext";
import CardItem from "./CardItem";
import storeItems from "../data/storeItems.json";
import formatCurrency from "./formatCurrency";

const ShoppingCard = ({ isOpen }) => {
  const { cardItems, closeCard } = useShoppingCard();
  return (
    <Offcanvas show={isOpen} onHide={closeCard} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cardItems.map((item) => (
            <CardItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cardItems.reduce((total, cardItems) => {
                const item = storeItems.find((i) => i.id === cardItems.id);
                return total + (item?.price || 0) * cardItems.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCard;
