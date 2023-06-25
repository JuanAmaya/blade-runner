import SectionTitle from "../UI/SectionTitle";
import ShopCard from "../UI/ShopCard";

const SHOPS = [
    {
        id: 1,
        logo: "./images/logos/amazon.png",
        shopName: "Amazon",
        shopUrl: "https://www.amazon.com/Blade-Runner-2049-BD-Blu-ray/dp/B075DHS7JK"
    },
    {
        id: 2,
        logo: "./images/logos/walmart.png",
        shopName: "Walmart",
        shopUrl: "https://www.walmart.com.mx/ip/blu-ray/blade-runner-2049-blade-runner-final-cut-boxset-blu-ray-warner-bros-blu-ray/00088392963612?utm_source=google&utm_medium=cpc&utm_advertiser=wmea_pmax-market-place&utm_campaign=&utm_term=_&utm_content=&gad=1&gclid=EAIaIQobChMIjOfb6ejX_wIVbi6tBh1cQAKaEAQYASABEgJIMvD_BwE"
    },
    {
        id: 3,
        logo: "./images/logos/bestBuy.png",
        shopName: "Best Buy",
        shopUrl: "https://www.bestbuy.com/site/blade-runner-2049-blu-ray-2017/6171924.p?intl=nosplash&skuId=6171924"
    },
    {
        id: 4,
        logo: "./images/logos/target.png",
        shopName: "Target",
        shopUrl: "https://www.target.com/p/blade-runner-2049-blu-ray/-/A-53151605"
    },
];

const ShopSection = () => {
    return <div>
        <SectionTitle
            num={"06"}
            title={"Because You've Never Seen A Miracle"}
        />

        <div className="grid grid-cols-logos gap-4 justify-items-center">
            {SHOPS.map((shop) => <ShopCard
                key={shop.id}
                logo={shop.logo}
                shopName={shop.shopName}
                shopUrl={shop.shopUrl}
            />)}
        </div>
    </div>;
};

export default ShopSection;