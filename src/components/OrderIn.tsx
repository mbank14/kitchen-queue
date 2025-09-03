// import { useState } from "preact/hooks";
import { IOrderIn } from "../type";

// how to fix parameter component on below
export const OrderIn = ({
  orderData,
  handlePending,
  handleProcess,
  handleCancel,
}: {
  orderData: IOrderIn[];
  handlePending?: () => void;
  handleProcess?: () => void;
  handleCancel?: () => void;
}) => {
  const statusItem = {
    new: "bg-sky-400",
    pending: "bg-amber-400",
    idle: "bg-gray-400",
    canceled: "bg-red-400",
  };

  return (
    <div>
      <div className={`w-full overflow-auto`}>
        {/* slide list of cards */}
        <div className={`flex`}>
          {orderData.map((item, index) => (
            <div>
              <div
                key={index}
                className={`${item.status === "pending" ? "bg-amber-400" : ""}
                            min-w-[300px] border-blue-900/70 rounded-xl border-[1px] border-solid border-b-[2px] p-2 m-2`}
              >
                <div className={`p-3 `}>
                  <div
                    className={`flex flex-row justify-between items-center mb-2`}
                  >
                    <h2 className={`text-lg`}>Order #{item.no}</h2>
                    <h3
                      className={`${
                        statusItem[item.status]
                      } inline-block rounded-2xl px-2 py-1 text-sm text-white`}
                    >
                      {item.status}
                    </h3>
                    {/* <div className={`inline-block w-3/5`}>
                                    </div> */}
                    {/* <div>
                                        <button className={`bg-red-400`}>Cancel</button>
                                    </div> */}
                  </div>

                  <div
                    className={`border-b-[2px] border-blue-900/40 w-full`}
                  ></div>

                  <div className={`my-2`}>
                    <h2 className={`font-bold`}>List Order</h2>
                    <ul>
                      {item.items.map((orderItem, index) => (
                        <li
                          key={index}
                          className={`border-b border-blue-900/40 py-2`}
                        >
                          {orderItem.name} x {orderItem.qty}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {item.notes && (
                    <div class={`p-2 bg-teal-900 rounded-xl mt-3`}>
                      <h2 className={`text-teal-300 text-base text-center`}>
                        Notes
                      </h2>
                      <p className={`text-teal-50 text-sm mt-2`}>
                        {item.notes}
                      </p>
                    </div>
                  )}

                  <div id={`tombolbtn`} className={`flex flex-col gap-1 mt-5`}>
                    <div className={`flex gap-1`}>
                        <button onClick={handleCancel} className={`bg-red-400 w-1/2 py-2 rounded-xl`} >Cancel</button>
                      {item.status === "pending" ? (
                        <span>Pending</span>
                      ) : (
                        <button
                          onClick={handlePending}
                          className={`bg-amber-400 w-1/2 py-2 rounded-xl`}
                        >
                          Pending
                        </button>
                      )}
                    </div>
                    <button
                      onClick={handleProcess}
                      className={`bg-sky-400 w-full py-2 rounded-xl`}
                    >
                      Process
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
