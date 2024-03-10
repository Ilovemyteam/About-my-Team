import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "16px",
                pc: "60px",
            },
        },
        screens: {
            tab: "768px",
            pc: "1280px",
            desk: "1536px",
        },
        fontSize: {
            xs: [
                "12px",
                {
                    lineHeight: "15px",
                },
            ],
            sm: [
                "14px",
                {
                    lineHeight: "17px",
                },
            ],
            base: [
                "16px",
                {
                    lineHeight: "20px",
                },
            ],
            baseb: [
                "16px",
                {
                    lineHeight: "20px",
                    fontWeight: "700",
                },
            ],
            lg: [
                "18px",
                {
                    lineHeight: "23px",
                    fontWeight: "700",
                },
            ],

            xl: [
                "20px",
                {
                    lineHeight: "25px",
                },
            ],

            xlb: [
                "20px",
                {
                    lineHeight: "25px",
                    fontWeight: "700",
                },
            ],
            "2xl": [
                "24px",
                {
                    lineHeight: "30px",
                    fontWeight: "700",
                },
            ],
            "3xl": [
                "28px",
                {
                    lineHeight: "35px",
                    fontWeight: "700",
                },
            ],
            "4xl": [
                "40px",
                {
                    lineHeight: "52px",
                    fontWeight: "700",
                },
            ],
            "5xl": [
                "48px",
                {
                    lineHeight: "48px",

                    fontWeight: "700",
                },
            ],
        },
        extend: {
            variants: {
                height: ["responsive", "hover", "focus"],
                fill: ["hover", "focus"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                geist: ["var(--font-geist)"],
                caviar: ["var(--font-caviar)"],
            },
            colors: {
                purple: {
                    50: "#BFB4FF",
                    100: "#A258FF",
                    200: "#1F0033",
                    300: "#54148A",
                    400: "#09002E",
                    stroke: "#5F3F87",
                    stroke03: "rgba(162, 88, 255, 0.3)",
                    dark: "#3C1E63",
                },
                white: "#FBF8FF",
                black: "#000000",
                grey: "#D4D4D4",
                red: "#FB7185",
            },
            content: {
                heart: 'url("/images/Heart.svg")',
                triangles: 'url("/images/Triangles.svg")',
            },
        },
        backgroundImage: {
            bgImage: 'url("/images/bgImage.png")',
            heart: 'url("/images/heart.svg")',
            triangles: 'url("/images/triangles.svg")',
            portfolioGradient:
                "linear-gradient(to right, #1E003D 0% , #3C0566 50%, #6607B1 100%)",
            CTAGradient:
                "linear-gradient(to right, #6607B1 0% , #3C0566 50%, #1E003D 100%)",
        },
    },
    plugins: [],
};
export default config;
