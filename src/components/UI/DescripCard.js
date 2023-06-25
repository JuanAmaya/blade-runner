import { motion } from "framer-motion";

const DescripCard = ({ sectionNum, title, descrip, imgSrc, imgAlt, translate }) => {
    const descVariants = {
        offscreen: {
            opacity: 0,
            y: 20
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return <motion.div
        className={`md:w-1/2 ${translate}`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
    >
        <motion.div
            className="flex flex-col gap-4 md:flex-row"
            variants={descVariants}
        >
            <div className="border-2 border-main-lightBlue md:w-0 md:flex-1">
                <img src={imgSrc} alt={imgAlt}
                    className="bg-cover object-cover h-36 w-full md:h-full"
                />
            </div>
            <div className="flex flex-col gap-2 md:w-0 md:flex-1">
                <h2
                    className="text-main-lightBlue text-3xl"
                >
                    Section {sectionNum}
                </h2>
                <h3
                    className="bg-main-lightBlue text-main-black text-xl p-2"
                >
                    {title}
                </h3>
                <p className="text-main-lightBlue">{descrip}</p>
            </div>
        </motion.div>
    </motion.div>;
};

export default DescripCard;