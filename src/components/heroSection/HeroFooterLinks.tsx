import Link from "next/link";
import { useTranslations } from "next-intl";
import { BuyMeCoffee } from "../shared/BuyMeCoffee";

export const HeroFooterLinks = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div className="flex justify-between items-baseline mt-8">
            <BuyMeCoffee />
            <Link
                href="#portfolio"
                className="relative pointer after:border-b-[1px] after:border-grey after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[3px] "
            >
                {getTranslation("portfolioLink")}
            </Link>
        </div>
    );
};
