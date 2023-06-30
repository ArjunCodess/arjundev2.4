import web1 from "../images/web1.png";
import web2 from "../images/web2.png";
import web3 from "../images/web3.png";
import web4 from "../images/web4.png";
import web5 from "../images/web5.png";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import AnimatedWave from "./AnimatedWave";

const Work = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-slate-800 capitalize lg:text-3xl dark:text-white">
              WORKS
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web1}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900 border">
                <a
                  href="https://google2-0-build.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline dark:text-white md:text-xl"
                >
                  Google Clone
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  A perfect <span className="underline decoration-sky-500 text-gray-900">Google Clone</span>
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Next JS
                  </p>
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Tailwind CSS
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web2}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900 border">
                <a
                  href="https://hulu-clone-coderpoop.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline dark:text-white md:text-xl"
                >
                  Hulu Clone
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  An exceptional <span className="underline decoration-sky-500 text-gray-900">Hulu Clone</span>
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Next JS
                  </p>
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Tailwind CSS
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web3}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900 border">
                <a
                  href="https://tweetera.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline dark:text-white md:text-xl"
                >
                  Tweetera
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Tweetera: An out of the ordinary <span className="underline decoration-sky-500 text-gray-900">Twitter Clone</span>
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Next JS
                  </p>
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Tailwind CSS
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web4}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900 border">
                <a
                  href="https://ping-pong-arjuncodess.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline dark:text-white md:text-xl"
                >
                  Ping Pong Clone
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  A remarkable clone of the classic <span className="underline decoration-sky-500 text-gray-900">Ping Pong Game</span>
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    HTML
                  </p>
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    CSS
                  </p>
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    JavaScript
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web5}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900 border">
                <a
                  href="https://sushiexpress.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline dark:text-white md:text-xl"
                >
                  Japanese Sushi
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  A remarkable <span className="underline decoration-sky-500 text-gray-900">Japanese Sushi</span> website
                </p>
                <div class="inline-flex rounded-md gap-2">
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    HTML
                  </p>
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    CSS
                  </p>
                  <p class="px-4 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
