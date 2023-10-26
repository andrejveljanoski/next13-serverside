import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center screen flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-3xl">There was a problem.</h2>
        <p>We could not find the page you were looking for.</p>
        <p className="text-decoration-line: underline;">
          Go back to the{" "}
          <Link className="font-bold italic" href="/">
            homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
