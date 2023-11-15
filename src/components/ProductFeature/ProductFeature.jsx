import React, { useState } from "react";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";
import Container from "../shared/Container";

const ProductFeature = () => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      name: "Mascara",
      imageUrl:
        "https://images.unsplash.com/photo-1538022890810-8f4000ca9a10?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fEJlYXV0eSUyMFByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      price: 10,
      description:
        "Mascara is a cosmetic commonly used to enhance the eyelashes. It may darken, thicken, lengthen, and/or define the eyelashes. Normally in one of three and preservatives.",
    },
    {
      _id: "2",
      name: "Lipstick",
      imageUrl:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxCZWF1dHklMjBQcm9kdWN0fGVufDB8fDB8fHww",
      price: 15,
      description:
        "Lipstick is a cosmetic that applies color, texture, and protection to the lips. Many colors and types of lipstick exist. Some lipsticks are also lip balms, to add color and hydration.",
    },
    {
      _id: "3",
      name: "Eyeliner",
      imageUrl:
        "https://images.unsplash.com/photo-1512207846876-bb54ef5056fe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fEJlYXV0eSUyMFByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      price: 20,
      description:
        "Eyeliner is a cosmetic used to define the eyes. It is applied around the contours of the eye(s) to create a variety of aesthetic effects.",
    },
    {
      _id: "4",
      name: "Foundation",
      imageUrl:
        "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxCZWF1dHklMjBQcm9kdWN0fGVufDB8fDB8fHww",
      price: 25,
      description:
        "Foundation is a liquid or powder makeup applied to the face to create an even, uniform color to the complexion, cover flaws and, sometimes, to change the natural skin tone.",
    },
    {
      _id: "5",
      name: "Blush",
      imageUrl:
        "https://images.unsplash.com/photo-1566534268110-74c44e12e34d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fEJlYXV0eSUyMFByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      price: 30,
      description:
        "Eyeliner is a cosmetic used to define the eyes. It is applied around the contours of the eye(s) to create a variety of aesthetic effects.",
    },
    {
      _id: "6",
      name: "Eyeshadow",
      imageUrl:
        "https://images.unsplash.com/photo-1530863138121-03aea5f46fd4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxCZWF1dHklMjBQcm9kdWN0fGVufDB8fDB8fHww",
      price: 35,
      description:
        "Eyeshadow is a cosmetic that is applied on the eyelids and under the eyebrows. It is commonly used to make the wearer's eyes stand out or look more attractive.",
    },
    {
      _id: "7",
      name: "Nail Polish",
      imageUrl:
        "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxCZWF1dHklMjBQcm9kdWN0fGVufDB8fDB8fHww",
      price: 40,
      description:
        "Nail polish (also known as nail varnish or nail enamel) is a lacquer that can be applied to the human fingernail or toenails to decorate and protect the nail plates.",
    },
    {
      _id: "8",
      name: "Lip Gloss",
      imageUrl:
        "https://images.unsplash.com/photo-1512207855369-643452a63d46?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fEJlYXV0eSUyMFByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      price: 45,
      description:
        "Lip gloss is a product used primarily to give lips a glossy lustre and sometimes subtle color. It is distributed as a liquid or a soft solid or lipstick, gives off a more pigmented color.",
    },
  ]);
  // handleExploreMore function
  const [showAllProducts, setShowAllProducts] = useState(true);
  const handleExploreMore = () => {
    setShowAllProducts(!showAllProducts);
  };
  const displayedProducts = showAllProducts ? products : products.slice(0, 4);
  return (
    <Container>
      <section className="my-20 items-center justify-center flex">
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {displayedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <button
            className="bg-[#F63E7B] text-white font-medium py-3 px-8 rounded-md mt-10 mx-auto block"
            onClick={handleExploreMore}
          >
            {showAllProducts ? "Show Less" : "Explore More"}
          </button>
        </div>
      </section>
    </Container>
  );
};

export default ProductFeature;
