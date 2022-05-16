export const getFetch = (id) => {

    const products = fetch("./assets/data/data.json").then((resp) => resp.json());
    console.log(products);
  
    return new Promise((resolve) => {
      setTimeout(() => {
        const query = id
          ? products.find((product) => product.id === id)
          : products;
        resolve(query);
      }, 2000);
    });
  };
  