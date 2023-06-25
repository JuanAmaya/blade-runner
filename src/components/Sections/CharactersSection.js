import CharacterCard from "../UI/CharacterCard";
import SectionTitle from "../UI/SectionTitle";

const CHARACTERS = [
    {
        id: 1,
        chaName: "K",
        race: "Nexus-9 Replicant",
        actorName: "Ryan Gosling",
        imgSrc: "./images/characters/k.jpg"
    },
    {
        id: 2,
        chaName: "Joi",
        race: "DiJi",
        actorName: "Ana de Armas",
        imgSrc: "./images/characters/joi.jpg"
    },
    {
        id: 3,
        chaName: "Rick Deckard",
        race: "REDACTED",
        actorName: "Harrison Ford",
        imgSrc: "./images/characters/deckard.jpg"
    },
    {
        id: 4,
        chaName: "Niander Wallace",
        race: "Human",
        actorName: "Jared Leto",
        imgSrc: "./images/characters/wallace.jpg"
    },
    {
        id: 5,
        chaName: "Luv",
        race: "Nexus-9 Replicant",
        actorName: "Sylvia Hoeks",
        imgSrc: "./images/characters/luv.jpg"
    },
    {
        id: 6,
        chaName: "Ana Stelline",
        race: "Human / Replicant",
        actorName: "Carla Juri",
        imgSrc: "./images/characters/ana.jpg"
    },
];

const CharacterSection = () => {
    return <div>
        <SectionTitle
            num={"05"}
            title={"To be born is to have a soul"}
        />

        <div className="grid grid-cols-character justify-items-center gap-8">
            {CHARACTERS.map((character) => <CharacterCard
                key={character.id}
                chaName={character.chaName}
                race={character.race}
                actorName={character.actorName}
                imgSrc={character.imgSrc}
            />)}
        </div>
    </div>;
};

export default CharacterSection;