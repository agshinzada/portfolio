import HeaderBox from "./HeaderBox";

function AboutPage() {
  return (
    <>
      <HeaderBox
        title="Haqqımda"
        slogan="I'm a monster. Okay, I like a challenge."
      />
      <div className="flex px-28 gap-6 py-20 justify-center animate__animated animate__fadeIn">
        <div>
          <img src="/profile.png" className="w-80 rounded-sm shadow-md" />
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
    </>
  );
}

export default AboutPage;
