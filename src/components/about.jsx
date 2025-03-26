import { motion } from "framer-motion";



const AboutMe = () => {
    return (
      <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: true }} // Ensures it only animates once
      className="flex justify-center">
        <p className="text-white  text-justify w-3/4 mt-6 ms-6 leading-10">
          Hi, I'm Loganatha, a front-end web developer passionate about building user-friendly and visually appealing interfaces. I specialize in HTML, CSS, JavaScript, React, and Vue.js, with experience in Django, GraphQL, and WordPress.
          <br /><br />
          I’ve worked on projects like hospital websites and WiFi registration portals, focusing on performance and usability. Currently, I’m enhancing my skills in React and UI/UX design to create even more intuitive web applications.
          <br /><br />
          Excited to collaborate and contribute to innovative projects!
        </p>
      </motion.div>
    );
  };
  
  export default AboutMe;
  