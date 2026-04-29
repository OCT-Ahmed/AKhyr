const HomePage = () => {
  return (
    <div className="flex flex-col justify-center  md:grid md:grid-cols-3 gap-4 p-16">
      
      {/* LEFT */}
      <div>
        <h1 className="text-4xl font-bold">Imagin to be a part of someone sucees story</h1>
        <p className="mt-4">I'm trying to build my future from 0. I'm Ahmed.. a sudanese student who wants to chase his dreams. and have a chance to study in a college</p>
        {/* CTA BUTTONS */}
        <div className="flex gap-4 mt-6">
          <button className="text-white bg-yellow-400 px-8 py-3 rounded-xl cursor-pointer" id="cta-button">Join Our Story</button>
          <button className="text-white bg-purple-600 px-8 py-3 rounded-xl cursor-pointer" id="cta-button">Read My Story</button>
        </div>
      </div>
      {/* RIGHT */}
      <div className="col-span-2"></div>
    </div>
  );
}  

export default HomePage;