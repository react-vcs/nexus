import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCardStyle1 = () => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <Link href="/date">
          <time dateTime="2020-03-16" className="text-gray-500">
            Mar 16, 2020
          </time>
        </Link>
        <Link
          href="/category"
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          Marketing
        </Link>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href="/details">
            <span className="absolute inset-0"></span>
            Boost your conversion rate
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
          vitae illo. Non aliquid explicabo necessitatibus unde. Sed
          exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti
          dicta.
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
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
      </div>
    </article>
  );
};

export default BlogCardStyle1;
