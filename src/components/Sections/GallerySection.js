import SectionTitle from "../UI/SectionTitle";
import { motion } from "framer-motion";

const GallerySection = () => {
    const borderXVariants = {
        offscreen: {
            opacity: 0,
            scaleX: 0
        },
        onscreen: {
            opacity: 1,
            scaleX: 1,
            transition: {
                duration: 0.3,
            }
        }
    };

    const borderYVariants = {
        offscreen: {
            opacity: 0,
            scaleY: 0
        },
        onscreen: {
            opacity: 1,
            scaleY: 1,
            transition: {
                duration: 0.3,
            }
        }
    };

    const imgVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: 0.3
            }
        }
    };

    return <motion.div
        className="galleryGrid"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
    >
        <SectionTitle
            num={"08"}
            title={"Within cells interlinked"}
            extra={"gallery"}
        />

        <motion.div
            className="border-2 border-main-lightBlue gallery"
            variants={borderXVariants}
        >
            <motion.img
                src="./images/previews/eye.jpg"
                alt="Eye"
                className="bg-cover object-cover h-full w-full"
                variants={imgVariants}
            />
        </motion.div>

        <motion.div
            className="border-2 border-main-lightBlue gallery"
            variants={borderYVariants}
        >
            <motion.img
                src="./images/previews/joe.jpg"
                alt="Joe"
                className="bg-cover object-cover h-full w-full"
                variants={imgVariants}
            />
        </motion.div>

        <motion.div
            className="border-2 border-main-lightBlue gallery"
            variants={borderYVariants}
        >
            <motion.img
                src="./images/previews/luvG.jpg"
                alt="Luv"
                className="bg-cover object-cover h-full w-full"
                variants={imgVariants}
            />
        </motion.div>

        <motion.div
            className="border-2 border-main-lightBlue gallery"
            variants={borderXVariants}
        >
            <motion.img
                src="./images/previews/joi4.jpg"
                alt="Joi billboard"
                className="bg-cover object-cover h-full w-full"
                variants={imgVariants}
            />
        </motion.div>
        <motion.div
            className="border-2 border-main-lightBlue gallery"
            variants={borderYVariants}
        >
            <motion.img
                src="./images/previews/wallace.jpg"
                alt="Wallace Corporation"
                className="bg-cover object-cover h-full w-full"
                variants={imgVariants}
            />
        </motion.div>
        <motion.div
            className="border-2 border-main-lightBlue gallery"
            variants={borderYVariants}
        >
            <motion.img
                src="./images/previews/horse.jpg"
                alt="Wooden horse"
                variants={imgVariants}
            />
        </motion.div>
        <motion.div
            className="border-2 border-main-lightBlue gallery"
            variants={borderXVariants}
        >
            <motion.img
                src="./images/previews/snow.jpg"
                alt="Stelline office"
                className="bg-cover object-cover h-full w-full"
                variants={imgVariants}
            />
        </motion.div>
    </motion.div>;
};

export default GallerySection;