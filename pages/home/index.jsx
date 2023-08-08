import React from "react";
import About from "../../components/ui/About";
import Campaigns from "../../components/ui/Campaigns";
import Carousel from "../../components/ui/Carousel";
import Customers from "../../components/customers/Customers";
import MenuWrapper from "../../components/product/MenuWrapper";
import Reservation from "../../components/ui/Reservation";

const Index = ({ categoryList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
