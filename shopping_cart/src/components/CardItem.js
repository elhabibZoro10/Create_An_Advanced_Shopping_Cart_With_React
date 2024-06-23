import React from "react";
import storeItems from "../data/storeItems.json";
import { Button, Stack } from "react-bootstrap";
import formatCurrency from "./formatCurrency";
import { useShoppingCard } from "../context/ShoppingCardContext";

const CardItem = ({ id, quantity }) => {
  const { removeItemFromCard } = useShoppingCard();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              {quantity} X
            </span>
          )}
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItemFromCard(id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CardItem;
