import React from 'react';
import styled from 'styled-components';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <CartContainer>
      <CartHeader>
        <h2>Your Cart</h2>
      </CartHeader>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <CartItemImage src={item.imageUrl} alt={item.name} />
            <CartItemInfo>
              <p>{item.name}</p>
              <p>{`$${item.price}`}</p>
            </CartItemInfo>
            <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
          </CartItem>
        ))}
      </CartItems>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  padding: 30px;
`;

const CartHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
`;

const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const CartItemInfo = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const RemoveButton = styled.button`
  background-color: #f37708;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 8px;
  border-radius: 5px;

  &:hover {
    background-color: #e26e07;
  }
`;
