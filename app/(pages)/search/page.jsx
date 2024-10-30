import FrontendLayout from "@/components/layout/frontend";
import BlogSectionWithImage from "@/components/blog/withImage";
import { GetData } from "@/utility/fetch";

const SearchPage = async (props) => {
  let searchP = await props?.searchParams;
  let keyword = await searchP["keyword"];
  let data = await GetData(
    `${process.env.NEXT_PUBLIC_API_URL}news/posts/by/search?keyword=${keyword}`
  );
  return (
    <>
      <FrontendLayout>
        <BlogSectionWithImage
          heading={`Searching For : ${keyword}`}
          subHeading="Pithy Subtitles, Distilling News Essence for Swift Consumption"
          data={data?.data}
        />
      </FrontendLayout>
    </>
  );
};
export default SearchPage;
