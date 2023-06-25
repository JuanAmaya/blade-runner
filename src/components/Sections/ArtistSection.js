import ArtistCard from "../UI/ArtistCard";
import SectionTitle from "../UI/SectionTitle";

const ARTISTS = [
    {
        id: 1,
        view: "A",
        profID: "1967",
        imgSrc: "./images/crew/denis.jpg",
        occ: "Director",
        name: "Denis Villeneuve"
    },
    {
        id: 2,
        view: "B",
        profID: "1938",
        imgSrc: "./images/crew/hampton.jpg",
        occ: "Writter",
        name: "Hampton Fancher"
    },
    {
        id: 3,
        view: "C",
        profID: "1973",
        imgSrc: "./images/crew/michael.jpg",
        occ: "Writter",
        name: "Michael Green"
    },
];

const ArtistSection = () => {
    return <div>
        <SectionTitle
            num={"03"}
            title={"There is a little bit of every artist in their work"}
        />

        <div className="grid grid-cols-crew justify-items-center gap-8">
            {ARTISTS.map((artist) => <ArtistCard
                key={artist.id}
                view={artist.view}
                profID={artist.profID}
                imgSrc={artist.imgSrc}
                occ={artist.occ}
                name={artist.name}
            />)}
        </div>
    </div>;
};

export default ArtistSection;