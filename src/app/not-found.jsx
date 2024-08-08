import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>This page doesn't exist</p>
      <Link href={"/"}>Return to Home</Link>
    </div>
  );
};

export default NotFound;
