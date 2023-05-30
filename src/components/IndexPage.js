import React from "react";
import { FaHotjar } from "react-icons/fa";

import Sorting from "./Sorting";
import Data from '../listings.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItemCards from "./ItemCards";

const IndexPage = () => {
  const categoryData = Data.categories;
  let sort_options = [];

  categoryData.map((item, index) => {
    return sort_options.push(<Sorting key={index} title={item.title} icon={<FaHotjar size={30} />} />)
  });
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 11,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }
  return (
    <div className="">
      <div className="mt-2">
        <Carousel responsive={responsive} partialVisible={true} draggable={true}>
          {sort_options}
        </Carousel>
      </div>
      {/* <Filter/> */}
      <ItemCards />
    </div>
  )
};

export default IndexPage;