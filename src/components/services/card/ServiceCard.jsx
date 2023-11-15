import React, { useState } from "react";
import Container from "../../shared/Container";
import Card from "./Card";
import Loader from "../../shared/Loader";

const ServiceCard = () => {
  const [services, setServices] = useState([
    {
      _id: 1,
      img: "https://github.com/abirhasan33/jerin-parlour-client/blob/main/src/Assests/Images/Icon/img-1.png?raw=true",
      name: "Anti Age Face Treatment",
      price: 199,
      description:
        "We craft stunning and amazing web UI, using a well drafted UX to fit your product",
    },
    {
      _id: 2,
      img: "https://github.com/abirhasan33/jerin-parlour-client/blob/main/src/Assests/Images/Icon/img-2.png?raw=true",
      name: "Hair Color & Styling",
      price: 99,
      description:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    },
    {
      _id: 3,
      img: "https://github.com/abirhasan33/jerin-parlour-client/blob/main/src/Assests/Images/Icon/img-3.png?raw=true",
      name: "Skin Care Treatment",
      price: 299,
      description:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    },
    {
      _id: 4,
      img: "https://github.com/abirhasan33/jerin-parlour-client/blob/main/src/Assests/Images/Icon/img-2.png?raw=true",
      name: "Hair Color & Styling",
      price: 423,
      description:
        "We craft stunning and amazing web UI, using a well drafted UX to fit your product",
    },
    {
      _id: 5,
      img: "https://github.com/abirhasan33/jerin-parlour-client/blob/main/src/Assests/Images/Icon/img-3.png?raw=true",
      name: "Anti Age Face Treatment",
      price: 179,
      description:
        "We craft stunning and amazing web UI, using a well drafted UX to fit your product",
    },
    {
      _id: 6,
      img: "https://github.com/abirhasan33/jerin-parlour-client/blob/main/src/Assests/Images/Icon/img-1.png?raw=true",
      name: "Skin Care Treatment",
      price: 139,
      description:
        "We craft stunning and amazing web UI, using a well drafted UX to fit your product",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const [exploreMore, setExploreMore] = useState(false);
  const handleExploreMore = () => {
    setExploreMore(!exploreMore);
  };

  const filteredServices = services.filter((service, index) => {
    if (exploreMore) {
      return true;
    } else {
      return index < 3;
    }
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {filteredServices.map((service) => (
          <Card key={service._id} service={service} />
        ))}
      </div>
      <button
        className="bg-[#F63E7B] text-white font-medium py-3 px-8 rounded-md mt-10 mx-auto block"
        onClick={handleExploreMore}
      >
        {exploreMore ? "Show Less" : "Explore More"}
      </button>
    </Container>
  );
};

export default ServiceCard;
