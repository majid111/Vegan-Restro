import './banner.css';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-slate-400 banner rounded-2xl mb-24">
            <div className="hero-content text-center">
                <div className="max-w-4xl text-white">
                    <h1 className="text-5xl font-bold">Discover the essence of plant-based bliss at our vegetarian cafe</h1>
                    <p className="py-6">
                        Experience vegetarian excellence at our cafe! Delight in delicious plant-based dishes crafted with care.</p>
                    <div>
                        <button className="btn bg-[#0BE58A] rounded-full">Explore Now</button>
                        <button className="btn ml-6 rounded-full">Our Feedback</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;