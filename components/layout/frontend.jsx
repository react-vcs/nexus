import { GetData } from "@/utility/fetch";
import Footer from "../Footer";
import Header from "../Header";

const FrontendLayout = async ({ children }) => {
  const categories = await GetData(`${process.env.API_URL}/news/category`);
  const policies = await GetData(`${process.env.API_URL}/policies`);
  const socials = await GetData(`${process.env.API_URL}/socials`);
  const data = { categories: categories, policies: policies, socials: socials };
  return (
    <>
      <Header data={data} />
      {children}
      <Footer data={data} />
    </>
  );
};

export default FrontendLayout;
