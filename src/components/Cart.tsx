import { Route } from "preact-iso";
import { formatCurrency } from "../libs/utils/formatCurrency";
import {  addOrderToSignalOrderIn, cartItems, decreaseQty, increaseQty, removeFromCart } from "../store";
import { CButton } from "./CButton";

export const Cart = () => {
  return (
    <div className={`relative w-full`}>
      <div
        className={`border-[1px] w-1/4 border-solid rounded-xl border-black/55 fixed`}
      >
        {cartItems.value.length === 0 ? (
          <div
            className={`h-35 flex justify-center items-center rounded-xl bg-amber-800`}
          >
            <p className={`text-center font-bold text-2xl text-amber-50`}>
              Cart is empty
            </p>
          </div>
        ) : (
          <ul className={`p-2`}>
            {cartItems.value.map((cart) => (
              <li key={cart.id}>
                <div>
                  <h2 className={`text-xl font-bold`}>Cart</h2>
                  {cart.items.map((item, index) => (
                    <div key={index} className={`flex flex-row justify-between gap-2`}>
                      <div className={`flex-1`}>
                        <p>{item.name}</p>
                        <div className={`flex justify-between `}>
                          <span>{formatCurrency(item.price)}</span>
                          <div className={`flex gap-2 flex-row w-17 items-center p-1`}>
                            <a onClick={() => decreaseQty(item.id)}  className={`inline-block h-auto text-white bg-black p-1`}>-</a>
                            <span>x{item.qty}</span>
                            <a onClick={() => increaseQty(item.id)} className={`inline-block h-auto text-white bg-black p-1 cursor-pointer`}>+</a>
                          </div>
                        </div>
                      </div>
                      <div className={`flex items-center`}>
                        <a href="" className={``} onClick={()=> removeFromCart(item.id)} >X</a>
                      </div>
                    </div>
                  ))}
                </div>
                <p className={`flex justify-between mt-3`}>
                  <span>Total:</span>
                  <span>{formatCurrency(cart.total)}</span>
                </p>
                {/* <a ></a> */}
                {/* <CButton label="Checkout" onClick={() => window.location.href = '/checkout'}  style={"info"} /> */}
                <CButton label="Checkout" onClick={() => addOrderToSignalOrderIn(cart)}  style={"info"} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
