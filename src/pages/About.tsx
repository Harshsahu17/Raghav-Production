import { Award, Target, Eye, Users, Film, TrendingUp } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Raghav Kumar',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Anjali Verma',
      role: 'Lead Video Editor',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Vikram Singh',
      role: 'Cinematographer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Meera Patel',
      role: 'Social Media Strategist',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const stats = [
    { icon: Film, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Awards Won' },
    { icon: TrendingUp, value: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="bg-black min-h-screen">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Us"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-amber-500">Us</span>
          </h1>
          <p className="text-xl text-gray-300">Creating cinematic excellence since 2014</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-amber-500">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2014, Raghav Productions began with a simple vision: to transform stories
                  into compelling visual experiences that resonate with audiences worldwide. What started
                  as a passion project in a small studio has evolved into a full-scale production house
                  serving clients across industries.
                </p>
                <p>
                  Over the years, we've had the privilege of working with startups, established
                  corporations, content creators, and artists, helping them communicate their message
                  through the power of video. Our commitment to excellence and innovation has earned us
                  recognition in the industry and the trust of over 200 satisfied clients.
                </p>
                <p>
                  Today, we continue to push creative boundaries, embracing new technologies and
                  storytelling techniques to deliver content that not only meets but exceeds
                  expectations. Every project we undertake is an opportunity to create something
                  extraordinary.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Studio"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower brands and individuals with exceptional video production services that tell
                compelling stories, engage audiences, and drive meaningful results. We strive to be the
                trusted creative partner for businesses looking to make an impact through visual media.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be recognized as India's leading production house, known for innovative storytelling,
                cutting-edge technology, and unwavering commitment to quality. We envision a future where
                every brand has access to world-class video content that elevates their message.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our <span className="text-amber-500">Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Talented professionals passionate about creating exceptional visual content
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-amber-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's collaborate on your next project and create something amazing.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
