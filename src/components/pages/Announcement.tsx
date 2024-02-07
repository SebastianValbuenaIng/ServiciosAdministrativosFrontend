"use client";

import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import TableAnnouncement from "../table/TableAnnouncement";
import { Announcement1, candidates } from "@/libs/staticData";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import { Announcement } from "@/types/d";
import AnnouncementRow from "../AnnouncementRow";
import AnnouncementEdit from "../AnnouncementEdit";
import { InitialAnnouncement } from "@/libs/initialsStates";

const Announcement = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contenModal, setContenModal] = useState<string>("");

  const [selectedId, setSelectedId] = useState<string>("");
  const [selectedRow, setSelecteRow] = useState<Announcement>(InitialAnnouncement);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<string>("");

  const candidate = candidates.find(
    (candidate) => candidate.id === selectedAnnouncement
  );

  useEffect(() => {
    if (selectedId !== "") {
      setShowModal(true);
    }

    const user = Announcement1.find(
      (announcement) => announcement.id === selectedId
    );

    if (!user) return;

    setSelecteRow(user);
    setShowModal(true);
  }, [selectedId]);

  useEffect(() => {
    if (!showModal) setSelectedId("");
  }, [showModal]);

  return (
    <>
        <TableAnnouncement
          announcement={Announcement1}
          selectedDataAnnouncemnt={(id, action) => {
            setSelectedId(id);
            setContenModal(action);
          }}
        />

      <Modal
        isOpen={showModal}
        setIsOpen={setShowModal}
        classContainer={contenModal === "edit" ? "max-w-[1200px]" :"max-w-[750px]"}
      >
        <i
          className="bi bi-x absolute text-borders top-2 right-3 hover:text-primary text-3xl transition-all cursor-pointer"
          onClick={() => setShowModal(false)}
        ></i>
        {contenModal === "info" && (
          <>
            <h1 className="mb-4 mt-6 md:mt-2 text-center text-2xl font-bold text-primary mx-auto justify-center items-center">
              {selectedRow?.nombre}
            </h1>
            <section className="flex flex-wrap mx-4 justify-between">
              <div>
                <p>
                  <b>ID:</b> {selectedRow?.id}
                </p>
                <p>
                  <b>Fecha Inicio: </b>
                  {selectedRow?.fecha_inicio}
                </p>
                <p>
                  <b>Fecha Fin: </b>
                  {selectedRow?.fecha_fin}
                </p>
                <p>
                  <b>Descripción:</b> {selectedRow?.descripcion}
                </p>
              </div>
              <div>
                <p>
                  <b>Tipo de convocatoria:</b>{" "}
                  {selectedRow?.tipo_convocatoria === "1"
                    ? "Cátedra"
                    : "Planta"}
                </p>
                <p>
                  <b>Período: </b>
                  {selectedRow?.periodo}
                </p>
                <p>
                  <b>Persona Responsable: </b>
                  {selectedRow?.persona_responsable}
                </p>
                <p>
                  <b>Director del área: </b>
                  {selectedRow?.director_area}
                </p>
              </div>
            </section>
          </>
        )}
        {contenModal === "edit" && (
          <>
            <h1 className="mb-4 mt-6 md:mt-2 text-center text-2xl font-bold text-primary mx-auto justify-center items-center">
              Editar {selectedRow?.nombre}
            </h1>
            <AnnouncementEdit selectedRow={selectedRow}/>
          </>
        )}
        {contenModal === "person" && (
          <>
            <h1 className="mb-4 mt-6 md:mt-2 text-center text-2xl font-bold text-primary mx-auto justify-center items-center">
              Aspirantes a {selectedRow?.nombre}
            </h1>
            <AnnouncementRow candidates={candidates} />
          </>
        )}
      </Modal>
    </>
  );
};

export default Announcement;
