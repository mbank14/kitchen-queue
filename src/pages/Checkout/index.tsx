import { useState } from "preact/hooks";

export const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = (e: Event) => {
    e.preventDefault();
  };

  return (
    <div className={`p-4`}>
      <div className={`grid grid-cols-[2fr_1fr]`}>
        <div className={`bg-amber-50 p-9`}>
          <h1 className={`text-2xl font-bold mb-7`}>Info customer</h1>
          <form onSubmit={onSubmit} className={`flex flex-col w-full`}>
            <div>
              <label htmlFor="">
                Name: <input name="name" />
              </label>
              <label htmlFor="">
                Email: <input type="email" name="name" />
              </label>
            </div>
              <label htmlFor="">
                Address: <input name="name" />
              </label>
              <label htmlFor="">
                Phone: <input type="number" name="name" />
              </label>
            
          </form>
        </div>
        <div>
            dsf
        </div>
      </div>
    </div>
  );
};
