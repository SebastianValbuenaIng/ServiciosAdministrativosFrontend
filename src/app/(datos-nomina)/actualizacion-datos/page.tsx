import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PrincipalTabs } from "./ui";

export default function ActualizacionDatosPage() {
    return (
        <>
            <main className="mb-10 mt-10">
                <Header />
                <div className="justify-center text-center mt-10 h-[90px]">
                    <Link href="/">
                        <button
                            className="mx-5 mt-[30px] w-[125px] min-w-[100px] max-w-xs h-12 lg:text-base text-center rounded-xl transition-all normal-shadow bg-default-white font-semibold text-primary hover:bg-primary hover:text-default-white "
                        >
                            Volver
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col items-center justify-center gap-8">
                    <PrincipalTabs/>
                </div>
            </main>
            <Footer />
        </>
    );
}