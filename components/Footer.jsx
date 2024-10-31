import Image from "next/image";
import Link from "next/link";
import Newsletter from "./newsletter";

const Footer = ({ data = {} }) => {
  const {
    categories: { data: categoriesData = [] } = {},
    policies: { data: legals = [] } = {},
    socials: { data: socials = [] } = {},
  } = data;

  let PopularPicks = categoriesData.slice(6, 10);
  let ExclusiveDeals = categoriesData.slice(11, 15);
  let NewArrivals = categoriesData.slice(16, 20);
  let SeasonalSpecials = categoriesData.slice(21, 25);

  return (
    <footer className="bg-black py-8 lg:pt-16 lg:pb-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Subscribe Our Newsletter for Updates
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-500 md:mb-12 sm:text-xl">
            Delve Deeper into Current Affairs with Our Informative Newsletter
            Bringing You Comprehensive Insights and Breaking News Highlights
          </p>
          {/* Newsletter */}
          <Newsletter />
        </div>
      </div>

      <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Popular Picks
            </h2>
            <ul className="text-gray-500 ">
              {PopularPicks.map((menu, index) => (
                <li className="mb-4" key={index}>
                  <Link
                    href={`category?id=${menu?.id}&name=${menu?.name}`}
                    className={` hover:underline`}
                  >
                    {menu?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Exclusive Deals
            </h2>
            <ul className="text-gray-500 ">
              {ExclusiveDeals.map((menu, index) => (
                <li className="mb-4" key={index}>
                  <Link
                    href={`category?id=${menu?.id}&name=${menu?.name}`}
                    className=" hover:underline"
                  >
                    {menu?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              New Arrivals
            </h2>
            <ul className="text-gray-500 ">
              {NewArrivals.map((menu, index) => (
                <li className="mb-4" key={index}>
                  <Link
                    href={`category?id=${menu?.id}&name=${menu?.name}`}
                    className=" hover:underline"
                  >
                    {menu?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Seasonal Specials
            </h2>
            <ul className="text-gray-500 ">
              {SeasonalSpecials.map((menu, index) => (
                <li className="mb-4" key={index}>
                  <Link
                    href={`category?id=${menu?.id}&name=${menu?.name}`}
                    className=" hover:underline"
                  >
                    {menu?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              LEGALS
            </h2>
            <ul className="text-gray-500 ">
              {legals.map((item, index) => (
                <li className="mb-4" key={index}>
                  <Link
                    href={`privacy?id=${item?.id}`}
                    className="hover:underline"
                  >
                    {item?.type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <div className="text-center">
          <Link
            href="/"
            className="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 "
          >
            <Image
              src="img/logo.svg"
              alt="nexus logo"
              width={150}
              height={150}
            />
          </Link>
          <span className="block text-sm text-center text-gray-500 ">
            © 2021- {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              nexus™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {socials.length > 0 && (
              <>
                {socials.map((social, index) => (
                  <li key={index}>
                    <Link href={social} className="text-gray-500 ">
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 8 19"
                      >
                        {/* Your SVG path here for each social */}
                      </svg>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
