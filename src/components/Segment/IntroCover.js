import TitleCard from "../UI/TitleCard";
import { motion } from "framer-motion";

const IntroCover = () => {
    const coverVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: .3
            }
        }
    };

    const logosVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: .5,
                delay: .3
            }
        }
    };

    return <div className="relative mb-16 md:mb-20">
        <motion.img
            src="./images/previews/joi2.jpg"
            alt="Joi Cover"
            className="bg-cover object-cover min-w-full h-72 mx-auto"
            variants={coverVariants}
            initial="hidden"
            animate="visible"
        />
        <motion.div
            className="absolute top-0 w-12 flex flex-col gap-4 m-4"
            variants={logosVariants}
            initial="hidden"
            animate="visible"
        >
            <img src="./images/logos/bladeRunner.png" alt="Blade Runner logo" />
            <img src="./images/logos/warner.png" alt="Warner logo" />
        </motion.div>

        <TitleCard />
    </div>;
};

export default IntroCover;