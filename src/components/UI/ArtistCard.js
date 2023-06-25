import { motion } from "framer-motion";

const ArtistCard = ({ view, profID, imgSrc, occ, name }) => {
    const cardVariants = {
        offscreen: {
            opacity: 0,
            scaleY: 0
        },
        onscreen: {
            opacity: 1,
            scaleY: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    const viewVariants = {
        offscreen: {
            x: "100%",
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 0.3
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
                duration: 0.5,
                delay: 0.3
            }
        }
    };

    return <motion.div
        className="flex"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
    >
        <motion.div
            className="flex flex-col text-center border-2 border-r-0 border-main-lightBlue rounded-bl-2xl h-fit p-2 text-main-lightBlue"
            variants={viewVariants}
        >
            <span>View</span>
            <span className="text-2xl">{view}</span>
        </motion.div>
        <motion.div
            className="border-2 border-main-lightBlue text-main-lightBlue"
            variants={cardVariants}
        >
            <div className="flex flex-col p-2">
                <span>Profile ID</span>
                <span className="text-2xl">{profID}</span>
            </div>
            <div className="border-y-2 border-main-lightBlue">
                <motion.img
                    src={imgSrc}
                    alt={name}
                    className="w-60 h-56 bg-cover object-cover"
                    variants={imgVariants}
                />

            </div>
            <div className="flex flex-col p-2">
                <span>{occ}</span>
                <span className="text-2xl">{name}</span>
            </div>
        </motion.div>
    </motion.div>;
};

export default ArtistCard;