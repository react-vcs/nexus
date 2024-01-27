import FrontendLayout from "@/components/layout/frontend";
import BlogSectionWithImage from "@/components/blog/withImage";
import { GetData } from "@/utility/fetch";

const TypePage = async (props) => {
  let type = props?.searchParams["type"];
  let data = await GetData(
    `${process.env.API_URL}news/posts/by/type?type=${type}`
  );
  return (
    <>
      <FrontendLayout>
        <BlogSectionWithImage
          heading={`News Type : ${type}`}
          subHeading="Brief and Impactful News Commentary for Swift Understanding"
          data={data?.data}
        />
      </FrontendLayout>
    </>
  );
};
export default TypePage;
