import Image from "next/image";
import Link from "next/link";

const BlogSectionWithImage = ({ ...props }) => {
  let data = props?.data;

  // Function to calculate reading time based on word count
  const calculateReadingTime = (text, wordsPerMinute = 20) => {
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 ">
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-2xl lg:mx-0 pb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props?.heading}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {props?.subHeading}
          </p>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 ">
          {data?.map((item, i) => {
            const readingTime = calculateReadingTime(item?.long_des);
            return (
              <article className="max-w-xs" key={i}>
                <Image
                  src={item?.img1}
                  className="mb-5 rounded-lg"
                  alt="Blog Image"
                  width={1000}
                  height={1000}
                />

                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  {item?.title}
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  {item?.short_des}
                </p>
                <Link
                  href={`/details?id=${item?.id}&cat=${item?.catID}`}
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in {readingTime} minute{readingTime !== 1 ? "s" : ""}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default BlogSectionWithImage;
