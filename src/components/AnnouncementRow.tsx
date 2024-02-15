import { candidate } from "@/types/d";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import Textarea from "./forms/TextareaForm";

const AnnouncementRow = ({ candidates }: { candidates: candidate[] }) => {
  return (
    <>
      <div>
        <Accordion variant="bordered">
          {candidates.map((candidate, i) => (
            <AccordionItem
              key={i}
              title={candidate.id + " - " + candidate.nombre_aspirante}
              subtitle={`Fecha inscripción: ${candidate.fecha_inscripcion}`}
            >
              <div>
                <Divider className="my-3 mb-5" />
                <p className="m-2 text-primary font-medium text-center text-xl">
                  {" "}
                  Detalles del aspirante{" "}
                </p>
                <div className="flex flex-wrap md:gap-3 md:mx-10 items-center justify-between mx-4">
                  <div>
                    <p>
                      <b>Nombre: </b> {candidate.nombre_aspirante}
                    </p>
                    <p>
                      {" "}
                      <b>Estado: </b> {candidate.estado}
                    </p>
                    <p>
                      {" "}
                      <b>Género: </b> {candidate.genero}
                    </p>
                  </div>

                  <div>
                    <p>
                      {" "}
                      <b>Fecha Inscripción: </b> {candidate.fecha_inscripcion}
                    </p>
                    <p>
                      {" "}
                      <b>Género: </b> {candidate.fecha_inscripcion}
                    </p>
                    <p>
                      {" "}
                      <b>Fecha de nacimiento: </b> {candidate.fecha_nacimiento}
                    </p>
                  </div>
                </div>
                <div className="my-4 mx-4 md:mx-10">
                  <Textarea
                    name="observation"
                    classNames={{ inputWrapper: "bg-[#ffffff]" }}
                    label={"Observación:"}
                  ></Textarea>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default AnnouncementRow;
