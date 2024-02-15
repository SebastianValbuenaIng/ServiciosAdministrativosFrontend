"use client";

import { SelectItem } from "@nextui-org/react";
import Button from "./Button";
import { Announcement } from "@/types/d";
import Textarea from "./forms/TextareaForm";
import InputForm from "./forms/InputForm";
import SelectForm from "./forms/SelectForm";

const AnnouncementEdit = ({ selectedRow }: { selectedRow: Announcement }) => {
  return (
    <>
      <p className="mb-2 text-primary ml-2 text-start text-sm select-none">
        Campos obligatorios (<i className="bi bi-asterisk text-xs"></i>)
      </p>
      <div className="grid grid-cols-1 md:flex mx-auto p-4 gap-4 justify-between">
        <div className="w-full mx-auto">
          <InputForm
            name="name"
            onChange={() => {}}
            defaultValue={selectedRow.nombre}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            type="string"
            isRequired
            label="Nombres convocatoría:"
          />
          <InputForm
            defaultValue={selectedRow.fecha_inicio}
            name="name"
            onChange={() => {}}
            className="mt-2"
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            type="date"
            isRequired
            label="Fecha Inicio:"
          />
          <SelectForm
            name="name"
            onChange={() => {}}
            classNames={{
              trigger: "bg-[#ffffff]",
            }}
            className="mt-2"
            defaultValue={selectedRow.periodo}
            placeholder="Seleccione Periodo de la convocatoria"
            label="Periodo:"
          >
            <SelectItem key={"2023-1"}>2023-1 </SelectItem>
            <SelectItem key={"2023-2"}>2023-2 </SelectItem>
            <SelectItem key={"2024-1"}>2024-1 </SelectItem>
            <SelectItem key={"2024-2"}>2024-1 </SelectItem>
          </SelectForm>
          <InputForm
            name="name"
            onChange={() => {}}
            defaultValue={selectedRow.persona_responsable}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            className="mt-2"
            type="text"
            isRequired
            label="Persona Responsable:"
          />
          <InputForm
            name="name"
            onChange={() => {}}
            defaultValue={selectedRow.director_area}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            className="mt-2"
            type="text"
            isRequired
            label="Director del área:"
          />
        </div>
        <div className="w-full mx-auto">
          <SelectForm
            name="name"
            onChange={() => {}}
            classNames={{
              trigger: "bg-[#ffffff]",
            }}
            defaultValue={selectedRow.tipo_convocatoria}
            placeholder="Seleccione tipo de la convocatoria"
            label="Tipo de convocatoria:"
          >
            <SelectItem key={1}>Planta </SelectItem>
            <SelectItem key={2}>Cátedra </SelectItem>
          </SelectForm>
          <InputForm
            name="name"
            onChange={() => {}}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            defaultValue={selectedRow.fecha_fin}
            type="date"
            className="mt-2"
            isRequired
            label="Fecha fin:"
          />
          <Textarea
            name="description"
            minRows={7}
            defaultValue={selectedRow.descripcion}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            className="mt-2"
            label="Descripción de convocatoria:"
          />
        </div>
      </div>
      <div className="w-[200px] mx-auto mt-5">
        <Button text="Guardar" onClick={() => {}} />
      </div>
    </>
  );
};

export default AnnouncementEdit;
