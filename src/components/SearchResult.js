import { React } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../listings.json';
import ItemCard from './ItemCard';
import Filter from './Filter';
import SimpleMap from './SimpleMap';

function SearchResult() {
    const { converted_location, startDate, guestes } = useParams();
    const location = converted_location.replace(/_/g, " ");
    let selected = [];
    let google_location;
    Data.data.map(item => {
        if (item.info.location.city === location) {
            selected.push(item.info);
            google_location = {
                lat: item.info.location.lat,
                lng: item.info.location.long
            }
        }
    })
    console.log(Data.data[0].info.details.data[0].value)
    let listings = [];
    selected.map((item, index) => {
        return listings.push({
            id: item.id,
            title: item.title,
            location: item.location,
            price: item.price,
            available: item.available,
            type: item.type,
            image: item.mainImage.url,
            rating: item.ratings.accuracy
        })
    })
    return (
        <div className='relative'>
            <div className="fixed z-10 bg-white pb-2">
                <Filter />
            </div>
            <div className="py-3 sm:py-5">
                <div className='flex flex-row mt-6'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3/5 p-4">
                        {listings.map((item, index) => (
                            <ItemCard
                                key={index}
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
                    <div className='w-2/5 relative'>
                        <div className='w-full h-auto p-4 border rounded-lg fixed'>
                            <SimpleMap location={google_location} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchResult;