

const Banner = () => {
    return (
        <div className="relative">
        <img src="../../public/cover.jpg" className="w-full h-[80vh]" alt="" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-purple-600  text-5xl font-bold font-serif">Not<span className="text-cyan-600">Hi</span></h1>
            <p className="text-2xl text-purple-600">Track your daily notes. Keep them in our nothi website.</p>
        </div>
    </div>
    );
};

export default Banner;