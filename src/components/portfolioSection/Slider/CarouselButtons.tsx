import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { ArrowIcon } from "./ArrowIcon";

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

type ButtonType = PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
>;

export const PrevButton: React.FC<ButtonType> = props => {
    const { ...restProps } = props;

    return (
        <button
            className="embla__button--prev flex justify-center items-center w-12 h-12 border-t border-b border-red group 
            after:content-[''] after:absolute  after:w-[0px] after:h-[0px] after:rounded-full  after:bg-purple-stroke03 
            after:scale-0 after:origin-center after:ease-out after:duration-[600ms] after:blur-[2px]
            hover:after:transition-scale hover:after:ease-out hover:after:duration-[600ms] 
            hover:after:scale-100 hover:after:blur-[2px] hover:after:w-12 hover:after:h-12
            focus-visible:after:transition-scale focus-visible:after:ease-out focus-visible:after:duration-[600ms]
            focus-visible:after:scale-100  focus-visible:after:blur-[2px] focus-visible:after:w-12 focus-visible:after:h-12 
            focus-visible:outline-none focus-within:outline-none"
            type="button"
            {...restProps}
        >
            <ArrowIcon />
        </button>
    );
};

export const NextButton: React.FC<ButtonType> = props => {
    const { ...restProps } = props;

    return (
        <button
            className="embla__button--next relative flex justify-center items-center w-12 h-12 border-t border-b border-red rotate-180 group 
            after:content-[''] after:absolute  after:w-[0px] after:h-[0px] after:rounded-full  after:bg-purple-stroke03 
            after:scale-0 after:origin-center after:ease-out after:duration-[600ms] after:blur-[2px]
            hover:after:transition-scale hover:after:ease-out hover:after:duration-[600ms] 
            hover:after:scale-100 hover:after:blur-[2px] hover:after:w-12 hover:after:h-12
            focus-visible:after:transition-scale focus-visible:after:ease-out focus-visible:after:duration-[600ms]
            focus-visible:after:scale-100  focus-visible:after:blur-[2px] focus-visible:after:w-12 focus-visible:after:h-12 
            focus-visible:outline-none focus-within:outline-none
            "
            type="button"
            {...restProps}
        >
            <ArrowIcon />
        </button>
    );
};
