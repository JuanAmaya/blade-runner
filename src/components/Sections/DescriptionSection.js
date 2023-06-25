import DescripCard from "../UI/DescripCard";

const DESCRIPTIONS = [
    {
        id: 1,
        sectionNum: "01",
        title: "Do Androids Dream of Electric Sheep?",
        descrip: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K (Ryan Gosling), unearths a long buried secret that has the potential to plunge what’s left of society into chaos. K’s discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former LAPD blade runner who has been missing for 30 years.",
        imgSrc: "./images/previews/wallace2.jpg",
        imgAlt: "Wallace Corporation",
    },
    {
        id: 2,
        sectionNum: "02",
        title: "Before we even know what we are, we fear to lose it",
        descrip: "The Replicants are essentially AI systems given advanced bioengineered bodies designed to replicate the physical abilities and intellectual capacities of humans. They’re put in dangerous scenarios without the need to risk actual human lives.",
        imgSrc: "./images/previews/lasvegas.jpg",
        imgAlt: "Las Vegas 2049",
        translate: "rightDesc"
    }
];

const DescriptionSection = () => {
    return <div className="flex flex-col gap-4">
        {DESCRIPTIONS.map((description) => <DescripCard
            key={description.id}
            sectionNum={description.sectionNum}
            title={description.title}
            descrip={description.descrip}
            imgSrc={description.imgSrc}
            imgAlt={description.imgAlt}
            translate={description.translate}
        />)}
    </div>;
};

export default DescriptionSection;