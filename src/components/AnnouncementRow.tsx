import { candidate } from "@/types/d";
import { Accordion, AccordionItem, Divider, Textarea } from "@nextui-org/react";

const AnnouncementRow = ({ candidates }: { candidates: candidate[] }) => {
  return (
    <>
      <div>
        <Accordion variant="bordered" >
          {candidates.map((candidate) => (
            <AccordionItem
              title={candidate.id + " - " + candidate.nombre_aspirante}
              subtitle={`Fecha inscripción: ${candidate.fecha_inscripcion}`}
            >
              <div>
              <Divider className="my-3 mb-5" />
                <p className="m-2 text-primary font-medium text-center text-xl">
                  {" "}
                  Detalles del aspirante{" "}
                </p>
                <div className="flex flex-wrap gap-3 items-center justify-between mx-4">
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
                    classNames={{inputWrapper: "bg-[#ffffff]"}}
                      maxRows={6}
                      label={"Observación:"}
                      variant="bordered"
                      labelPlacement="outside"
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
