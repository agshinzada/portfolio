import HeaderBox from "./HeaderBox";

function AboutPage() {
  return (
    <>
      <HeaderBox title="About" slogan="Okay, I like a challenge." />
      <div className="flex flex-col sm:flex-row items-center sm:items-start xl:px-28 sm:px-6 gap-6 py-10 sm:py-20 justify-center animate__animated animate__fadeIn">
        <div>
          <img
            src="/profile.png"
            className="sm:w-80 w-60 rounded-sm shadow-md"
          />
        </div>
        <div className="px-4 sm:px-0">
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
    </>
  );
}

export default AboutPage;
