import Image from "next/image";
import Link from "next/link";

const BlogCardStyle2 = () => {
  return (
    <article className="max-w-xs">
      <Link href="/details">
        <Image
          src="/img/blog.png"
          className="mb-5 rounded-lg"
          alt="Blog Image"
          width={1000}
          height={1000}
        />
      </Link>
      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        <Link href="/details">Our first office</Link>
      </h2>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        Over the past year, Volosoft has undergone many changes! After months of
        preparation.
      </p>
      <Link
        href="/details"
        className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
      >
        Read in 2 minutes
      </Link>
    </article>
  );
};

export default BlogCardStyle2;
