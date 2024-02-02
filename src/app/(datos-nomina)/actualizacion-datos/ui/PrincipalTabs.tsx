'use client';

import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { InformacionEmpleado, PerfilEmpleado, RedesSociales, ConsultarExperiencia } from ".";
import { ConsultarPublicaciones } from "./ConsultarPublicaciones";
import { DetallesDelCargo } from "./DetallesDelCargo";

export const PrincipalTabs = () => {
    const [selected, setSelected] = useState("informacion-empleado");

    return (
        <div className="flex flex-col justify-center items-center mt-7">
            <Tabs
                aria-label="menu-empleado"
                className="hidden md:block"
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key.toString())}
            >
                <Tab key='informacion-empleado' title='Información Empleado' className="select-none">
                    {/* Información empleado */}
                    <InformacionEmpleado changeTab={setSelected} />
                </Tab>

                <Tab key='redes-sociales' title='Redes Sociales' className="select-none">
                    {/* Redes sociales */}
                    <RedesSociales changeTab={setSelected} />
                </Tab>

                <Tab key='perfil-empleado' title='Perfil Empleado' className="select-none">
                    {/* Perfil Empleado */}
                    <PerfilEmpleado changeTab={setSelected} />
                </Tab>

                <Tab key='detalles-cargo' title='Detalles del Cargo' className="select-none">
                    {/* Detalles del Cargo */}
                    <DetallesDelCargo changeTab={setSelected} />
                </Tab>

                <Tab key='consultar-experiencia' title='Consultar Experiencia' className="select-none">
                    {/* Consultar Experiencia */}
                    <ConsultarExperiencia changeTab={setSelected} />
                </Tab>

                <Tab key='consultar-publicaciones' title='Consultar Publicaciones' className="select-none">
                    {/* Consultar Publicaciones */}
                    <ConsultarPublicaciones changeTab={setSelected} />
                </Tab>
            </Tabs>

            {/* Guardar cambios */}
        </div>
    )
}