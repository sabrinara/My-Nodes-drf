import React from "react";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Jane Doe",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            review:
                "NotHi has completely transformed how I organize my tasks and ideas. The interface is so intuitive, and I can access my notes anywhere. Highly recommended!"
        },
        {
            name: "Emily Johnson",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHx1c2VyfGVufDB8fDB8fHww",
            review:
                "With NotHi, I’ve finally found a reliable note-taking app that keeps everything organized. The security features give me peace of mind knowing my data is safe."
        },
        {
            name: "John Smith",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            review:
                "I love the collaboration feature. It’s super easy to share notes with my team and work together in real-time. NotHi has made our projects run much smoother."
        }
       
    ];

    return (
        <div className="flex flex-col items-center justify-center px-10 ">
            <h1 className="text-3xl md:text-5xl  font-bold text-cyan-600 mb-6 md:mb-10">What Our <span className="text-purple-500">User Says</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className=" p-6 rounded shadow-lg ">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-36 h-36 rounded-full mx-auto mb-4 border-4  border-x-purple-500 border-y-cyan-500"
                        />
                        <h2 className="text-2xl font-semibold text-center mb-2 text-cyan-500">
                            {testimonial.name}
                        </h2>
                        <p className="text-center">{testimonial.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
