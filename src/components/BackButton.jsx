import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="../" className="btn btn-reverse btn-back">
      <FaArrowCircleLeft /> Back
    </Link>
  );
};

export default BackButton;
