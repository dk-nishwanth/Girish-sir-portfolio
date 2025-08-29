import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2019',
    title: 'Intern Mobile Developer',
    company: 'Lontar Lab. Bandung, Indonesia',
    description: 'Started career in mobile development as an intern. The focus was on assisting in the creation of mobile applications.',
    side: 'left'
  },
  {
    year: '2020',
    title: 'Java Software Engineer',
    company: 'PT Collega Inti Pratama Jakarta, Indonesia',
    description: 'Actively involved in the maintenance and development of Collega\'s Application Java Project Olibs Backend 724.',
    side: 'right'
  },
  {
    year: '2022',
    title: 'Flutter Developer',
    company: 'PT Collega Inti Pratama Jakarta, Indonesia',
    description: 'Specialized in Flutter, my focus was creating new and innovative flutter applications that leverage the framework\'s capabilities for high performance and beautiful UI.',
    side: 'left'
  }
];

export const TimelineSection = () => {
  return (
    <section id="timeline" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-4">
            CAREER TIMELINE
          </h2>
          <p className="text-xl text-foreground-secondary font-inter max-w-2xl mx-auto">
            A journey through professional milestones and growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full timeline-line" />

          {/* Timeline Items */}
          <div className="space-y-20">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center ${
                  item.side === 'left' ? 'justify-end' : 'justify-start'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 timeline-dot rounded-full z-10" />

                {/* Content Card */}
                <div className={`w-5/12 ${item.side === 'left' ? 'pr-16' : 'pl-16'}`}>
                  <div className="bg-card border border-card-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-card">
                    {/* Year */}
                    <div className="text-primary text-2xl font-poppins font-bold mb-3">
                      {item.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-poppins font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    {/* Company */}
                    <p className="text-foreground-secondary font-inter mb-4">
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-foreground-secondary font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
