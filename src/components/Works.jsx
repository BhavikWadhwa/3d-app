import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  gradient,
  image,
  live_link,
  source_code_link,
}) => {
  const openLink = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <Tilt
        options={{ max: 30, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full'
      >
        <div className='relative w-full h-[230px]'>
          <div
            onClick={() => openLink(live_link)}
            onKeyDown={(event) => {
              if (live_link && (event.key === "Enter" || event.key === " ")) {
                openLink(live_link);
              }
            }}
            role={live_link ? "link" : undefined}
            tabIndex={live_link ? 0 : undefined}
            aria-label={live_link ? `Open live ${name} project` : undefined}
            title={live_link ? `Open live ${name} project` : undefined}
            className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 flex flex-col justify-end bg-cover bg-center ${live_link ? "cursor-pointer transition-transform duration-300 hover:scale-[1.02]" : ""}`}
            style={image ? { backgroundImage: `url(${image})` } : undefined}
          >
            <div className='absolute -right-10 -top-10 w-40 h-40 rounded-full border border-white/20' />
            <div className='absolute right-10 top-10 w-20 h-20 rounded-full bg-white/10 blur-xl' />
          </div>

          {source_code_link && (
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => openLink(source_code_link)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    openLink(source_code_link);
                  }
                }}
                role='button'
                tabIndex={0}
                aria-label={`Open ${name} GitHub repository`}
                title={`Open ${name} GitHub repository`}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt=''
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          )}
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Technical Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects demonstrate full-stack application architecture,
          workflow automation, AI-supported content processing, machine
          learning, data visualization, and interactive frontend development.
          Each project turns a real operational or user need into a practical,
          maintainable technology solution.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
