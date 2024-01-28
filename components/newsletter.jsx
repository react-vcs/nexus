"use client";
import Link from "next/link";
import toast from "react-hot-toast";
const submitForm = async (event) => {
  event.preventDefault();
  const email = event.target.elements["email"].value;
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }), // Ensure the email is part of an object
  };
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}subscribers`,
    options
  );
  let ResJson = await res.json();
  if (ResJson.status == "Created") {
    toast.success("Subscription Success");
    event.target.reset();
  } else {
    toast.error("Subscription Error");
  }
};
const Newsletter = () => {
  return (
    <>
      <form action="#" onSubmit={(e) => submitForm(e)}>
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="hidden mb-2 text-sm font-medium text-gray-900 "
            >
              Email address
            </label>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 outline-none"
              placeholder="Enter your email"
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer ">
          We care about the protection of your data.{" "}
          <Link
            href={`privacy?id=62`}
            className="font-medium text-primary-600  hover:underline"
          >
            Read our Privacy Policy
          </Link>
          .
        </div>
      </form>
    </>
  );
};

export default Newsletter;
