import SectionTitle from "../UI/SectionTitle";
import { motion } from "framer-motion";

const TrailerSection = ({ sectionNum, desc, videoSrc }) => {
    const borderVariants = {
        offscreen: {
            opacity: 0,
            scaleX: 0
        },
        onscreen: {
            opacity: 1,
            scaleX: 1,
            transition: {
                duration: 0.3,
                delay: 0.3
            }
        }
    };

    const videoVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.5
            }
        }
    };

    return <div className="w-full md:flex md:gap-4">
        <SectionTitle
            num={sectionNum}
            title={desc}
        />

        <motion.div
            className="flex justify-center md:flex-1 border-2 border-main-lightBlue"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={borderVariants}
        >
            <motion.iframe
                width="560"
                height="315"
                src={videoSrc}
                title="Blade Runner 2049 trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full"
                variants={videoVariants}
            ></motion.iframe>
        </motion.div>
    </div>;
};

export default TrailerSection;