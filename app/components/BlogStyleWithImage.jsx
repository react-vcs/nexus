import React from "react";
import BlogCardStyle2 from "./BlogCardStyle2";

const BlogStyleWithImage = () => {
  return (
    <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 ">
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-2xl lg:mx-0 pb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest News
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 ">
          {Array.from({ length: 8 }, (_, index) => (
            <BlogCardStyle2 key={index} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogStyleWithImage;
