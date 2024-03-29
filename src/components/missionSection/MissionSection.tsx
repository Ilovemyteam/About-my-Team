import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { BenefitsList } from "./Benefits/BenefitsList";
import { MissionTitle } from "./Title/MissionTitle";
import { StagesList } from "./StagesList";

export const MissionSection = () => {
    return (
        <Section>
            <MissionTitle />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                <div className="hidden pc:block absolute top-[-64px] left-0 w-[511px] h-[530px] ml-[-60px] bg-purple-100"></div>
                <BenefitsList />
                <Button className="">Button</Button>
            </div>
            <StagesList />
        </Section>
    );
};
