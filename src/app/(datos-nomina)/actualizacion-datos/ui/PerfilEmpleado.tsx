'use client';

import { Textarea, Tooltip } from "@nextui-org/react";
import Button from "@/components/ui/ButtonContinue";

interface Props {
    changeTab: (tab: string) => void;
}

export const PerfilEmpleado = ({ changeTab }: Props) => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-center my-8">Perfil Empleado</h2>

            <form className="w-full max-w-[1400px]">
                <div className="flex flex-wrap w-full max-w-[1000px] flex-center gap-6">
                    <div className="flex flex-col gap-2 items-center justify-center md:ml-4">
                        <p className="text-dark-red text-xs underline text-center">Solo citar títulos obtenidos. No poner en ningún caso {"postulante"} o {"candidato"}</p>
                        {/* Validar que no escriba postulante o candidato */}
                        <Textarea
                            label="Título de pregrado y universidad que lo confirió"
                            placeholder="Ejemplo: Ingeniería Eléctrica conferido por Escuela Colombiana de Ingeniería Julio Garavito"
                            className="max-w-full placeholder:text-red placeholder-shown:text-dark-red placeholder:text-sm "
                            classNames={{
                                base: "text-sm",
                                inputWrapper: "text-sm",
                                label: "py-2",
                                input: "bg-gray-box text-sm rounded p-1",
                            }}
                            isRequired
                        />
                    </div>

                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className="text-dark-red text-xs underline text-center">Títulos de posgrado en el siguiente orden: especialización, maestría y doctorado.</p>
                        <Textarea
                            label="Títulos de posgrado y universidad que lo confirió"
                            placeholder="Ejemplo: Magister en Ingeniería Eléctrica conferido por Universidad de Los Andes"
                            className="max-w-full"
                            classNames={{
                                base: "text-sm",
                                inputWrapper: "text-sm",
                                label: "py-2",
                                input: "bg-gray-box text-sm rounded p-1",
                            }}
                            endContent={
                                <Tooltip
                                    content={
                                        <div className="w-28">
                                            <p className="text-xs">Indicar el nombre de la institución, sin repetirlo en caso de que dos o más títulos los haya obtenido en la misma. No se citan cursos o diplomados u otras actividades no conducentes a título.</p>
                                        </div>
                                    }
                                >
                                    <button className="absolute right-5 top-3">
                                        <i className="bi bi-info-circle-fill text-red text-xl"></i>
                                    </button>
                                </Tooltip>
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2 items-center justify-center">
                        {/* Validar que no escriba postulante o candidato */}
                        <Textarea
                            label="Cargos directivos o dirección de proyectos destacados"
                            placeholder="Ejemplo: Ingeniería Eléctrica conferido por Escuela Colombiana de Ingeniería Julio Garavito"
                            className="max-w-full placeholder:text-red placeholder-shown:text-dark-red placeholder:text-sm "
                            classNames={{
                                base: "text-sm",
                                inputWrapper: "text-sm",
                                label: "py-2",
                                input: "bg-gray-box text-sm rounded p-1",
                            }}
                            isRequired
                            endContent={
                                <Tooltip
                                    content={
                                        <div className="w-36">
                                            <p className="text-xs"> En el caso de los profesores de cátedra, poner sólo el cargo y el nombre de la empresa actual. Empresas anteriores no.</p>
                                        </div>
                                    }
                                >
                                    <button className="absolute right-5 top-3">
                                        <i className="bi bi-info-circle-fill text-red text-xl"></i>
                                    </button>
                                </Tooltip>
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2 items-center justify-center">
                        <Textarea
                            label="Membresías"
                            placeholder="Ejemplo: IEEE, ASCE"
                            className="max-w-full w-[409px]"
                            classNames={{
                                base: "text-sm",
                                inputWrapper: "text-sm",
                                label: "py-2",
                                input: "bg-gray-box text-sm rounded p-1",
                            }}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center md:flex-row gap-6">
                        <div className="flex flex-col gap-2 items-center justify-center">
                            {/* Validar que no escriba postulante o candidato */}
                            <Textarea
                                label="Reconocimientos: premios, becas, condecoraciones"
                                placeholder="Ejemplo: Premio Nacional de Investigación 2023"
                                className="max-w-full placeholder:text-red placeholder-shown:text-dark-red placeholder:text-sm "
                                classNames={{
                                    base: "text-sm",
                                    inputWrapper: "text-sm",
                                    label: "py-2",
                                    input: "bg-gray-box text-sm rounded p-1",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </form>

            <div className="flex flex-center mt-8">
                <div className="flex gap-3">
                    <div>
                        <button className="h-10 border-2 select-none justify-center rounded-xl text-base font-medium items-center normal-shadow hover:font-semibold border-borders-light hover:border-primary bg-default-white hover:text-primary transition-all flex gap-1 w-40" onClick={() => changeTab('redes-sociales')}>
                            <i className='bi bi-caret-left mr-2 text-xl'></i>
                            Volver
                        </button>
                    </div>
                    <div className="w-40">
                        <Button text="Continuar" icon="caret-right" onClick={() => changeTab('detalles-cargo')} />
                    </div>
                </div>
            </div>
        </section>
    )
}