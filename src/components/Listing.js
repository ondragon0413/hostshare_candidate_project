import { React } from "react";
import { useParams } from 'react-router-dom';
import Data from '../listings.json';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { BsStarFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { RxShare2 } from "react-icons/rx";
import { AiOutlineContainer } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
// import ImgsViewer from 'react-images-viewer';


function Listing() {
  const { id } = useParams();
  console.log(id)
  let selected;
  Data.data.map((item, index) => {
    if (item.info.id === id) {
      return selected = item.info;
    }
  })

  let imageOptions = [];
  selected.images.data.map((item, index) => {
    return imageOptions.push({
      src: item.url,
      width: item.width,
      height: item.height,
      orientation: item.orientation
    })
  })
  // console.log(selected);
  let filtered = imageOptions.filter(index => index.orientation === 'landscape');
  return (
    <div className="w-2/3 mx-auto mt-10 mb-10 pb-8 space-y-4">

      <h1 className="font-bold text-2xl">{selected.title}</h1>
      <div className="flex flex-row items-center justify-between">
        <div className="flex">
          <h1><BsStarFill /></h1>
          <h1>{selected.ratings.value}</h1><span className="inline-block align-top">&nbsp;&nbsp;@ </span>
          <h1>{selected.visibleReviewCount} Reviews&nbsp;&nbsp;</h1>
          <h1>{typeof selected.host.isSuperhost !== 'undefined' && selected.host.isSuperhost ? <span className="flex items-center"><FaRegHeart />Superhost</span> : ' '}</h1>&nbsp;&nbsp;
          <span className="underline">{selected.location.city + ', ' + selected.location.country.title}</span>
        </div>

        <div className="underline flex items-center "><RxShare2 />Share <FaRegHeart />Save</div>
      </div>
      {/* <ImgsViewer
          imgs={[
            { src: filtered[0].src },
            { src: filtered[1].src }
          ]}
          isOpen={isOpen}
          onClickPrev={gotoPrevImg}
          onClickNext={gotoNextImg}
          onClose={closeImgsViewer}
        /> */}
      <div className="grid grid-cols-2 h-3/6">
        <div className="mr-2">
          <Gallery>
            <Item
              original={filtered[0].src}
              thumbnail={filtered[0].src}
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <img ref={ref} onClick={open} src={filtered[0].src} alt="house_photo" className="object-cover h-full w-full rounded-l-lg" />
              )}
            </Item>
          </Gallery>
          {/* <img src={filtered[0].src} className="object-cover h-full w-full rounded-l-lg" /> */}
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 mb-2 h-3/6">
            <Gallery>
              <Item
                original={filtered[1].src}
                thumbnail={filtered[1].src}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} alt="house_photo" src={filtered[1].src} className="object-cover w-full h-full" />
                )}
              </Item>
            </Gallery>
            <Gallery>
              <Item
                original={filtered[2].src}
                thumbnail={filtered[2].src}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} alt="house_photo" src={filtered[2].src} className="object-cover w-full h-full ml-2 rounded-tr-lg" />
                )}
              </Item>
            </Gallery>
          </div>
          <div className="grid grid-cols-2 h-3/6">
            <Gallery>
              <Item
                original={filtered[3].src}
                thumbnail={filtered[3].src}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} alt="house_photo" src={filtered[3].src} className="object-cover w-full h-full" />
                )}
              </Item>
            </Gallery>
            <Gallery>
              <Item
                original={filtered[4].src}
                thumbnail={filtered[4].src}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} alt="house_photo" src={filtered[4].src} className="object-cover w-full h-full ml-2 rounded-br-lg" />
                )}
              </Item>
            </Gallery>
          </div>
        </div>

      </div>
      <div className="flex justify-between mt-20 w-full">
        <div className="w-3/5 border-b">
          <div className="flex justify-between border-b pb-6">
            <div className="text-xl">
              <h1>{selected.title.split(" ")[0] + ' ' + selected.title.split(" ")[1] + " hosted by" + selected.host.name}</h1>
              <span>{selected.details.data.map(item => { return item.value + ' ' + item.type + ', ' })}</span>
            </div>
            <div className="">
              <img src={selected.host.avatar.url} alt="house_photo" className="rounded-full h-12 w-12" />
            </div>
          </div>
          <div className="border-b mt-10 pb-8">
            <div className="flex flex-col text-xl"><h1 className="flex items-center"><AiOutlineContainer />Self check-in Check</h1><span>&nbsp;yourself in with the keyboard</span></div>
            <div className="flex items-center text-xl"><h1 className="items-center"><AiOutlineCalendar /></h1>Free cancellation for 48 hours.</div>
          </div>
          <div className="border-b pb-6 mt-8">
            {selected.description}
          </div>
        </div>
        <div className="w-2/5 ml-32 ">
          <div className="float-right shadow-xl border w-3/4 rounded-2xl  ml-8 mt-8 mr-8 h-auto pr-8 pl-8 pt-8 pb-8">
            <div><span>47,707₽</span> night</div>
            <div className="flex flex-col border rounded-lg">
              <div className="flex ">
                <input className="border-b border-r rounded-bl-lg h-14 w-full" />
                <input className="border-b rounded-br-lg h-14 w-full" />
              </div>
              <input className="h-14 w-full" />
            </div>
            <button type="button" className="text-white bg-[#329a9a] w-full mt-8 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reverse</button>
            <div className="text-center mt-4 mb-8">You won't be charged yet.</div>
            <div className="flex justify-between mb-4"><span className="underline">47,707₽ x 7 nights</span><span>333,946₽</span></div>
            <div className="flex justify-between mb-4"><span className="underline">Cleaning fee</span><span></span>12,027₽</div>
            <div className="flex justify-between mb-4 pb-4 border-b"><span className="underline">Airbnb service fee</span><span></span>58,612₽</div>
            <div className="flex justify-between"><span className="underline">Total before taxes</span><span></span>404,585₽</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Listing;