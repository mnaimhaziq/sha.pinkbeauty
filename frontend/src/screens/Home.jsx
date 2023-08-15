import React from "react";
import nisaPicture from "../assets/nisaPicture.jpeg";

const Home = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="flex h-full">
        <div className="w-full flex flex-col justify-center items-center">
          <div>
            <div className="flex justify-center">
              <img
                className="w-[250px] h-[250px] md:w-[375px] md:h-[375px] rounded-[267px] object-cover"
                src={nisaPicture}
                alt="Nisa"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold px-10 py-2 text-center md:text-left">
              Mary Kay Beauty Advisor{" "}
            </h1>
            <h3 className="text-lg md:text-xl px-10 py-2 text-center">
              Discover a world of elegance and rejuvenation. <br /> Indulge in
              our exquisite beauty services.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
