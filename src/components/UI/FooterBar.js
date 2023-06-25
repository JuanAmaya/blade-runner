import { motion } from "framer-motion";

const FooterBar = () => {
    const barVariants = {
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

    const contVariants = {
        offscreen: {
            opacity: 0,
            scaleX: 0
        },
        onscreen: {
            opacity: 1,
            scaleX: 1,
            transition: {
                duration: 0.5,
                delay: 0.3
            }
        }
    };

    return <motion.div
        className="fixed bottom-0 bg-main-black text-main-lightBlue flex justify-between w-screen px-4 items-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={barVariants}
    >
        <motion.span
            variants={contVariants}
        >
            BR2049 / 20 - 17
        </motion.span>
        <motion.img
            src="./images/logos/wallaceLogo.png"
            alt="Wallace logo"
            className="h-8"
            variants={contVariants}
        />
    </motion.div>;
};

export default FooterBar;