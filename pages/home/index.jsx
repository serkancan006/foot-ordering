import React from "react";
import Carousel from "../../components/ui/Carousel";
import Campaigns from "../../components/ui/Campaigns";
import MenuWrapper from "../../components/product/MenuWrapper";
import About from "../../components/ui/About";
import Customers from "../../components/customers/Customers";
import Reservation from "@/components/ui/Reservation";

const Index = () => {
  return (
    <div>
      <React.Fragment>
        <Carousel />
        <Campaigns />
        <MenuWrapper />
        <About />
        <Customers />
        <Reservation />
      </React.Fragment>
    </div>
  );
};

export default Index;
