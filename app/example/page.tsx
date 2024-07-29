import Link from "next/link";
import "@/app/styles/style.css"

export default function Example(){
  return (
    <div className="p-8 bg-gray-800 min-h-screen flex flex-col items-center justify-center">
      <section className="link flex flex-row bg-teal-700  text-white w-fit h-fit p-2 rounded-md">
        <Link href="/">Return back to home page</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </section>
      {/* Container */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-100 mb-4 text-center">Tailwind CSS Utilities</h1>

        {/* Subtitle */}
        <h2 className="text-xl font-semibold text-gray-100 mb-4 text-center">Most Needed Utilities</h2>

        {/* Text */}
        <p className="text-gray-100 text-base leading-relaxed">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, sequi. Dicta maxime animi eligendi mollitia consequatur corporis debitis esse repudiandae aliquam molestiae fugiat, cumque corrupti deserunt eum cupiditate unde odio.        </p>

        {/* Buttons */}
        <div className="flex space-x-4 justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
            Primary Button
          </button>
          <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition duration-300 ease-in-out">
            Secondary Button
          </button>
        </div>
        {/* Cards */}
        <div className="space-y-4">
          <div className="bg-gray-500 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Card Title</h3>
            <p className="text-gray-800 text-sm">This is a simple card component demonstrating padding, shadows, and text styling.</p>
          </div>
          <div className="bg-gray-500 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Another Card</h3>
            <p className="text-gray-800 text-sm">This is another card with some padding and shadow for better visual distinction.</p>
          </div>
        </div>

        {/* Flexbox Layout */}
        <div className="flex space-x-4 justify-center mt-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md flex-1 text-center">
            <h4 className="text-lg font-medium text-blue-800">Flex Item 1</h4>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md flex-1 text-center">
            <h4 className="text-lg font-medium text-green-800">Flex Item 2</h4>
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow-md flex-1 text-center">
            <h4 className="text-lg font-medium text-red-800">Flex Item 3</h4>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-purple-100 p-4 rounded-lg shadow-md text-center">
            <p className="text-purple-800 font-semibold">Grid Item 1</p>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg shadow-md text-center">
            <p className="text-purple-800 font-semibold">Grid Item 2</p>
          </div>
          <div className="bg-purple-300 p-4 rounded-lg shadow-md text-center">
            <p className="text-purple-800 font-semibold">Grid Item 3</p>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg shadow-md text-center">
            <p className="text-purple-800 font-semibold">Grid Item 4</p>
          </div>
          <div className="bg-purple-500 p-4 rounded-lg shadow-md text-center">
            <p className="text-purple-800 font-semibold">Grid Item 5</p>
          </div>
          <div className="bg-purple-600 p-4 rounded-lg shadow-md text-center">
            <p className="text-purple-800 font-semibold">Grid Item 6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

