import Link from "next/link";
import moment from "moment";
const BlogSectionWithoutImage = ({ ...props }) => {
  let data = props?.data;
  return (
    <div className="bg-white py-8 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props?.heading}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {props?.subHeading}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((item, index) => {
            return (
              <article
                className="flex max-w-xl flex-col items-start justify-between"
                key={index}
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    {moment(item?.updated).format("dddd, MMMM D, YYYY")}
                  </time>

                  <Link
                    href={`/type?type=${item?.type}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {item?.type}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/details?id=${item?.id}&cat=${item?.catID}`}>
                      <span className="absolute inset-0"></span>
                      {item?.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {item?.short_des}
                  </p>
                </div>
                {/* <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src="/img/profile.avif"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                    width={100}
                    height={100}
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href="/user">
                        <span className="absolute inset-0"></span>
                        Michael Foster
                      </Link>
                    </p>
                    <p className="text-gray-600">Co-Founder / CTO</p>
                  </div>
                </div> */}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSectionWithoutImage;
