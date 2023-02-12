import HeaderBox from "./HeaderBox";

function AboutPage() {
  return (
    <div>
      <HeaderBox title="About" slogan="Okay, I like a challenge." />
      <div className="md:px-16 px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start xl:px-28 sm:px-6 gap-6 py-10 sm:py-20 justify-center animate__animated animate__fadeIn">
          <div>
            <img
              src="/profile.png"
              className="sm:w-80 w-60 rounded-sm shadow-md"
            />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Mən kiməm</h4>
            <p className="break-normal text-justify max-w-lg leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              harum recusandae aliquid molestias, veritatis itaque asperiores
              perspiciatis architecto? Explicabo maiores perferendis placeat
              numquam voluptatibus sapiente ad aliquid neque nihil ipsam!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              harum recusandae aliquid molestias, veritatis itaque asperiores
              perspiciatis architecto? Explicabo maiores perferendis placeat
              numquam voluptatibus sapiente ad aliquid neque nihil ipsam!
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 sm:grid-cols-1">
          <div>
            <p className="font-bold text-2xl mb-6">Education</p>
            <div>
              <div className="bg-gray-100 py-5 px-8 w-full rounded-sm shadow-sm relative">
                <span className="text-xs py-1 px-3 bg-green-600 text-white absolute top-2 -left-2">
                  2019-2021
                </span>
                <div className="mt-6">
                  <h4 className="font-semibold">
                    Məişət radioelektron aparatları
                  </h4>
                  <p className="text-sm">Azərbaycan Texniki Universiteti</p>
                </div>
              </div>
              <hr />
              <div className="bg-gray-100 py-5 px-8 w-full rounded-sm shadow-sm relative">
                <span className="text-xs py-1 px-3 bg-green-600 text-white absolute top-2 -left-2">
                  2015-2019
                </span>
                <div className="mt-6">
                  <h4 className="font-semibold">
                    Elektronika, telekommunikasiya və radiotexnika mühəndisliyi
                  </h4>
                  <p className="text-sm">Azərbaycan Texniki Universiteti</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-2xl mb-6">Skills</p>
            <div>
              <div>
                <div class="mb-1 text-base font-medium ">HTML</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div class="bg-green-600 h-2.5 rounded-full  w-[96%]"></div>
                </div>
              </div>
              <div>
                <div class="mb-1 text-base font-medium ">
                  CSS / Tailwind CSS
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div class="bg-green-600 h-2.5 rounded-full  w-[85%]"></div>
                </div>
              </div>
              <div>
                <div class="mb-1 text-base font-medium ">Javascript</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div class="bg-green-600 h-2.5 rounded-full  w-[80%]"></div>
                </div>
              </div>
              <div>
                <div class="mb-1 text-base font-medium ">React</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div class="bg-green-600 h-2.5 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div>
                <div class="mb-1 text-base font-medium ">Typescript</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div class="bg-green-600 h-2.5 rounded-full w-[20%]"></div>
                </div>
              </div>

              <div>
                <div class="mb-1 text-base font-medium ">
                  Node JS / Express JS
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div class="bg-green-600 h-2.5 rounded-full w-[55%]"></div>
                </div>
              </div>
              <div>
                <div class="mb-1 text-base font-medium ">SQL / NO SQL</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div class="bg-green-600 h-2.5 rounded-full  w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <p className="font-bold text-2xl mb-6 rounded-sm">Experience</p>
          <div className="w-full bg-gray-100 p-4 flex sm:flex-row flex-col  gap-6 rounded-sm">
            <img
              src="mazarina.svg"
              alt="company-logo"
              className="md:w-40 sm:w-32 w-28 self-start"
            />
            <div>
              <div className="flex md:flex-row justify-between flex-col">
                <div>
                  <h5 className="font-bold mb-1">
                    İnformasiya texnologiyaları üzrə mütəxəssis
                  </h5>
                  <p className="text-xs mb-3">
                    Mazarina Trade Company | Dec 2020 - Present
                  </p>
                </div>
                <span className="text-xs w-fit h-fit py-1 px-3 bg-green-600 text-white mb-3 md:mb-0">
                  Full time
                </span>
              </div>

              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                sequi voluptatem velit consequatur a dolor officia debitis cum
                laborum fugit quos alias accusamus, hic possimus libero
                repudiandae impedit nihil dolore, illum, assumenda doloremque
                nesciunt corrupti totam? Alias libero optio architecto ducimus
                quo eius quisquam ut rerum? Voluptates doloribus eveniet
                voluptate?
              </p>
            </div>
          </div>
          <hr />
          <div className="w-full bg-gray-100 p-4 flex sm:flex-row flex-col gap-6  rounded-sm">
            <img
              src="mazarina.svg"
              alt="company-logo"
              className="md:w-40 sm:w-32 w-28  self-start"
            />
            <div>
              <div className="flex md:flex-row justify-between flex-col">
                <div>
                  <h5 className="font-bold mb-1">IT üzrə təcrübəçi </h5>
                  <p className="text-xs mb-3">
                    Mazarina Trade Company | Sep 2020 - Dec 2020
                  </p>
                </div>
                <span className="text-xs h-fit w-fit py-1 px-3 bg-green-600 text-white mb-3 md:mb-0">
                  Full time
                </span>
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                sequi voluptatem velit consequatur a dolor officia debitis cum
                laborum fugit quos alias accusamus, hic possimus libero
                repudiandae impedit nihil dolore, illum, assumenda doloremque
                nesciunt corrupti totam? Alias libero optio architecto ducimus
                quo eius quisquam ut rerum? Voluptates doloribus eveniet
                voluptate?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
