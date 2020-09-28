import React from 'react';

const Cart = (props) => {
   const cart= props.cart;
   let total = 0;
  for (let i= 0; i <cart.length; i++){
      const product  =cart[i];
      total =total+ product.price;    
  }

  let shipping = 0;
  if (cart.length>0){
      shipping = 10*cart.length;
  }
const tax = (total/10).toFixed(2);
    return (
        <div>
            <h5>Order summary </h5>
            <p>Items ordered: {cart.length}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tax + Vat: ${tax}</small></p>
            <p>Total Price: ${total+shipping+Number(tax)}</p>
        </div>
    );
};

export default Cart;