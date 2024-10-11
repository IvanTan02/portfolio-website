'use client';
import { CONSTANTS } from '@/environments/constant';
import styles from "./AboutSection.module.css";
import { FaBolt, FaBook, FaGraduationCap, FaLaptopCode } from 'react-icons/fa6';

const timelineItems = [
  { timeframe: 'Aug 2021', icon: <FaBook />, description: `Enrolled in Taylor's University` },
  { timeframe: 'Apr 2024', icon: <FaBolt />, description: `First experience in the industry at my internship` },
  { timeframe: 'Aug 2024', icon: <FaGraduationCap />, description: `Graduated with a Bachelor's Degree in Computer Science` },
  { timeframe: 'Present', icon: <FaLaptopCode />, description: `Started my journey as a software engineer` },
];

const AboutSection = () => {
  return (
    <section className='text-neutral-content w-full px-10 lg:px-24'>
      <div className="flex flex-col justify-center items-center w-full">
        <h2 className={styles.about_me_title}>About Me</h2>
      </div>
      <div className="flex flex-row justify-center items-center mt-8">
        {/* Summary */}
        <div className={`${styles.about_me_text}`}>
          {CONSTANTS.heroContent.summary}
        </div>
      </div>
      {/* Timeline */}
      <ul className={`timeline timeline-vertical lg:timeline-horizontal ${styles.timeline_container}`}>
        {
          timelineItems.map((timelineItem, index) => {
            return (<li key={index} className={`${styles.timeline_item}`}>
              {index > 0 && <hr className={`bg-neutral-content ${styles.timeline_line}`} />}
              <div className={`timeline-start ${styles.timeline_timeframe}`}>{timelineItem.timeframe}</div>
              <div className="timeline-middle">
                <div className={`${styles.timeline_icon}`}>
                  {timelineItem.icon}
                </div>
              </div>
              <div className={`timeline-end timeline-box ${styles.timeline_description}`}>{timelineItem.description}</div>
              {index < (timelineItems.length - 1) && <hr className={`bg-neutral-content ${styles.timeline_line}`} />}
            </li>)
          })
        }
      </ul>

    </section>
  )
}

export default AboutSection