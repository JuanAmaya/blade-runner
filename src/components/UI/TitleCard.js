import { motion } from "framer-motion";

const TitleCard = () => {
    const titleVariants = {
        hidden: {
            scaleY: 0
        },
        visible: {
            scaleY: 1,
            transition: {
                duration: .15,
                delay: .3
            }
        }
    };

    return <div
        className="absolute -bottom-12 left-1/2 -translate-x-1/2"
    >
        <motion.div
            className="w-fit p-4 relative bg-main-black/75"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="text-main-lightBlue flex justify-between">
                <span>8.0 | 607K</span>
                <span>2:43</span>
            </div>
            <h1 className="text-2xl text-center md:text-4xl">Blade Runner 2049</h1>
            <div className="text-main-lightBlue flex justify-between">
                <span>Sci-Fi</span>
                <span>Thriller</span>
            </div>
            <div>
                <div className="absolute border-l-4 border-danger-red top-1/2 bottom-0 -translate-y-1/2 left-0"></div>
                <div className="absolute border-r-4 border-danger-red top-1/2 bottom-0 -translate-y-1/2 right-0"></div>
                <div className="absolute border-t-4 border-danger-red left-1/2 right-1/4 -translate-x-1/2 top-0"></div>
                <div className="absolute border-b-4 border-danger-red left-1/2 right-1/4 -translate-x-1/2 bottom-0"></div>
            </div>
        </motion.div>
    </div>;
};

export default TitleCard;