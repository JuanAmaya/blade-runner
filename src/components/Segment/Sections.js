import ArtistSection from "../Sections/ArtistSection";
import CharacterSection from "../Sections/CharactersSection";
import DescriptionSection from "../Sections/DescriptionSection";
import GallerySection from "../Sections/GallerySection";
import ShopSection from "../Sections/ShopSection";
import TrailerSection from "../Sections/TrailerSection";

const Sections = () => {
    return <div className="mx-4">
        <div className="flex flex-col gap-12 md:gap-20">
            <DescriptionSection />
            <ArtistSection />

            <TrailerSection
                sectionNum={"04"}
                desc={"The world is built on a wall"}
                videoSrc={"https://www.youtube.com/embed/gCcx85zbxz4"}
            />
            <CharacterSection />
            <ShopSection />

            <TrailerSection
                sectionNum={"07"}
                desc={"That baby meant we are more than just slaves"}
                videoSrc={"https://www.youtube.com/embed/videoseries?list=PLGHTvSlJY1dbxXIcm1X95SIVcKmDxru0H"}
            />

            <GallerySection />
        </div>
    </div>;
};

export default Sections;