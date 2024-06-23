import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCard from "../components/ShoppingCard";

const ShoppingCardContext = createContext({});

const initiakCardItems = localStorage.getItem("shopping-card")
  ? JSON.parse(localStorage.getItem("shopping-card"))
  : [];

const ShoppingCardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardItems, setCardItems] = useState(initiakCardItems);

  useEffect(() => {
    localStorage.setItem("shopping-card", JSON.stringify(cardItems));
  }, [cardItems]);

  const openCard = () => {
    setIsOpen(true);
  };

  const closeCard = () => {
    setIsOpen(false);
  };

  const cardQuantity = cardItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemsQuantity = (id) => {
    return cardItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCardQuantity = (id) => {
    setCardItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCardQuantity = (id) => {
    setCardItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCard = (id) => {
    setCardItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCardContext.Provider
      value={{
        cardItems,
        getItemsQuantity,
        increaseCardQuantity,
        decreaseCardQuantity,
        removeItemFromCard,
        openCard,
        closeCard,
        cardQuantity,
      }}
    >
      {children}
      <ShoppingCard isOpen={isOpen} />
    </ShoppingCardContext.Provider>
  );
};

export default ShoppingCardProvider;
export const useShoppingCard = () => {
  return useContext(ShoppingCardContext);
};
