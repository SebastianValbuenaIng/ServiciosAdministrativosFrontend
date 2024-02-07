"use client";

import { SelectItem, Textarea } from "@nextui-org/react";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./Button";
import { Announcement } from "@/types/d";

const AnnouncementEdit = ({ selectedRow }: { selectedRow: Announcement }) => {
  return (
    <>
    <p className="mb-2 text-primary lg:ml-14 text-start text-sm select-none">
        Campos obligatorios (<i className="bi bi-asterisk text-xs"></i>)
      </p>
      <div className="flex flex-wrap mx-auto items-center justify-between">
        <div className="w-[500px] mx-auto">
          <Input
            defaultValue={selectedRow.nombre}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            type="string"
            isRequired
            label="Nombres convocatoría:"
          />
          <Select
            className="mt-2"
            defaultValue={selectedRow.tipo_convocatoria}
            placeholder="Seleccione tipo de la convocatoria"
            label="Tipo de convocatoria:"
          >
            <SelectItem key={1}>Planta </SelectItem>
            <SelectItem key={2}>Cátedra </SelectItem>
          </Select>
          <Select
            className="mt-2"
            defaultValue={selectedRow.periodo}
            placeholder="Seleccione Periodo de la convocatoria"
            label="Periodo:"
          >
            <SelectItem key={"2023-1"}>2023-1 </SelectItem>
            <SelectItem key={"2023-2"}>2023-2 </SelectItem>
            <SelectItem key={"2024-1"}>2024-1 </SelectItem>
            <SelectItem key={"2024-2"}>2024-1 </SelectItem>
          </Select>
          <Input
            defaultValue={selectedRow.persona_responsable}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            className="mt-2"
            type="text"
            isRequired
            label="Persona Responsable:"
          />
          <Input
            defaultValue={selectedRow.director_area}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            className="mt-2"
            type="text"
            isRequired
            label="Director del área:"
          />
        </div>
        <div className="w-[500px] mx-auto">
          <Input
            defaultValue={selectedRow.fecha_inicio}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            type="date"
            isRequired
            label="Fecha Inicio:"
          />
          <Input
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            defaultValue={selectedRow.fecha_fin}
            type="date"
            className="mt-2"
            isRequired
            label="Fecha fin:"
          />
          <Textarea
            defaultValue={selectedRow.descripcion}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            className="mt-2"
            minRows={7}
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
