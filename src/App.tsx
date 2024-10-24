import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import ToolsList from "./Components/ToolsList";

const App = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen bg-gruvbox-bg dark:bg-gruvboxDark-bg dark:text-gruvboxDark-fg">
      <Header />
      <div className="max-w-6xl m-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-10 lg:flex-row items-center py-16 lg:py-28">
          <div className="flex flex-col gap-y-6 mr-auto">
            <div className="text-4xl sm:text-5xl font-bold text-gruvbox-green">
              Hi! I'm Kenneth.
            </div>
            <div className="text-sm sm:text-base">
              A junior studying information systems at BINUS University
            </div>
            <div className="text-sm sm:text-base">
              I am interested in{" "}
              <span className="text-gruvbox-red">
                <TypeAnimation
                  sequence={[
                    "Cloud Computing",
                    1000,
                    "DevOps",
                    1000,
                    "Software Engineering",
                    1000,
                    "Web Security",
                    1000,
                    "Learning",
                    1000,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-lg sm:text-xl pt-6 font-medium text-gruvbox-blue">
                Find me!
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/reeesus"
                  target="_blank"
                  className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm hover:bg-gruvbox-fg hover:text-gruvbox-bg duration-100"
                >
                  <FaGithub /> Github
                </a>
                <a
                  href="https://www.linkedin.com/in/kenneth-jefferson-riady-2273b52b1/"
                  target="_blank"
                  className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm hover:bg-gruvbox-fg hover:text-gruvbox-bg duration-100"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/kennjffr/"
                  target="_blank"
                  className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm hover:bg-gruvbox-fg hover:text-gruvbox-bg duration-100"
                >
                  <FaInstagram /> Instagram
                </a>
                <a
                  href="https://open.spotify.com/user/93f22i6v7gbndoe8a7n809gjb?si=e4381ff1cd1f440f"
                  target="_blank"
                  className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm hover:bg-gruvbox-fg hover:text-gruvbox-bg duration-100"
                >
                  <FaSpotify /> Spotify
                </a>
              </div>
            </div>
          </div>
          <img
            src="/Me.jpeg"
            alt="Me"
            className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:w-1/2 xl:max-w-xl h-auto object-cover rounded-md mt-6 lg:mt-0"
          />
        </div>
        <div className="mt-10">
          <div className="mb-3 text-lg sm:text-xl text-gruvbox-orange font-semibold">
            Tools & tech that I'm familiar with
          </div>
          <div className="text-xs sm:text-sm mb-6">
            Here are the tools that I use or have used before. This list is made
            as a reference to what I am familiar with. I am always aiming to
            improve my skills and to add more tools.
          </div>
          <ToolsList />
        </div>
        <div className="mt-40 mb-80">
          <div className="text-lg sm:text-xl text-gruvbox-purple mb-5 font-semibold text-center md:text-left">
            Projects
          </div>
          <div className="flex flex-col gap-10 md:flex-row justify-between items-center md:items-start">
            <div className="w-5/6 sm:h-2/5 md:w-2/5 lg:w-2/5 flex flex-col items-center gap-4">
              <a href="https://elearning.bslc.or.id/" target="_blank">
                <img
                  src="/Projects/elearning_bslc.png"
                  alt="elearning"
                  className="rounded-sm shadow-lg shadow-gruvbox-fg2 hover:-translate-y-1 transition-transform duration-300"
                />
              </a>
              <a href="https://elearning.bslc.or.id/" target="_blank">
                <div className="mt-4 text-center text-xl text-gruvbox-green">
                  E-Learning by BSLC
                </div>
              </a>
              <div className="text-justify font-extralight text-sm">
                A web app that lets students download learning modules for their
                courses
              </div>
            </div>
            <div className="w-5/6 sm:h-2/5 md:w-2/5 lg:w-2/5 flex flex-col items-center gap-4">
              <a
                href="https://islab.apps.binus.ac.id/recruitmentislab/"
                target="_blank"
              >
                <img
                  src="/Projects/ispm_newrecruitment.png"
                  alt="elearning"
                  className="rounded-sm shadow-lg shadow-gruvbox-fg2 hover:-translate-y-1 transition-transform duration-300"
                />
              </a>
              <a
                href="https://islab.apps.binus.ac.id/recruitmentislab/"
                target="_blank"
              >
                <div className="mt-4 text-center text-xl text-gruvbox-green">
                  BINUS Information System Laboratorium Recruitment Site
                </div>
              </a>
              <div className="text-justify font-extralight text-sm">
                A website for recruiting new information systems lab members
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
