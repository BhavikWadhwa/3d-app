import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { backend, creator, mobile, web } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const careerPaths = [
  {
    title: "Business Analyst",
    summary:
      "Translating business needs into clear requirements, practical workflows, and measurable process improvements.",
    icon: creator,
  },
  {
    title: "Business Systems Analyst",
    summary:
      "Connecting people, processes, and technology to improve how teams use and maintain business systems.",
    icon: web,
  },
  {
    title: "Technical Operations Analyst",
    summary:
      "Troubleshooting systems, documenting processes, and using data to support reliable day-to-day operations.",
    icon: backend,
  },
  {
    title: "Product Operations Analyst",
    summary:
      "Supporting product teams with structured analysis, cross-functional coordination, and workflow optimization.",
    icon: mobile,
  },
];

const CareerPathCard = ({ index, title, summary, icon }) => (
  <Tilt
    className='sm:w-[250px] w-full'
    options={{ max: 30, scale: 1, speed: 450 }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.15, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] p-7 min-h-[280px] flex flex-col'>
        <img src={icon} alt='' className='w-16 h-16 object-contain' />
        <p className='mt-6 text-[#915EFF] text-[12px] font-semibold uppercase tracking-[0.18em]'>
          Career Focus
        </p>
        <h3 className='mt-2 text-white text-[20px] font-bold leading-tight'>
          {title}
        </h3>
        <p className='mt-4 text-secondary text-[14px] leading-[23px]'>
          {summary}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        I&apos;m a Bachelor of Computer Information Systems graduate with
        hands-on experience across software development, technical operations,
        workflow automation, business systems, customer service, and data
        analysis. I build responsive applications, troubleshoot production
        systems, document processes, train users, and translate operational
        needs into practical technology solutions. I&apos;m especially
        interested in technical operations, business systems, product
        operations, operations analysis, and technology consulting roles where
        analytical thinking and technical knowledge can improve real business
        processes.
      </motion.p>

      <div className='mt-12 flex flex-wrap gap-10'>
        {careerPaths.map((careerPath, index) => (
          <CareerPathCard
            key={careerPath.title}
            index={index}
            {...careerPath}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
