import { redirect } from "next/navigation";
import Image from "next/image";
import { getServerSession } from "next-auth";
import Header from "@/components/Header";
import OptionCards from "@/components/OptionCards";
import Footer from "@/components/Footer";
import { optionsCards } from "@/data";
import { AddStore } from "@/components/store/AddStore";
import { PersonaActiva } from "@/types";
import { NamePerson } from "@/components/data/NamePerson";
import fetchFn from "@/utils/fetchFn";

export default async function Index() {
    const session = await getServerSession();

    let infoPersona: PersonaActiva = {
        id: 0,
        nombre: "",
        nroDocumento: "",
        emplId: "",
        email: "",
        tipoDocumento: ""
    };

    if (session) {
        const email = session.user?.email || "";
        const domain = email.split("@")[1];
        if (domain === "escuelaing.edu.co") {
            const response = await fetchFn(`/personas?email=${email}`);
            if (response.code === 400) return redirect("/logout?error=auth");

            infoPersona = response.data;
        } else {
            return redirect("/logout?error=rol");
        }
    }

    return (
        <>
            <Header />
            <AddStore infoPersona={infoPersona} />
            <main>
                <div className="mt-20 mx-[500px] justify-center items-center rounded-xl">
                    <Image
                        className="mx-auto rounded-xl select-none"
                        src="/images/inicio/servi.png"
                        width={650}
                        height={200}
                        alt="ImagenRef"
                    />
                </div>
                <p className="mt-5 text-center text-3xl mb-5 text-primary font-semibold select-none">
                    Seleccione un servicio
                </p>
                <div>
                    <NamePerson />
                </div>
                <div className="mx-auto w-[95%] max-w-[1500px] gap-8 mt-5 mb-10 flex flex-wrap justify-center">
                    {
                        optionsCards.map(option => <OptionCards key={option.text} text={option.text} icon={option.icon} route={option.route} />)
                    }
                </div>
            </main>
            <Footer />
        </>
    );
}