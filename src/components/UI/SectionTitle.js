import { motion } from "framer-motion";

const SectionTitle = ({ num, title, extra }) => {
    const numVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    const titleVariants = {
        offscreen: {
            opacity: 0,
            scaleY: 0
        },
        onscreen: {
            opacity: 1,
            scaleY: 1,
            transition: {
                duration: 0.3,
                delay: 0.3
            }
        }
    };

    return <motion.div
        className={`flex flex-col gap-2 mb-4 ${extra}`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
    >
        <motion.h2
            className="text-3xl text-main-lightBlue"
            variants={numVariants}
        >
            Section {num}
        </motion.h2>
        <motion.h3
            className="text-xl text-main-black bg-main-lightBlue p-2"
            variants={titleVariants}
        >
            {title}
        </motion.h3>
    </motion.div>;
};

export default SectionTitle;