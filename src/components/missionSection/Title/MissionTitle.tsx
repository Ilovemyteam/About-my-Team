import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { MobileTitle } from "./MobileTitle";
import { DesktopTitle } from "./DesktopTitle";

export const MissionTitle = () => {
    const getTranslation = useTranslations("Mission");

    return (
        <>
            <TitleWrapper className="flex flex-col pc:flex-row items-start">
                <SmallPageTitle className="ml-1 mr-3 mt-4 flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <DesktopTitle />
                <MobileTitle />
            </TitleWrapper>
        </>
    );
};
