import { motion } from "framer-motion";

const ShopCard = ({ logo, shopName, shopUrl }) => {
    const shopVariants = {
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

    const logosVariants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 0.3
            }
        }
    };

    return <motion.div
        className="border-2 border-main-lightBlue rounded-lg w-44 p-4 bg-main-black hover:bg-main-lightBlue/50 transition-colors h-20"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={shopVariants}
    >
        <motion.a
            href={shopUrl}
            target="_blank"
            variants={logosVariants}
        >
            <img
                src={logo}
                alt={`${shopName} logo`}
                className="bg-contain object-contain h-full mx-auto"
            />
        </motion.a>
    </motion.div>;
};

export default ShopCard;