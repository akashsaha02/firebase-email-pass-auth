import React from 'react';
import { FaUser, FaBell, FaSearch } from 'react-icons/fa';

const features = [
    {
        icon: <FaUser />,
        title: "Personalized Dashboard",
        description: "View and manage your account with a personalized dashboard featuring recent activities, progress tracking, and tailored recommendations.",
    },
    {
        icon: <FaBell />,
        title: "Real-Time Notifications",
        description: "Receive timely notifications about updates, messages, and community interactions, ensuring you stay connected and informed.",
    },
    {
        icon: <FaSearch />,
        title: "Advanced Search and Filtering",
        description: "Find content quickly using advanced search with filtering options. Filter by categories, tags, or popularity to get the best results.",
    },
];

const Features = () => (
    <section className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4 text-blue-500 text-3xl">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Features;
