export const updateCart = (productIds, carts, products) => {
    /*  
      expected cart response => carts = [ {id:123, title: '', price: 123, quantity: 2 } ]

      cart api response =>   productIds = [ {productId: '123', quantity: 2} ]
      product api response => products =  [ {id:123, title: '', price: 123 }]

      we have to combine product api response & cart api response to create proper cart 
      response for matching productIds.
      */
    const cartData = [];
    productIds &&
        productIds.forEach((cartObj) => {
            let product = products.find(
                (product) => product.id === cartObj.productId
            );
            if (product !== undefined) {
                product = {...product };
                product["quantity"] = cartObj.quantity;
                cartData.push(product);
            }
        });

    // check if product is already in cart then update quantity
    const res = cartData.map((product) => {
        const found = carts.find((id) => product.id === id);
        if (!!found) product.count = found.count;
        return product;
    });

    console.log("updated cart result", res);
    return res;
};