import { Link } from 'react-router-dom';
import {
  Video,
  Share2,
  Mic,
  Palette,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing with cinematic color grading and seamless transitions.',
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Engaging content creation optimized for all social media platforms.',
    },
    {
      icon: Mic,
      title: 'Podcast Shoot',
      description: 'Full-scale podcast production with professional audio and video setup.',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Stunning visual designs that communicate your brand story effectively.',
    },
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Modern, responsive websites that convert visitors into customers.',
    },
  ];

  const portfolio = [
    {
      title: 'Corporate Film',
      category: 'Video Production',
      image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Brand Campaign',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Music Video',
      category: 'Video Editing',
      image: 'https://images.pexels.com/photos/1701195/pexels-photo-1701195.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Podcast Series',
      category: 'Podcast Shoot',
      image: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Marketing Director, TechCorp',
      content:
        'Raghav Productions transformed our brand vision into a compelling visual story. Their attention to detail and creative approach exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Arjun Mehta',
      role: 'CEO, StartupHub',
      content:
        'Working with Raghav Productions was an absolute pleasure. They delivered a stunning corporate video that perfectly captured our company culture.',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      role: 'Content Creator',
      content:
        "The team's expertise in social media content creation helped me grow my audience by 300%. Their creative ideas are always on point!",
      rating: 5,
    },
  ];

  const reasons = [
    '10+ Years of Industry Experience',
    'Award-Winning Creative Team',
    'State-of-the-Art Equipment',
    'On-Time Project Delivery',
    'Competitive Pricing',
    '100+ Satisfied Clients',
  ];

  return (
    <div className="bg-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Cinematic Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            We Create Stories
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Through Visuals
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Elevating brands through cinematic storytelling and innovative video production that
            captivates and inspires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>View Our Work</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-amber-500">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 border border-gray-800 hover:border-amber-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 font-semibold"
            >
              <span>Explore All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-amber-500">Portfolio</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of our finest work and creative excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
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
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-amber-500 font-semibold">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 font-semibold"
            >
              <span>View Full Portfolio</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-amber-500">Us</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Excellence driven by passion, experience, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition-all duration-300"
              >
                <CheckCircle size={24} className="text-amber-500 flex-shrink-0" />
                <span className="text-white font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client <span className="text-amber-500">Testimonials</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-amber-500 transition-all duration-300"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-amber-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Get in touch today and let's discuss your
              next project.
            </p>
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
