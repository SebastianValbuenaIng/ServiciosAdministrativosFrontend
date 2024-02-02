'use client';

import Button from "@/components/ui/ButtonContinue";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Button as ButtonNextUI } from "@nextui-org/react";
import { useState } from "react";

interface Props {
    changeTab: (tab: string) => void;
}

// Datos de prueba para mostrar
const initialDataExperiencia = [
    {
        empresa: "Empresa 1",
        cargo: "Desarrollador",
        area: "Tecnología",
        funciones: "Pariatur enim dolor in ad ea in enim eu est occaecat adipisicing non.",
        duracion: "de 0 a 6 meses",
        motivoRetiro: "Do nisi magna exercitation nisi enim veniam.",
        nombreJefe: "Paulina Alvarado",
        telefono: "333333333",
        fechaIngreso: "03/06/2003",
        fechaTerminacion: "03/06/2003"
    },
    {
        empresa: "Empresa 1",
        cargo: "Desarrollador",
        area: "Tecnología",
        funciones: "Pariatur enim dolor in ad ea in enim eu est occaecat adipisicing non.",
        duracion: "de 0 a 6 meses",
        motivoRetiro: "Do nisi magna exercitation nisi enim veniam.",
        nombreJefe: "Paulina Alvarado",
        telefono: "333333333",
        fechaIngreso: "03/06/2003",
        fechaTerminacion: "03/06/2003"
    },
    {
        empresa: "Empresa 1",
        cargo: "Desarrollador",
        area: "Tecnología",
        funciones: "Pariatur enim dolor in ad ea in enim eu est occaecat adipisicing non.",
        duracion: "de 0 a 6 meses",
        motivoRetiro: "Do nisi magna exercitation nisi enim veniam.",
        nombreJefe: "Paulina Alvarado",
        telefono: "333333333",
        fechaIngreso: "03/06/2003",
        fechaTerminacion: "03/06/2003"
    }
];

export const ConsultarExperiencia = ({ changeTab }: Props) => {
    const [agregarExperiencia, setAgregarExperiencia] = useState(false);

    return (
        <section>
            <h2 className="text-2xl font-semibold text-center my-8">Consultar Experiencia</h2>

            <div className="w-full max-w-[1400px] flex-center">
                <div className="flex-center flex-col items-end justify-start">
                    <ButtonNextUI color="primary" className="m-2 font-semibold" onClick={() => setAgregarExperiencia(!agregarExperiencia)}>
                        Agregar experiencia
                    </ButtonNextUI>

                    {
                        agregarExperiencia && (
                            <div>
                                <p>Mostrar form</p>
                            </div>
                        )
                    }

                    <Table isStriped aria-label="Example static collection table" className="overflow-x-auto w-72 md:w-96 lg:w-full">
                        <TableHeader className="text-center">
                            <TableColumn>Nombre de la empresa</TableColumn>
                            <TableColumn>Cargo</TableColumn>
                            <TableColumn>Área</TableColumn>
                            <TableColumn>Funciones</TableColumn>
                            <TableColumn>Duración</TableColumn>
                            <TableColumn>Motivo del Retiro</TableColumn>
                            <TableColumn>Nombre del Jefe</TableColumn>
                            <TableColumn>Teléfono</TableColumn>
                            <TableColumn>Fecha de Ingreso</TableColumn>
                            <TableColumn>Fecha de Terminación</TableColumn>
                            <TableColumn>Eliminar</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {
                                initialDataExperiencia.map((data, index) => (
                                    <TableRow key={index} className="text-center">
                                        <TableCell>{data.empresa}</TableCell>
                                        <TableCell>{data.cargo}</TableCell>
                                        <TableCell>{data.area}</TableCell>
                                        <TableCell>{data.funciones}</TableCell>
                                        <TableCell>{data.duracion}</TableCell>
                                        <TableCell>{data.motivoRetiro}</TableCell>
                                        <TableCell>{data.nombreJefe}</TableCell>
                                        <TableCell>{data.telefono}</TableCell>
                                        <TableCell>{data.fechaIngreso}</TableCell>
                                        <TableCell>{data.fechaTerminacion}</TableCell>
                                        <TableCell className="hover:cursor-pointer"><i className="bi bi-x-circle-fill text-primary text-2xl"></i></TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>

            <div className="flex flex-center mt-8">
                <div className="flex gap-3">
                    <div>
                        <button className="h-10 border-2 select-none justify-center rounded-xl text-base font-medium items-center normal-shadow hover:font-semibold border-borders-light hover:border-primary bg-default-white hover:text-primary transition-all flex gap-1 w-40" onClick={() => changeTab('detalles-cargo')}>
                            <i className='bi bi-caret-left mr-2 text-xl'></i>
                            Volver
                        </button>
                    </div>
                    <div className="w-40">
                        <Button text="Continuar" icon="caret-right" onClick={() => changeTab('consultar-publicaciones')} />
                    </div>
                </div>
            </div>
        </section>
    )
}