"use client";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Slider = (props) => {
  return (
    <>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        infinite={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container gap-x-10"
        removeArrowOnDeviceType={[]}
      >
        {props?.data?.map((item, index) => {
          return (
            <div
              className="px-2 pt-16 pb-8 w-full flex justify-center"
              key={index}
            >
              <div className="bg-white lg:mx-3 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div className="lg:w-1/2">
                  <div
                    className="h-80 bg-cover  rounded-b-none border lg:rounded-lg"
                    style={{
                      backgroundImage: `url(${item?.img1})`,
                    }}
                  ></div>
                </div>
                <div className="pt-6 px-2 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                  <h2 className="text-xl text-gray-800 font-bold">
                    {item?.title}
                  </h2>
                  <p className="mt-4 text-gray-600">{item?.short_des}</p>
                  <div className="mt-8">
                    <Link
                      href={`/details?id=${item?.id}&cat=${item?.catID}`}
                      className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
