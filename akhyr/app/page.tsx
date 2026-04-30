import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-stretch justify-between h-[calc(100vh-72px)]  gap-4 p-16">
      
      {/* LEFT */}
      <div className="w-full flex flex-col justify-center">
        <h1 className="font-sans text-5xl font-semibold mb-6">Imagine being a part of <span className="text-4xl block">someone success story</span></h1>
        <p className="font-inter text-muted leading-[1.6em]">I'm trying to build my future from zero. I'm Ahmed.. a Sudanese student who want to chase his dreams. And have a chance to study in a college</p>
        {/* CTA BUTTONS */}
        <div className="flex gap-4 mt-6">
          <Link href="/subscription">
            <button className="text-white bg-primary px-8 py-3 rounded-xl hover:bg-primary/75 transition-all duration-300 cursor-pointer" id="cta-button">
              Join Our Story
            </button>
          </Link>
          <Link href="/story">
            <button className="text-white bg-white/5 filter-blur-xl border-2 border-white/25 px-8 py-3 rounded-xl hover:bg-white/0 transition-all duration-300 cursor-pointer" id="cta-button">
              Read My Story
            </button>
          </Link>
          
        </div>
      </div>
      {/* RIGHT */}
      <div className="relative z-10 w-full h-full border border-primary filter-blur-6xl ">
        <div className="absolute left-5/7 top-1/3 w-34 h-34  bg-primary/25 shadow-primary shadow-4xl rounded-full z-0 animate-float"></div>
        <div className="absolute left-3/7 top-2/3 w-34 h-34  bg-primary/25 rounded-full z-0 animate-float"></div>
        <div className="absolute left-1/7 top-0 w-34 h-34  bg-primary/25 rounded-full z-0 animate-float"></div>
      </div>
    </div>
  );
}  

export default HomePage;