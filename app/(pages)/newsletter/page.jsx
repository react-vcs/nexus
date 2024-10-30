const NewsLetter = async (props) => {
  let searchP = await props?.searchParams;
  let email = await searchP["email"];

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
  if (ResJson == "Created") {
    console.log("Success");
  }
};
export default NewsLetter;
