

const Footer = () => {
    return (
        <div className="mt-20 ">
            <div className="relative ">
            <div className="text-light text-center text-white font-bold relative z-10 bottom-2 md:bottom-12">
                <div className="flex flex-col justify-center items-center h-full bg-gradient-to-b from-transparent to-a2d9ff">
                    <p className="mb-4">&copy;2024 - All rights reserved by Sabrina Rashid</p>
                    {/* <p className="mb-4">  <FaPhoneAlt className="text-center inline" /> +8801533655790 </p> */}
                   
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full z-0">
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        
                        <stop offset="50%" stopColor="#ab30fd" />
                        <stop offset="100%" stopColor="#30d8fd" />
                    </linearGradient>
                </defs>
                <path fill="url(#gradient)" fillOpacity="1" d="M0,0L30,37.3C60,75,120,149,180,170.7C240,192,300,160,360,138.7C420,117,480,107,540,128C600,149,660,203,720,208C780,213,840,171,900,138.7C960,107,1020,85,1080,96C1140,107,1200,149,1260,160C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
            </div>
           
        </div>
    );
};

export default Footer;