import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div className='text-center'>
        <p className={styles.sectionSubText}>Tools I work with</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </div>

      <div className='mt-16 flex flex-row flex-wrap justify-center gap-8'>
        {technologies.map((technology, index) => (
          <div className='w-28 h-36 text-center' key={technology.name}>
            <div
              className='tech-ball w-28 h-28'
              style={{ animationDelay: `${(index % 6) * -0.45}s` }}
            >
              <div className='tech-ball__surface'>
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  loading='lazy'
                  className='relative z-10 w-14 h-14 object-contain drop-shadow-md'
                />
              </div>
            </div>
            <p className='mt-1 text-secondary text-[13px] font-medium'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
