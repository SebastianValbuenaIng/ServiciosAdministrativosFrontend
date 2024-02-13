"use client";

import { SelectItem } from "@nextui-org/react";
import Button from "./Button";
import InputForm from "./forms/InputForm";
import SelectForm from "./forms/SelectForm";
import Textarea from "./forms/TextareaForm";

const AnnouncementAdd = () => {
  return (
    <>
      <p className="mb-2 text-primary lg:ml-14 text-start text-sm select-none">
        Campos obligatorios (<i className="bi bi-asterisk text-xs"></i>)
      </p>
      <div className="flex flex-wrap mx-auto items-center justify-between">
        <div className="w-[500px] mx-auto">
          <InputForm
            name="names"
            isRequired
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            type="string"
            onChange={() => {}}
            label="Nombres convocatoría:"
          />
          <InputForm
            className="mt-2"
            name="date_start"
            placeholder="dd/mm/aaaa"
            onChange={() => {}}
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            type="date"
            isRequired
            label="Fecha Inicio:"
          />
          <SelectForm
            classNames={{
              trigger: "bg-[#ffffff]",
            }}
            name=""
            className="mt-2"
            placeholder="Seleccione Periodo de la convocatoria"
            onChange={() => {}}
            label="Periodo:"
          >
            <SelectItem key={"2023-1"}>2023-1 </SelectItem>
            <SelectItem key={"2023-2"}>2023-2 </SelectItem>
            <SelectItem key={"2024-1"}>2024-1 </SelectItem>
            <SelectItem key={"2024-2"}>2024-1 </SelectItem>
          </SelectForm>
          <InputForm
            name="person"
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            className="mt-2"
            type="text"
            onChange={() => {}}
            isRequired
            label="Persona Responsable:"
          />
          <InputForm
            name="director"
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            className="mt-2"
            type="text"
            onChange={() => {}}
            isRequired
            label="Director del área:"
          />
        </div>
        <div className="w-[500px] mx-auto">
          <SelectForm
            name="type"
            classNames={{
              trigger: "bg-[#ffffff]",
            }}
            placeholder="Seleccione tipo de la convocatoria"
            onChange={() => {}}
            label="Tipo de convocatoria:"
          >
            <SelectItem key={1}>Planta </SelectItem>
            <SelectItem key={2}>Cátedra </SelectItem>
          </SelectForm>
          <InputForm
            name="date_end"
            onChange={() => {}}
            placeholder="dd/mm/aaaa"
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            type="date"
            className="mt-2"
            isRequired
            label="Fecha fin:"
          />
          <Textarea
            name="description"
            classNames={{ inputWrapper: "bg-[#ffffff]" }}
            className="mt-2"
            onChange={() => {}}
            minRows={7}
            label="Descripción de convocatoria:"
          />
        </div>
      </div>
      <div className="w-[300px] flex gap-2 mx-auto mt-5">
        <Button text="Guardar" onClick={() => {}} />
        <Button text="Volver" route="/announcement" />
      </div>
    </>
  );
};

export default AnnouncementAdd;
