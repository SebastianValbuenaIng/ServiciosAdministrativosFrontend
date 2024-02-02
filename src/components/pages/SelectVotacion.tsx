"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { TailSpin } from "react-loader-spinner";
import toast from "react-hot-toast";
import Header from "@/components/Header";
import fetchFn from "@/libs/fetchFn";
import ButtonVot from "@/components/pages/ButtonVot";

export default function SelectVotacion({ error }: { error?: string }) {
    const { data: session, status } = useSession();
    const [loading, setloading] = useState(true);
    const [data, setData] = useState([]);
    const router = useRouter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getData = async () => {
        const response = await fetchFn(
            `/vot_act?estado=1&email=${session && session.user ? session.user.email : ""
            }`
        );

        if (response.error || response.code !== 200) return "/votaciones?error=server";
        
        setData(response.data);
        setloading(false);
    };

    useEffect(() => {
        if (status === "authenticated") getData();
    }, [getData, status]);

    useEffect(() => {
        if (error) {
            if (error === "server") toast.error("Ha ocurrido un error", { id: "1" });
            router.push("/votaciones");
        }
        if (error) {
            if (error === "e_ccl")
                toast.error("Usted ya votó a Comite de convivencia laboral", {
                    id: "2",
                });
            router.push("/votaciones");
        }
        if (error) {
            if (error === "e_copasst")
                toast.error("Usted ya votó a la Votación COPASST", { id: "3" });
            router.push("/votaciones");
        }
    }, [error, router]);

    return (
        <>
            <Header />
            
            {loading && (
                <div className="absolute ml-[40%] lg:ml-[47%] mt-[25%] lg:mt-[7%]  justify-center px-auto items-center ">
                    <TailSpin
                        height="80"
                        width="80"
                        color="#990000"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                    />
                </div>
            )}

            {!loading && (
                <>
                    <div className="mx-auto rounded-lg justify-center items-center text-center text-3xl text-primary font-bold mt-6 transition-all">
                        <h2 className="">Elija la votación</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto mt-10 items-center rounded-xl p-5 mb-10">
                        {data.map((item: any) =>
                            <ButtonVot
                                disabled={item.estado_voto === "1"}
                                key={item.id}
                                route={item.ruta ?? "/"}
                                text={item.nombre}
                            />
                        )}
                    </div>
                    <div className="text-center mt-[2%]">
                        <button
                            className="mx-5 w-[125px] h-11 font-semibold normal-shadow bg-default-white rounded-lg text-primary hover:text-default-white hover:bg-primary hover:border-transparent"
                            onClick={() => router.push("/")}
                        >
                            Volver
                        </button>
                    </div>
                </>
            )}
        </>
    );
}