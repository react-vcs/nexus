import FrontendLayout from "@/components/layout/frontend";
import BlogSectionWithImage from "@/components/blog/withImage";
import { GetData } from "@/utility/fetch";

const CategoryPage = async (props) => {
  let searchP = await props?.searchParams;
  let id = searchP["id"];
  let name = searchP["name"];
  let data = await GetData(
    `${process.env.NEXT_PUBLIC_API_URL}news/posts/by/category?id=${id}`
  );
  return (
    <>
      <FrontendLayout>
        <BlogSectionWithImage
          heading={`News Category : ${name}`}
          subHeading="Concise Titles, Offering Quick Grasp of Timely News Events"
          data={data?.data}
        />
      </FrontendLayout>
    </>
  );
};
export default CategoryPage;
