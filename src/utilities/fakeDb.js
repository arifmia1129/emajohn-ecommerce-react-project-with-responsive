const getStoredCart = () => {
    let shoppingCart;

    const stored = localStorage.getItem("shopping-cart");

    if (stored) {
        shoppingCart = JSON.parse(stored);
    }

    return shoppingCart;
}

// add to local storage
const addDb = (id) => {
    let shoppingCart;

    const stored = localStorage.getItem("shopping-cart");

    if (stored) {
        shoppingCart = JSON.parse(stored);
    }
    else {
        shoppingCart = {};
    }


    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}


//delete db
const deleteDb = (id) => {
    let shoppingCart;

    const stored = localStorage.getItem("shopping-cart");

    if (stored) {
        shoppingCart = JSON.parse(stored);

        if (id in shoppingCart) {
            delete shoppingCart[id];
        }
    }
}


// remove db

const removeDb = () => {
    localStorage.removeItem("shopping-cart");
}

export { addDb, deleteDb, removeDb, getStoredCart };