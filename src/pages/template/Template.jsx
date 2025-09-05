import Navbar from "../../components/navbar/Navbar";
import Element_1 from "../../assets/element-1.svg";
import Element_2 from "../../assets/element-1-1.svg";
import Element_3 from "../../assets/element-1-2.svg";
import Element_4 from "../../assets/element-1-3.svg";
import Element_5 from "../../assets/element-1-4.svg";
import Element_6 from "../../assets/element-1-5.svg";

const Template = () => {
  return (
    <>
      <Navbar />
      <div
        className="absolute -top-60 left-1/6 max-w-screen-xl container mx-auto overflow-hidden flex justify-center items-center"
        style={{ perspective: "500px" }}
      >
        <div
          className="w-[1440px] h-[1200px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ddd 2px, transparent 2px), linear-gradient(to bottom, #ddd 2px, transparent 2px)",
            backgroundSize: "40px 40px",
            transform: "rotateX(50deg)",
            transformOrigin: "center bottom",
          }}
        />
      </div>
      <section className="relative z-10 max-w-screen-xl container mx-auto py-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
        <section className="flex-1 flex flex-col justify-center items-start gap-6">
          <img src={Element_1} alt="" />
          <img src={Element_2} alt="" />
          <img src={Element_3} alt="" />
        </section>
        <section>
          <h1 className="text-6xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Launching Your Portfolio in Minutes
          </h1>
          <p className="line-clamp-2">
            Pick a template, personalize it, and share your story with the world.
          </p>
        </section>
      </section>
    </>
  );
};

export default Template;
