import HeroAndSlider from "@/components/HeroAndSlider";
import BlogSectionWithImage from "@/components/blog/withImage";
import BlogSectionWithoutImage from "@/components/blog/withoutImage";
import FrontendLayout from "@/components/layout/frontend";
import { GetData } from "@/utility/fetch";

const Home = async () => {
  let Slider = await GetData(
    `${process.env.API_URL}news/posts/by/type?type=Slider`
  );
  let Latest = await GetData(`${process.env.API_URL}news/posts`);
  let Popular = await GetData(
    `${process.env.API_URL}news/posts/by/type?type=Feature`
  );
  let data = { slider: Slider, latest: Latest, popular: Popular };
  return (
    <>
      <FrontendLayout>
        <HeroAndSlider data={data?.slider?.data} />
        <BlogSectionWithoutImage
          data={data?.latest?.data}
          heading="Breaking Headlines"
          subHeading="Concise Subtitles Reflecting News Highlights"
        />
        <BlogSectionWithImage
          data={data?.popular?.data}
          heading="Trending Headlines"
          subHeading="Captivating Subtitles Echoing News Significance"
        />
      </FrontendLayout>
    </>
  );
};
export default Home;
