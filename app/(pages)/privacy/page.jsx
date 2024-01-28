import Image from "next/image";
import BlogSectionWithImage from "@/components/blog/withImage";
import Link from "next/link";
import { GetData } from "@/utility/fetch";
import FrontendLayout from "@/components/layout/frontend";
import parse from "html-react-parser";
const PrivacySingle = async (props) => {
  let id = props?.searchParams["id"];
  let data = await GetData(`${process.env.API_URL}policies/details?id=${id}`);
  return (
    <>
      <FrontendLayout>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
          <div className="px-4 mx-auto max-w-screen-xl">
            <article className="mx-auto w-full  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  {data?.data?.type}
                </h1>
              </header>
              <div className="pt-10">{parse(data?.data?.long_des)}</div>
            </article>
          </div>
        </main>
      </FrontendLayout>
    </>
  );
};

export default PrivacySingle;
