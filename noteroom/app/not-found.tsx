import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50">
      <div className="container-custom py-20 text-center">
        <h1 className="mb-4 text-9xl font-bold text-gray-200">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-gray-600">
          Seems like the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
