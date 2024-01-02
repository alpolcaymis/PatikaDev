import { Link } from "react-router-dom";
import fimple from "../assets/jpg/fimple.png";
const Home = () => {
  return (
    <>
      <section className="heading">
        <img src={fimple} alt="" className="mx-auto mb-4 rounded-xl" />
        <h1>Fimple .Net Bootcamp</h1>
        <p className="text-lg">
          Fimple iş birliği ile .Net Bootcamp başlıyor! 🎉 Sen de bu ücretsiz
          programa katılmak ve yazılım kariyerine Fimple ekibinde başlamak
          istiyorsan şimdi başvur, bu fırsatı kaçırma! 🥳
        </p>
      </section>
      <Link
        to="/new-ticket"
        className="btn btn-reverse btn-block hover:bg-[#306fed] hover:text-white"
      >
        Apply Now
      </Link>
    </>
  );
};

export default Home;
