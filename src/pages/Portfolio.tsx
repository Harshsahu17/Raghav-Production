import { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const categories = ['All', 'Video Production', 'Social Media', 'Podcast', 'Graphic Design', 'Web Design'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Brand Film',
      category: 'Video Production',
      image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A cinematic brand story for a Fortune 500 company showcasing their innovation and culture.',
    },
    {
      id: 2,
      title: 'Instagram Reels Campaign',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Viral social media campaign generating 2M+ views and 50K+ engagements.',
    },
    {
      id: 3,
      title: 'Music Video Production',
      category: 'Video Production',
      image: 'https://images.pexels.com/photos/1701195/pexels-photo-1701195.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-energy music video with stunning visuals and choreography.',
    },
    {
      id: 4,
      title: 'Tech Podcast Series',
      category: 'Podcast',
      image: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '12-episode podcast series featuring industry leaders and innovators.',
    },
    {
      id: 5,
      title: 'Product Launch Video',
      category: 'Video Production',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sleek product showcase video that drove 200% increase in pre-orders.',
    },
    {
      id: 6,
      title: 'Social Media Graphics',
      category: 'Graphic Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity and social media design package.',
    },
    {
      id: 7,
      title: 'E-commerce Website',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern, responsive website with seamless user experience.',
    },
    {
      id: 8,
      title: 'YouTube Content Series',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Educational content series with 100K+ subscribers.',
    },
    {
      id: 9,
      title: 'Documentary Film',
      category: 'Video Production',
      image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Award-winning documentary exploring social impact stories.',
    },
    {
      id: 10,
      title: 'Business Podcast',
      category: 'Podcast',
      image: 'https://images.pexels.com/photos/7130456/pexels-photo-7130456.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Weekly podcast covering entrepreneurship and business strategy.',
    },
    {
      id: 11,
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity including logo, colors, and guidelines.',
    },
    {
      id: 12,
      title: 'Portfolio Website',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Stunning portfolio website for creative professional.',
    },
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Portfolio"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-amber-500">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300">Showcasing our finest creative work</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-amber-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-16 h-16 bg-amber-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Play size={28} className="text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{item.title}</h3>
                  <p className="text-amber-500 font-semibold text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedItem !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src={portfolioItems.find((item) => item.id === selectedItem)?.image}
                alt=""
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            <div className="p-8">
              <div className="mb-4">
                <span className="inline-block bg-amber-500/20 text-amber-500 px-4 py-1 rounded-full text-sm font-semibold">
                  {portfolioItems.find((item) => item.id === selectedItem)?.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {portfolioItems.find((item) => item.id === selectedItem)?.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {portfolioItems.find((item) => item.id === selectedItem)?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Want to See Your Project Here?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's collaborate and create something extraordinary together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
