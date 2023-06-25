import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
    const [subTitle, setSubTitle] = useState(false);
    const [disappear, setDisappear] = useState(false);

    const footerVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                duration: .4
            }
        }
    };

    useEffect(() => {
        console.log(subTitle);
        const intervalWord = setInterval(() => {
            setSubTitle(subTitle => !subTitle);
        }, 8000);

        return () => clearInterval(intervalWord);
    }, []);

    useEffect(() => {
        const intervalSentence = setInterval(() => {
            setDisappear(disappear => !disappear);
        }, 4000);

        return () => clearInterval(intervalSentence);
    }, []);

    return <motion.div
        className="relative"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={footerVariants}
    >
        <img
            src="./images/previews/joi.jpg"
            alt="Joi Hologram"
            className="bg-cover mt-12 object-cover h-80 w-screen"
        />
        <AnimatePresence>
            {!disappear &&
                <motion.div
                    className="absolute flex flex-col text-center -rotate-6 text-3xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  font-bold"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5 }}
                >
                    <motion.span
                        className="movingColor"
                        initial={{ opacity: 0, backgroundPosition: "0px" }}
                        animate={{ opacity: 1, backgroundPosition: "400px", backgroundSize: "400px" }}
                        transition={{ duration: .5, delay: .5, backgroundPosition: { delay: .6, duration: 1 } }}
                    >
                        EVERYTHING
                    </motion.span>
                    <motion.span
                        className="movingColor"
                        initial={{ opacity: 0, backgroundPosition: "0px" }}
                        animate={{ opacity: 1, backgroundPosition: "400px", backgroundSize: "400px" }}
                        transition={{ duration: .5, delay: 1, backgroundPosition: { delay: 1.1, duration: 1 } }}
                    >
                        YOU WANT
                    </motion.span>
                    <div
                        className="relative"
                    >
                        <motion.span
                            className="absolute left-8 movingColor"
                            initial={{ opacity: 0, backgroundPosition: "0px" }}
                            animate={{ opacity: 1, backgroundPosition: "400px", backgroundSize: "400px" }}
                            transition={{ duration: .5, delay: 1.5, backgroundPosition: { delay: 1.6, duration: 1 } }}
                        >
                            TO
                        </motion.span>
                        <AnimatePresence>
                            <motion.span
                                className="absolute left-20 movingColor"
                                initial={{ opacity: 0, backgroundPosition: "0px" }}
                                animate={{ opacity: 1, backgroundPosition: "400px", backgroundSize: "400px" }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .5, delay: 2, backgroundPosition: { delay: 2.1, duration: 1 } }}
                            >
                                {subTitle ? "HEAR" : "SEE"}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    </motion.div>;
};

export default Footer;