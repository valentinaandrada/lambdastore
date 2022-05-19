const products = [
  {
    id: "CT01",
    category: "coats",
    name: "Beige blazer",
    price: 15.75,
    img: "../assets/img/CT01-coat-blazer-01.jpg",
    img2: "../assets/img/CT01-coat-blazer-02.jpg",
    stock: 5,
  },
  {
    id: "DR01",
    category: "dresses",
    name: "Black dress",
    price: 15.75,
    img: "../assets/img/DR01-dress-black-01.jpg",
    img2: "../assets/img/DR01-dress-black-02.jpg",
    stock: 5,
  },
  {
    id: "DR02",
    category: "dresses",
    name: "Rose dress",
    price: 15.75,
    img: "../assets/img/DR03-dress-rose-01.jpg",
    img2: "../assets/img/DR03-dress-rose-02.jpg",
    stock: 5,
  },
  {
    id: "JS01",
    category: "denim",
    name: "B&W jeans",
    price: 15.75,
    img: "../assets/img/JS02-jeans-bw-01.jpg",
    img2: "../assets/img/JS02-jeans-bw-02.jpg",
    stock: 5,
  },
  {
    id: "JS02",
    category: "denim",
    name: "Short black",
    price: 15.75,
    img: "../assets/img/JS03-short-black-01.jpg",
    img2: "../assets/img/JS03-short-black-02.jpg",
    stock: 5,
  },
  {
    id: "JW01",
    category: "earrings",
    name: "Earrings",
    price: 15.75,
    img: "../assets/img/JW01-jewerly-earrings-01.jpg",
    img2: "../assets/img/JW01-jewerly-earrings-02.jpg",
    stock: 5,
  },
  {
    id: "CT02",
    category: "coats",
    name: "Pink blazer",
    price: 15.75,
    img: "../assets/img/CT02-coat-pink-01.jpg",
    img2: "../assets/img/CT02-coat-pink-02.jpg",
    stock: 5,
  },
  {
    id: "SK01",
    category: "skirts",
    name: "Pink blazer",
    price: 15.75,
    img: "../assets/img/SK01-skirt-green-01.jpg",
    img2: "../assets/img/SK01-skirt-green-02.jpg",
    stock: 5,
  },
  {
    id: "SW01",
    category: "sweaters",
    name: "Beige sweater",
    price: 15.75,
    img: "../assets/img/SW03-sweater-beige-01.jpg",
    img2: "../assets/img/SW03-sweater-beige-02.jpg",
    stock: 5,
  },
  {
    id: "SH01",
    category: "shirts",
    name: "Beige sweater",
    price: 15.75,
    img: "../assets/img/SH01-shirt-animal-01.jpg",
    img2: "../assets/img/SH01-shirt-animal-02.jpg",
    stock: 5,
  },
  {
    id: "JW03",
    category: "necklaces",
    name: "Necklace",
    price: 15.75,
    img: "../assets/img/JW03-jewerly-necklace-01.jpg",
    img2: "../assets/img/JW03-jewerly-necklace-02.jpg",
    stock: 5,
  },
  {
    id: "CT03",
    category: "coats",
    name: "Black Blazer",
    price: 15.75,
    img: "../assets/img/CT03-coat-black-01.jpg",
    img2: "../assets/img/CT03-coat-black-02.jpg",
    stock: 5,
  },
];

export const getFetch = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id
        ? products.find((product) => product.id === id)
        : products;
      resolve(query);
    }, 2000);
  });
};
