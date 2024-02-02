'use client';

import Button from "@/components/ui/ButtonContinue";

interface Props {
    changeTab: (tab: string) => void;
}

export const ConsultarPublicaciones = ({ changeTab }: Props) => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-center my-8">Consultar Publicaciones</h2>

            <form className="w-full max-w-[1400px]">

            </form>

            <div className="flex flex-center mt-8">
                <div className="w-48">
                    <Button text="Volver" icon="caret-left" onClick={() => changeTab('consultar-experiencia')} />
                </div>
            </div>
        </section>
    )
}
