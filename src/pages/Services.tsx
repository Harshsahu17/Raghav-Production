import { Video, Share2, Mic, Palette, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description:
        'Transform raw footage into cinematic masterpieces with our professional video editing services.',
      features: [
        'Color grading and correction',
        'Motion graphics and VFX',
        'Sound design and mixing',
        'Multi-format delivery',
        'Fast turnaround time',
      ],
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Share2,
      title: 'Social Media Content',
      description:
        'Create engaging content optimized for Instagram, YouTube, Facebook, and other platforms.',
      features: [
        'Platform-specific optimization',
        'Trending format creation',
        'Thumbnail design',
        'Caption writing',
        'Content strategy',
      ],
      image: 'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Mic,
      title: 'Podcast Production',
      description:
        'Full-scale podcast production from concept to distribution with professional quality.',
      features: [
        'Studio recording setup',
        'Multi-camera filming',
        'Audio post-production',
        'Video editing for YouTube',
        'Distribution assistance',
      ],
      image: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description:
        'Stunning visual designs that effectively communicate your brand message and identity.',
      features: [
        'Logo and brand identity',
        'Marketing materials',
        'Social media graphics',
        'Thumbnail creation',
        'Print and digital design',
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Globe,
      title: 'Website Design',
      description:
        'Modern, responsive websites that convert visitors into customers and grow your business.',
      features: [
        'Custom responsive design',
        'User experience optimization',
        'SEO-friendly structure',
        'Fast loading speed',
        'Ongoing maintenance',
      ],
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-amber-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300">Comprehensive creative solutions for your brand</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-amber-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl -z-10 opacity-50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
