import Image from "next/image";
import { Carousel } from "./components/Carousel";
import twoConstructor from "@/app/assets/twoConstructor.png";
import Navbar from "./components/Navbar"; // Import Navbar component
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section>
          <Carousel />
        </section>
        <section className="bg-gray-800 p-8 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#ede8d0]">25+</h2>
            <p className="text-white">Years of Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#ede8d0]">378+</h2>
            <p className="text-white">Project Complete</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#ede8d0]">69+</h2>
            <p className="text-white">Winning Global Award</p>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-900 p-8 flex flex-wrap items-center">
          <div className="w-full sm:w-1/3 relative mb-4 sm:mb-0">
            <Image
              src={twoConstructor}
              alt="Two construction workers discussing a project"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="w-full sm:w-2/3 sm:pl-8 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#ede8d0]">
              25 years <br /> of experience!
            </h2>
            <p className="mt-4">
              We have a team of experienced professionals who have been in the
              industry for over 25 years. Our contractors have a wealth of
              knowledge and skills that they have acquired over the years,
              making them experts in their field.
            </p>
            <p className="mt-4">
              With 25 years of experience, our contractors have a deep
              understanding of industry standards and regulations. We ensure
              that all our projects comply with the latest safety and building
              codes, and that the final product meets or exceeds our
              client&apos;s expectations.
            </p>
            <div className="mt-6">
              <p className="font-bold">Yuvraj shrimali - Founder</p>
            </div>
          </div>
        </section>
        <Gallery />
      </main>
    </div>
  );
};

export default App;
