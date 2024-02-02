'use client';

import InputForm from "@/components/forms/InputForm";
import SelectForm from "@/components/forms/SelectForm";
import Button from "@/components/ui/ButtonContinue";
import { SelectItem } from "@nextui-org/react";

interface Props {
    changeTab: (tab: string) => void;
}

export const DetallesDelCargo = ({ changeTab }: Props) => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-center my-8">Detalles del Cargo</h2>

            <form className="w-full max-w-[700px] flex flex-wrap flex-center gap-4">
                <div>
                    <InputForm
                        isRequired
                        name=""
                        type="text"
                        onChange={() => { }}
                        label='Ubicación (Bloque y oficina)'
                        classNames={{
                            inputWrapper: "pb-1",
                            errorMessage: "text-sm font-medium",
                            input: "bg-off-white w-56 text-sm",
                            label: "text-sm"
                        }}
                        className="max-w-xs"
                    />
                </div>

                <div>
                    <SelectForm
                        isRequired
                        name=""
                        type="text"
                        onChange={() => { }}
                        label='Área a la que pertenece'
                        className="max-w-xs w-56"
                    >
                        <SelectItem key='Osiris'>
                            Osiris
                        </SelectItem>
                    </SelectForm>
                </div>

                <div>
                    <SelectForm
                        isRequired
                        name=""
                        type="text"
                        onChange={() => { }}
                        label='Cargo'
                        className="max-w-xs w-72"
                    >
                        <SelectItem key='Osiris'>
                            DESARROLLADOR FULLSTACK
                        </SelectItem>
                    </SelectForm>
                </div>

                <div>
                    <InputForm
                        isRequired
                        name=""
                        type="number"
                        onChange={() => { }}
                        label="Extensión"
                        classNames={{
                            inputWrapper: "pb-1",
                            errorMessage: "text-sm font-medium",
                            input: "bg-off-white w-52 text-sm",
                            label: "text-sm"
                        }}
                        className="max-w-xs"
                    />
                </div>

                <div className="flex-center w-full gap-4">
                    <div>
                        <InputForm
                            isRequired
                            name=""
                            type="number"
                            onChange={() => { }}
                            label="Áreas de Interés"
                            classNames={{
                                inputWrapper: "pb-1",
                                errorMessage: "text-sm font-medium",
                                input: "bg-off-white w-60 text-sm",
                                label: "text-sm"
                            }}
                            className="max-w-xs"
                        />
                    </div>
                </div>
            </form>

            <div className="flex flex-center mt-8">
                <div className="flex gap-3">
                    <div>
                        <button className="h-10 border-2 select-none justify-center rounded-xl text-base font-medium items-center normal-shadow hover:font-semibold border-borders-light hover:border-primary bg-default-white hover:text-primary transition-all flex gap-1 w-40" onClick={() => changeTab('perfil-empleado')}>
                            <i className='bi bi-caret-left mr-2 text-xl'></i>
                            Volver
                        </button>
                    </div>
                    <div className="w-40">
                        <Button text="Continuar" icon="caret-right" onClick={() => changeTab('consultar-experiencia')} />
                    </div>
                </div>
            </div>
        </section>
    )
}