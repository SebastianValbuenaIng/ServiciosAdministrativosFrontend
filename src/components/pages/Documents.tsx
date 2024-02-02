"use client";

import { useRouter } from "next/navigation";
import { Accordion, AccordionItem } from "@nextui-org/react";
import OptionDocument from "../OptionDocument";
import { docBoletines, docDesarrollo, docInfoGestion, infoBotones } from "@/data";

const Documents = () => {
    const router = useRouter();

    return (
        <>
            <div className="mx-auto mt-5 w-[95%] max-w-[1300px]">
                <Accordion
                    itemClasses={{
                        content: "gap-8 my-10 flex flex-wrap justify-center",
                        title: "font-medium text-xl",
                        indicator: "text-xl",
                    }}
                >
                    <AccordionItem
                        key="1"
                        aria-label="Informes de gestión"
                        title="Informes de gestión"
                    >
                        {docInfoGestion.map((item, index) => (
                            <OptionDocument
                                key={index}
                                text={item.text}
                                icon="filetype-pdf"
                                route={item.link}
                            />
                        ))}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Boletines" title="Boletines">
                        {docBoletines.map((item, index) => (
                            <OptionDocument
                                key={index}
                                text={item.text}
                                icon="filetype-pdf"
                                route={item.link}
                            />
                        ))}
                    </AccordionItem>
                    <AccordionItem
                        key="3"
                        aria-label="Plan de desarrollo"
                        title="Plan de desarrollo"
                    >
                        {docDesarrollo.map((item, index) => (
                            <OptionDocument
                                key={index}
                                text={item.text}
                                icon="filetype-pdf"
                                route={item.link}
                            />
                        ))}
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Otros" title="Otros">
                        {infoBotones.map((item, index) => (
                            <OptionDocument
                                key={index}
                                text={item.text}
                                icon="filetype-pdf"
                                route={item.link}
                            />
                        ))}
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="justify-center text-center h-[90px]">
                <button 
                    className="mx-5 mt-[30px] w-[125px] min-w-[100px] max-w-xs h-12 lg:text-base text-center rounded-xl transition-all normal-shadow bg-default-white font-semibold text-primary hover:bg-primary hover:text-default-white "
                    onClick={() => router.back()}
                >
                    Volver
                </button>
            </div>
        </>
    );
};

export default Documents;