import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define variants for sliding and fading effects
const slideIn = {
  hidden: { x: "-10%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const WhyBuzzvel = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures that the animation can be reactivated
    threshold: 0.1,
  });

  return (
    <section
      id="why Buzzvel"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-lightBackground dark:bg-darkBackground"
      ref={ref}
      data-testid="why-buzzvel-section"
    >
      <div className="container mx-auto">
        <h2
          className={`text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8 ${
            inView ? "animate-fadeIn" : ""
          }`}
          data-testid="why-buzzvel-heading"
        >
          Why Buzzvel?
        </h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 1 }}
            className="mb-8"
            data-testid="why-buzzvel-introduction"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I’m excited about the opportunity to join Buzzvel for several
              reasons:
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideIn}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
            data-testid="why-buzzvel-innovation"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Innovation at Our Core
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Buzzvel is always exploring new technologies. The Buzzlabs team is
              ahead of the curve, integrating the latest innovations to set
              trends rather than follow them. This aligns perfectly with my
              passion for cutting-edge technology.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideIn}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
            data-testid="why-buzzvel-customer-centric"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I value the deep understanding Buzzvel has for its clients' needs.
              Their thorough approach to aligning solutions with client goals is
              something I admire and am eager to contribute to.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideIn}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-8"
            data-testid="why-buzzvel-dedicated-expertise"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Dedicated Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The way Buzzvel sees developers as strategic partners is
              inspiring. I am excited about the opportunity to be part of a team
              dedicated to delivering products that drive client success and
              growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuzzvel;
