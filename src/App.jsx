import axios from "axios";
import "./index.css";
export default function App() {
  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-sky-300 
          shadow-md"
          placeholder="Enter Location"
        />
      </div>
    </div>
  );
}
