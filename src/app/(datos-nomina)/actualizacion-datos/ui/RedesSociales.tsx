'use client';

import Button from "@/components/ui/ButtonContinue";
import InputForm from "@/components/forms/InputForm";

interface Props {
    changeTab: (tab: string) => void;
}

export const RedesSociales = ({ changeTab }: Props) => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-center my-8">Redes Sociales</h2>

            <form className="w-full max-w-[1400px]">
                <div className="flex flex-col md:flex-row gap-6 my-5">
                    <InputForm
                        isRequired={false}
                        name=""
                        onChange={() => { }}
                        type="text"
                        label="Link del CVLAC"
                        classNames={{
                            inputWrapper: "pb-1",
                            errorMessage: "text-sm font-medium",
                            input: "bg-off-white w-60 text-sm",
                            label: "text-sm"
                        }}
                        className="max-w-xs"
                    />

                    <InputForm
                        isRequired={false}
                        name=""
                        onChange={() => { }}
                        type="text"
                        label="LinkedIn"
                        classNames={{
                            inputWrapper: "pb-1",
                            errorMessage: "text-sm font-medium",
                            input: "bg-off-white w-60 text-sm",
                            label: "text-sm"
                        }}
                        className="max-w-xs"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <InputForm
                        isRequired={false}
                        name=""
                        onChange={() => { }}
                        type="text"
                        label="Youtube"
                        classNames={{
                            inputWrapper: "pb-1",
                            errorMessage: "text-sm font-medium",
                            input: "bg-off-white w-60 text-sm",
                            label: "text-sm"
                        }}
                        className="max-w-xs"
                    />

                    <InputForm
                        isRequired={false}
                        name=""
                        onChange={() => { }}
                        type="text"
                        label="researchGate"
                        classNames={{
                            inputWrapper: "pb-1",
                            errorMessage: "text-sm font-medium",
                            input: "bg-off-white w-60 text-sm",
                            label: "text-sm"
                        }}
                        className="max-w-xs"
                    />
                </div>
            </form>

            <div className="flex flex-center mt-8">
                <div className="flex gap-3">
                    <div>
                        <button className="h-10 border-2 select-none justify-center rounded-xl text-base font-medium items-center normal-shadow hover:font-semibold border-borders-light hover:border-primary bg-default-white hover:text-primary transition-all flex gap-1 w-40" onClick={() => changeTab('informacion-empleado')}>
                            <i className='bi bi-caret-left mr-2 text-xl'></i>
                            Volver
                        </button>
                    </div>
                    <div className="w-40">
                        <Button text="Continuar" icon="caret-right" onClick={() => changeTab('perfil-empleado')} />
                    </div>
                </div>
            </div>
        </section>
    )
}