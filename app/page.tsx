import Image from "next/image";
import { Carousel } from "./components/Carousel";
import twoConstructor from "@/app/assets/twoConstructor.png";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section>
          <Carousel />
        </section>
        <section className="bg-gray-800 p-8 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#ede8d0]">2+</h2>
            <p className="text-white text-xl">Years of Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#ede8d0]">10+</h2>
            <p className="text-white text-xl">Projects Completed</p>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-[#ede8d0]">
              2+ years <br /> of experience!
            </h2>
            <p className="mt-4 text-xl">
              We have a team of experienced professionals who have been in the
              industry for over 2 years. Our contractors have a wealth of
              knowledge and skills that they have acquired over the years,
              making them experts in their field.
            </p>
            <p className="mt-4 text-xl">
              With 2 years of experience, our contractors have a deep
              understanding of industry standards and regulations. We ensure
              that all our projects comply with the latest safety and building
              codes, and that the final product meets or exceeds our
              client&apos;s expectations.
            </p>
            <div className="mt-6 text-2xl font-extrabold">
              <p className="font-bold">Yuvraj Shrimali - Founder</p>
            </div>
          </div>
        </section>
        <Gallery />
      </main>
      <footer className="bg-gray-800 text-white p-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center mb-4 md:mb-0 md:mr-6">
              <svg
                className="w-6 h-6 mr-2 text-[#ede8d0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h2l.4 2M7 5h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"
                ></path>
              </svg>
              <a href="tel:+919462931522" className="hover:underline">
                +91 94629 31522
              </a>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#ede8d0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H8m0 0l4-4m-4 4l4 4m10 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <a
                href="yuvrajshrimali6939@gmail.com"
                className="hover:underline"
              >
                yuvrajshrimali6939@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
