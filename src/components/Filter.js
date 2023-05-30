import React from "react";
import {
  GiPeaks,
} from "react-icons/gi";
import Sorting from "./Sorting";
import Data from '../listings.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Filter = () => {
  const categoryData = Data.categories;
  let sort_options = [];

  categoryData.map((item, index) => {
    return sort_options.push(<Sorting key={index} title={item.title} icon={<GiPeaks size={30} />} />)
  });
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 13,
      partialVisibilityGutter: 30
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 10,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 800, min: 600 },
      items: 8,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 6,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }
  return (
    <div className="mt-2">
      <Carousel responsive={responsive} partialVisible={true} draggable={true}>
        {sort_options}
      </Carousel>
    </div>
  );
};

export default Filter;
