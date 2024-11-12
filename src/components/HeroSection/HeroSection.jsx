import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col justify-center items-center text-center p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-[50vh]">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-lg mb-6">Connect, explore, and get the best out of our features.</p>
            <button
                onClick={() => navigate('/register')}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
            >
                Get Started
            </button>
        </section>
    );
};

export default HeroSection;