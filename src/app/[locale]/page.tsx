import HomeTest from "@/src/components/Home";
import { ServicesSection } from "../../components/services/ServicesSection";

export default function Home() {
    return (
        <main className="">
            {/*TO:DO basic styles for the side bar */}
            <div className="hidden pc:fixed top-0 left-0 w-[80px] h-[100vh] bg-purple-100 pc:flex flex-col justify-between">
                <p>top</p>
                <p>center</p>
                <p>botton</p>
            </div>
            <div className="pc:ml-[80px]">
                <ServicesSection />
                <HomeTest />
            </div>
        </main>
    );
}
