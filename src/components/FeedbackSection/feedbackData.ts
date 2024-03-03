import { useTranslations } from "next-intl";

export interface FeedbackDataItem {
    name: string;
    image: string;
    video?: string;
    siteView: string;
    description: string;
    id: string;
}

export const FeedbackData = (): FeedbackDataItem[] => {
    const getTranslation = useTranslations("Feedback");
    return [
        {
            name: getTranslation("siteNameWithId1"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146266/samples/dessert-on-a-plate.jpg",

            siteView: getTranslation("lending"),
            description: getTranslation("descriptionId1"),
            id: "1",
        },
        {
            name: getTranslation("siteNameWithId2"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146269/cld-sample-4.jpg",
            siteView: getTranslation("site"),
            description: getTranslation("descriptionId2"),
            id: "2",
        },
        {
            name: getTranslation("siteNameWithId3"),
            image: "https://loremflickr.com/640/480/cats",
            video: "https://res.cloudinary.com/dxvtacrde/video/upload/v1709063030/samples/dance-2.mp4",
            siteView: getTranslation("internetShop"),
            description: getTranslation("descriptionId3"),
            id: "3",
        },
        {
            name: getTranslation("siteNameWithId4"),
            image: "https://loremflickr.com/640/480/cats",
            siteView: getTranslation("businessCard"),
            description: getTranslation("descriptionId4"),
            id: "4",
        },
        {
            name: getTranslation("siteNameWithId4"),
            image: "https://loremflickr.com/640/480/cats",

            siteView: getTranslation("corporateSite"),
            description: getTranslation("descriptionId4"),
            id: "5",
        },
        {
            name: getTranslation("siteNameWithId4"),
            image: "https://loremflickr.com/640/480/cats",
            siteView: getTranslation("blog"),
            description: getTranslation("descriptionId4"),
            id: "6",
        },
    ];
};
