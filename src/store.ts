import { computed, signal } from "@preact/signals";

import { ICart, IMenu, IOrder, IOrderIn, IOrderOut, IUser, baseOrder } from "../src/type";

export const signalOrderIn = signal<IOrderIn[]>([
  {
    no: 1,
    items: [
      {
        no: 1,
        name: "Product 1",
        qty: 2,
      },
      {
        no: 2,
        name: "Product 2",
        qty: 1,
      },
    ],
    status: "new",
  },
  {
    no: 2,
    items: [
      {
        no: 1,
        name: "Product 3",
        qty: 1,
      },
    ],
    status: "new",
  },
  {
    no: 3,
    items: [
      {
        no: 1,
        name: "Product 4",
        qty: 2,
      },
    ],
    status: "new",
  },
  {
    no: 4,
    items: [
      {
        no: 1,
        name: "Product 5",
        qty: 1,
      },
    ],
    status: "new",
    notes: "This is a note for order 4",
  },
]);
export const signalOrderOut = signal<IOrderOut[]>([
  {
    no: 1,
    items: [
      {
        no: 1,
        name: "Product 1",
        qty: 2,
      },
      {
        no: 2,
        name: "Product 2",
        qty: 1,
      },
    ],
    status: "process",
  },
  {
    no: 2,
    items: [
      {
        no: 1,
        name: "Product 3",
        qty: 1,
      },
    ],
    status: "process",
  },
  {
    no: 3,
    items: [
      {
        no: 1,
        name: "Product 4",
        qty: 2,
      },
    ],
    status: "done",
  },
]);

export const orderOutDone = (no: number) => {
  return signalOrderOut.value.map((item) => {
    return item.no === no ? { ...item, status: "done" } : item;
  });
};

export const getTotalCanceledOrder = computed(
  () =>
    signalOrderIn.value.reduce((acc, item) => {
      if (item.status === "canceled") {
        acc.push(item);
      }
      return acc;
    }, []).length
);


export const getTotalDoneOrderOut = computed(
  () =>
    signalOrderOut.value.reduce((acc, item) => {
      if (
        item.status === "done" &&
        (!item.cancelReason || item.cancelReason.length === 0)
      ) {
        acc.push(item);
      }
      return acc;
    }, []).length
);

// Menus

export const burgerMenus = signal([
  //  change all id with number
  {
    id: 1,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132332/artisanal-bread-choose-your-own-3-pack.c64d8dc0584457116b91a24f43cd861c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Orwashers Bakery",
    dsc: "Artisanal Bread - Choose Your Own 3 Pack",
    price: 45,
    rate: 5,
    country: "New York, NY",
  },
  {
    id: 2,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132426/bread-choose-your-own-4-pack.78f96938f1a3a5bc6a7fefa564bf878c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Grateful Bread Company",
    dsc: "Artisanal Bread - Choose Your Own 4 Pack",
    price: 59,
    rate: 5,
    country: "Sacramento, CA",
  },
  {
    id: 3,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133923/corn-cheese-bread-2-pack.703937ce3943d6caad78d3612cd9dcef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Calic Bread",
    dsc: "Corn Cheese Bread - 2 Pack",
    price: 89,
    rate: 5,
    country: "Los Angeles, CA",
  },
  {
    id: 4,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133401/tartine-bread-loaves-choose-your-own-2-pack.aa052bf998aa1b627e1fa71a482311a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Tartine Bakery",
    dsc: "Tartine Bread Loaves - Choose Your Own 2 Pack",
    price: 39,
    rate: 4,
    country: "San Francisco, CA",
  },
  {
    id: 5,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95387/japanese-milk-bread.5c3e3677db6b145b659e702af3098337.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Craftsman and Wolves",
    dsc: "Japanese Milk Bread - 2 Loaves",
    price: 55,
    rate: 5,
    country: "San Francisco, CA",
  },
  {
    id: 6,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126688/bread-choose-your-own-6-pack.060cf408cf8b30ef3ea618ef3e5d5389.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Orwashers Bakery",
    dsc: "Artisanal Bread - Choose Your Own 6 Pack",
    price: 69,
    rate: 5,
    country: "New York, NY",
  },
  {
    id: 7,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89514/artichoke-bread-sampler-4-pack.2243d37a2b976f88cdfe026026e82e1f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Arcangeli Grocery",
    dsc: "Artichoke Bread Sampler - 4 Pack",
    price: 59,
    rate: 4,
    country: "Pescadero, CA",
  },
  {
    id: 8,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133455/bavarian-soft-pretzel-twists-10-pack.0f8c34ca7341a525bd581924bd9f030f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Milwaukee Pretzel Company",
    dsc: "Bavarian Soft Pretzel Twists - 10 Pack",
    price: 39,
    rate: 4,
    country: "Milwaukee, WI",
  },
  {
    id: 9,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99033/mini-banana-bread-loaves-18-pack-choose-your-own.cf136bd604f91d94d067045b13ad0227.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Maui Banana Bread Co",
    dsc: "Banana Bread- Choose Your Own 6 Pack",
    price: 59,
    rate: 5,
    country: "Lahaina, HI",
  },
  {
    id: 10,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/128801/stuffed-bread-loaves-choose-your-own-2-pack.40c693cca82e78bf496dc14bf1f52d61.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Antique Bar & Bakery",
    dsc: "Stuffed Bread Loaves - Choose Your Own 2 Pack",
    price: 59,
    rate: 4,
    country: "Hoboken, NJ",
  },
  {
    id: 11,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129676/hot-and-spicy-cheese-bread-2-pack.014477417093300bfb5e9ed8645bd0a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Stella's of Madison",
    dsc: "Hot & Spicy Cheese Bread - 2 Pack",
    price: 39,
    rate: 4,
    country: "Madison, WI",
  },
  {
    id: 12,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116300/savory-bread-assortment-4-pack.3f088d3d463da68582c2ea93a7c1d547.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Grateful Bread Company",
    dsc: "Savory Bread Assortment - 4 Pack",
    price: 49,
    rate: 4,
    country: "Sacramento, CA",
  },
  {
    id: 13,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98280/classic-clam-chowder-and-bread-bowls-4-pack.ce07ef6072a276e55bb2924f56d74ebb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Boudin Bakery",
    dsc: "Classic Clam Chowder and Bread Bowls Kit - 4 Pack",
    price: 49,
    rate: 4,
    country: "San Francisco, CA",
  },
  {
    id: 14,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132930/bread-and-roses-care-package.c60ba288ef2a179a3d6da325d33ff402.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Bread and Roses Bakery",
    dsc: "Bread & Roses Care Package",
    price: 59,
    rate: 4,
    country: "Wells, ME",
  },
  {
    id: 15,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90781/choose-your-own-gourmet-breadsticks-16-pack.887e7e2eb8f22d3cd4d89f1a11affd5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Claudio's Specialty Breads",
    dsc: "Choose Your Own Gourmet Breadsticks - 16 Pack",
    price: 119,
    rate: 4,
    country: "Castroville, CA",
  },
  {
    id: 16,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106973/babka-choose-your-own-2-pack.7f0a32a47bf3e7d9582b94b6aaabbb10.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Kossar's Bagels & Bialys",
    dsc: "Babka - Choose Your Own 2 Pack",
    price: 59,
    rate: 5,
    country: "New York, NY",
  },
  {
    id: 17,
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105205/original-garlic-cream-cheese-bread-2-pack.7cb55509860ca0311b97222aae4eb0b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Calic Bread",
    dsc: "Original Garlic Cream Cheese Bread - 2 Pack",
    price: 79,
    rate: 5,
    country: "Los Angeles, CA",
  },
  {
    id: 18,
    img: "https://goldbelly.imgix.net/uploads/product_image/image/88948/artisanal-bread-choose-your-own-2-pack.a33cb2854267dfc70780af82847e5557.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "High Street Philadelphia",
    dsc: "Artisanal Bread - Choose Your Own 2 Pack",
    price: 44,
    rate: 5,
    country: "Philadelphia, PA",
  },
]);

export const cartItems = signal<ICart[]>([
  {
    id: 1,
    items: [
      {
        id: 1,
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132332/artisanal-bread-choose-your-own-3-pack.c64d8dc0584457116b91a24f43cd861c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Orwashers Bakery",
        dsc: "Artisanal Bread - Choose Your Own 3 Pack",
        price: 45,
        rate: 5,
        country: "New York, NY",
        qty: 2,
      },
      {
        id: 2,
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132426/bread-choose-your-own-4-pack.78f96938f1a3a5bc6a7fefa564bf878c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Grateful Bread Company",
        dsc: "Artisanal Bread - Choose Your Own 4 Pack",
        price: 59,
        rate: 5,
        country: "Sacramento, CA",
        qty: 1,
      },
    ],
    total: 149,
  },
]);

export const addToCart = (menu: IMenu) => {
  const current = cartItems.value;
  const cartIndex = current.findIndex(cart => cart.id === 1);

  if (cartIndex !== -1) {
    const cart = current[cartIndex];
    const itemIndex = cart.items.findIndex(item => item.id === menu.id);

    let newItems: typeof cart.items;
    if (itemIndex !== -1) {
      newItems = cart.items.map(item =>
        item.id === menu.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      newItems = [...cart.items, { ...menu, qty: 1 }];
    }

    const updatedCart = {
      ...cart,
      items: newItems,
      total: newItems.reduce((acc, item) => acc + item.price * item.qty, 0),
    };

    const newCartItems = [
      ...current.slice(0, cartIndex),
      updatedCart,
      ...current.slice(cartIndex + 1),
    ];

    cartItems.value = newCartItems; // untuk re-render ,assign array baru
  } else {
    
    const newCart = {
      id: 1,
      items: [{ ...menu, qty: 1 }],
      total: menu.price,
    };
    cartItems.value = [...current, newCart]; // untuk re-render ,assign array baru
  }
};


export const removeFromCart = (menuId: number) => {
  const current = cartItems.value;
  const updatedCarts = current.map((cart) => {
    if (cart.id !== 1) return cart;
    const updatedItems = cart.items.filter((item) => item.id !== menuId);
    return {
      ...cart,
      items: updatedItems,
      total: updatedItems.reduce((acc, item) => acc + item.price * item.qty, 0),
    };
  });
  cartItems.value = updatedCarts.filter((cart) => cart.items.length > 0);
};

export const increaseQty = (menuId: number) => {
  const current = cartItems.value;

  const updatedCarts = current.map((cart) => {
    if (cart.id !== 1) return cart;
    const updatedItems = cart.items.map((item) => {
      if (item.id === menuId) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    return {
      ...cart,
      items: updatedItems,
      total: updatedItems.reduce((acc, item) => acc + item.price * item.qty, 0),
    };
  });

  cartItems.value = updatedCarts;
};

export const decreaseQty = (menuId: number) => {
  const current = cartItems.value;

  const updatedCarts = current.map((cart) => {
    if (cart.id !== 1) return cart;

    const updatedItems = cart.items.map((item) => {
        if (item.id === menuId) {
          if (item.qty === 1) return null; // hapus item
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
      .filter(Boolean) as typeof cart.items;

    return {
      ...cart,
      items: updatedItems,
      total: updatedItems.reduce((acc, item) => acc + item.price * item.qty, 0),
    };
  });

  cartItems.value = updatedCarts.filter((cart) => cart.items.length > 0);
};



// Checkout
export const infoCheckout = signal<IUser>({
  id: 1,
  name: "Jaka",
  email: "jaka@example.com",
  address: "jl. bolo bolo",
  phone: "09898239823",
});

export const infoOrder = signal<IOrder[]>([
  {
    id: 55,
    // user: infoCheckout.value,
    cart: cartItems.value,
    status: "pending",
  },
]);

// function info user before doing checkout
export const updateUserInfo = (user: Partial<IUser>) => {
  infoCheckout.value = { ...infoCheckout.value, ...user };
}

// function add order after doing checkout
export const addOrder = (order: IOrder) => {
  const current = infoOrder.value;
  infoOrder.value = [...current, order];
  cartItems.value = [];
}

// function update order status after doing checkout
export const updateOrderStatus = (orderId: number, status: IOrder["status"]) => {
  const current = infoOrder.value;
  infoOrder.value = current.map((order) => {
    if (order.id === orderId) {
      return { ...order, status };
    }
    return order;
  });
};

// function bring data order to signalOrderIn after doing checkout

export const addOrderToSignalOrderIn = (order: ICart) => {
  const current = signalOrderIn.value;
  const newOrderIn: IOrderIn = {
    no: current.length + 1,
    items: order.items.map((item) => ({
      no: item.id,
      name: item.name,
      qty: item.qty,
    })),
    status: "new",
  };
  signalOrderIn.value = [...signalOrderIn.value, newOrderIn];
  cartItems.value = [];
  console.log(signalOrderIn.value);
};
