import React from "react";
import ItemCard from "./ItemCard";
import Data from '../listings.json';

const ItemCards = () => {
  let listings = [];
  let uniqueArr = Data.data.filter((obj, index, self) =>
    index === self.findIndex((t) => (
      t.info.title === obj.info.title
    ))
  );
  uniqueArr.map((item, index) => {
    return listings.push({
      id: item.info.id,
      title: item.info.title,
      location: item.info.location,
      price: item.info.price,
      available: item.info.available,
      type: item.info.type,
      image: item.info.mainImage.url,
      rating: item.info.ratings.accuracy
    })
  })
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {listings.map(item => (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            available={item.available}
            city={item.location.city}
            country={item.location.country.title}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemCards;
