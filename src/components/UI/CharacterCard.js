import { motion } from "framer-motion";

const CharacterCard = ({ chaName, race, actorName, imgSrc }) => {
    const borderVariants = {
        offscreen: {
            opacity: 0,
            scale: 0
        },
        onscreen: {
            opacity: 1,
            scale: 1,
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
                duration: 0.3,
                delay: 0.5
            }
        }
    };

    const nameVariants = {
        offscreen: {
            opacity: 0,
            scaleY: 0
        },
        onscreen: {
            opacity: 1,
            scaleY: 1,
            transition: {
                duration: 0.3,
                delay: 0.5
            }
        }
    };

    const descVariants = {
        offscreen: {
            opacity: 0,
            y: -10
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.7
            }
        }
    };

    return <motion.div
        className="flex gap-4"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
    >
        <div className="flex flex-col flex-1">
            <motion.span
                className="bg-main-lightBlue p-2 text-main-black text-center text-2xl"
                variants={nameVariants}
            >
                {chaName}
            </motion.span>
            <motion.div
                className="flex flex-col h-full justify-around"
                variants={descVariants}
            >
                <div className="text-main-lightBlue flex gap-2">
                    <span className="flex-1">Race</span>
                    <span className="flex-1">{race}</span>
                </div>
                <div className="text-main-lightBlue flex gap-2">
                    <span className="flex-1">Portrayed by</span>
                    <span className="flex-1">{actorName}</span>
                </div>
            </motion.div>
        </div>
        <motion.div
            className="border-2 border-main-lightBlue flex-1"
            variants={borderVariants}
        >
            <motion.img
                src={imgSrc}
                alt={chaName}
                className="bg-cover object-cover w-60 max-w-full h-56"
                variants={imgVariants}
            />
        </motion.div>
    </motion.div>;
};

export default CharacterCard;