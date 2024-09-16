

const Extra = () => {
    return (
        <div className="md:mb-48 mt-10">
            <div className="flex flex-col md:flex-row items-center gap-10 mx-4 md:mx-10">
    <div className="w-full md:w-1/2 bg-transparent shadow-md md:px-20 md:py-20 py-10">
        <h1 className="text-4xl font-bold text-start text-cyan-600 my-2">Why Choose <span className="text-purple-500">NotHi</span>?</h1>
        <ul className="list-disc ml-10 text-blue-900">
            <li className="text-lg font-bold text-start">Seamless note-taking experience with intuitive design.</li>
            <li className="text-lg font-bold text-start">Access your notes anytime, anywhere, on any device.</li>
            <li className="text-lg font-bold text-start">Organize and categorize notes for easy retrieval.</li>
            <li className="text-lg font-bold text-start">Sync your notes securely across all platforms.</li>
            <li className="text-lg font-bold text-start">Boost productivity with smart reminders and task management.</li>
        </ul>
    </div>
    <div className="w-full md:w-1/2 ratio ratio-16x9">
        <img src="../../public/extra.jpg" className="rounded" style={{ height: "400px", width: "100%"}} loading="lazy" alt="Why Choose Us" />
    </div>
</div>

        </div>
    );
};

export default Extra;