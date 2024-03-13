import React from "react";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import localFont from "next/font/local";
import { ThemeProvider } from "@/src/providers/ThemeProvider";
import { Header } from "@/src/components/header/Header";
import { BackgroundImages } from "@/src/components/backgroundImages/BackgroundImages";
import "./globals.css";

const caviar = localFont({
    src: [
        {
            path: "../../fonts/CaviarDreams/CaviarDreams.ttf",
            weight: "400",
            style: "normal",
        },

        {
            path: "../../fonts/CaviarDreams/CaviarDreams_Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-caviar",
});

const geist = localFont({
    src: [
        {
            path: "../../fonts/Geist/Geist-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-geist",
});

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = await getTranslations({ locale, namespace: "Home" });

    return {
        title: t("title"),
        description: "Generated by create next app",
    };
}

export default function LocaleLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = useMessages();

    const cookieStore = cookies();
    const userTheme = cookieStore.get("theme") || { value: "dark" };

    return (
        <html lang={locale} suppressHydrationWarning>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <body
                    className={`${caviar.variable} ${geist.variable} overflow-x-hidden
                    ${userTheme?.value === "dark" ? "bg-purple-400" : "bg-grey"}`}
                >
                    <BackgroundImages />
                    <ThemeProvider>
                        <Header />
                        <main>{children}</main>
                        <footer></footer>
                    </ThemeProvider>
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
