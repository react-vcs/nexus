import Image from "next/image";
import BlogSectionWithImage from "@/components/blog/withImage";
import { GetData } from "@/utility/fetch";
import FrontendLayout from "@/components/layout/frontend";
const BlogSinglePage = async (props) => {
  let searchP = await props?.searchParams;
  let id = await searchP["id"];
  let catId = await searchP["cat"];
  let singlePostContent = await GetData(
    `${process.env.NEXT_PUBLIC_API_URL}news/posts/details?id=${id}`
  );
  let catBasedproduct = await GetData(
    `${process.env.NEXT_PUBLIC_API_URL}news/posts/by/category?id=${catId}`
  );

  return (
    <>
      <FrontendLayout>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
          <div className="px-4 mx-auto max-w-screen-xl">
            <article className="mx-auto w-full  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  {singlePostContent?.data?.title}
                </h1>
              </header>

              <figure>
                <Image
                  src={singlePostContent?.data?.img1}
                  alt="Blog"
                  width={1000}
                  height={1000}
                />
              </figure>

              <div className="pt-10">{singlePostContent?.data?.long_des}</div>
            </article>
          </div>
        </main>
        <BlogSectionWithImage
          heading="Semilar News"
          subHeading="Learn how to grow your business with our expert advice."
          data={catBasedproduct?.data}
        />
      </FrontendLayout>
    </>
  );
};

export default BlogSinglePage;
