import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-6 md:px-0">
            <h1 className="text-8xl md:text-9xl font-extrabold text-gray-300">404</h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
                Page Not Found
            </h2>
            <p className="mt-2 text-lg md:text-xl text-gray-500 text-center max-w-md">
                Sorry, the page you&apos;re looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-8 inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    )
}

export default Error
