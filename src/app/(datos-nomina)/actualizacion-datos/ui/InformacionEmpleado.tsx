'use client';

import { Divider, SelectItem } from "@nextui-org/react";
import { estadoCivil } from "@/data";
import { NomenclaturaUrbana, NomenclaturaUrbana2, NomenclaturaUrbana3, NomenclaturaUrbanaCorta, abecedarioCalles } from "@/data/Direccion";
import InputForm from "@/components/forms/InputForm";
import SelectForm from "@/components/forms/SelectForm";
import Button from "@/components/ui/ButtonContinue";

interface Props {
    changeTab: (tab: string) => void;
}

export const InformacionEmpleado = ({ changeTab }: Props) => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-center my-8">Información Empleado</h2>

            <form className="w-full max-w-[1400px]">
                <div className="flex flex-col justify-between flex-wrap md:flex-row gap-4">
                    {/* Nombre */}
                    <div>
                        <InputForm
                            isRequired
                            name=""
                            onChange={() => { }}
                            type="text"
                            label="Nombre Completo"
                            classNames={{
                                inputWrapper: "pb-1",
                                errorMessage: "text-sm font-medium",
                                input: "bg-off-white w-60 text-sm",
                                label: "text-sm"
                            }}
                            className="max-w-xs"
                        />
                    </div>

                    {/* Documento */}
                    <div>
                        <InputForm
                            name=""
                            onChange={() => { }}
                            isRequired
                            type="number"
                            label="Documento"
                            classNames={{
                                inputWrapper: "pb-1",
                                errorMessage: "text-sm font-medium",
                                input: "bg-off-white w-36 text-sm",
                                label: "text-sm"
                            }}
                            className="max-w-xs"
                        />
                    </div>

                    {/* Nacimiento */}
                    <div>
                        <InputForm
                            placeholder="fecha"
                            name=""
                            onChange={() => { }}
                            isRequired
                            type="date"
                            label="Nacimiento"
                            classNames={{
                                inputWrapper: "pb-1",
                                errorMessage: "text-sm font-medium",
                                input: "bg-off-white w-36 text-sm",
                                label: "text-sm"
                            }}
                            className="max-w-xs"
                        />
                    </div>

                    {/* Telefono */}
                    <div>
                        <InputForm
                            name=""
                            onChange={() => { }}
                            isRequired
                            type="number"
                            label="Teléfono"
                            classNames={{
                                inputWrapper: "py-0 pb-1",
                                errorMessage: "text-sm font-medium",
                                input: "bg-off-white w-28 text-sm",
                                label: "text-sm"
                            }}
                            className="max-w-xs"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between flex-wrap md:flex-row gap-4 mt-4">
                    {/* Sexo */}
                    <SelectForm
                        name=""
                        onChange={() => { }}
                        label="Sexo"
                        placeholder="Seleccione"
                        className="w-40"
                        classNames={{
                            label: "text-sm"
                        }}
                        isRequired
                        required
                    >
                        <SelectItem value='masculino' key='1' className="text-sm" classNames={{ title: "text-md" }} startContent={<i className="bi bi-gender-male text-blue"></i>}>
                            Masculino
                        </SelectItem>

                        <SelectItem value='femenino' key='2' className="text-sm" classNames={{ title: "text-md" }} startContent={<i className="bi bi-gender-female text-red"></i>}>
                            Femenino
                        </SelectItem>
                    </SelectForm>

                    {/* Estado Civil */}
                    <SelectForm
                        name=""
                        onChange={() => { }}
                        label="Estado Civil"
                        placeholder="Seleccione el estado civil"
                        className="w-40"
                        classNames={{
                            label: "text-sm"
                        }}
                        isRequired
                        required>
                        {
                            estadoCivil.map(estado => (
                                <SelectItem value={estado.valor} key={estado.key} className="text-sm" classNames={{ title: "text-md" }}>
                                    {estado.descripcion}
                                </SelectItem>
                            ))
                        }
                    </SelectForm>

                    {/*Correo */}
                    <div>
                        <InputForm
                            name=""
                            onChange={() => { }}
                            type="email"
                            label="Correo Electrónico"
                            isRequired={true}
                            classNames={{
                                inputWrapper: "py-0 pb-1",
                                errorMessage: "text-sm font-medium",
                                input: "bg-off-white w-56 text-sm",
                                label: "text-sm"
                            }}
                            className="max-w-xs"
                        />
                    </div>

                    {/* Correo alterno */}
                    <div>
                        <InputForm
                            isRequired
                            name=""
                            onChange={() => { }}
                            type="email"
                            label="Correo Alterno"
                            classNames={{
                                inputWrapper: "py-0 pb-1",
                                errorMessage: "text-sm font-medium",
                                input: "bg-off-white w-56 text-sm",
                                label: "text-sm"
                            }}
                            className="max-w-xs"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between flex-wrap md:flex-row gap-4 md:gap-0 mt-4">
                    <SelectForm
                        name=""
                        onChange={() => { }}
                        label="Tipo Empleado"
                        placeholder="Seleccione el tipo"
                        className="w-56"
                        classNames={{
                            label: "text-sm",
                        }}
                        isRequired
                        required>
                        <SelectItem value='masculino' key='1' className="text-sm">
                            Personal Administrativo
                        </SelectItem>
                    </SelectForm>

                    {/* Select con todos los paises */}
                    <SelectForm
                        name=""
                        onChange={() => { }}
                        label="País Residencia"
                        placeholder="Seleccione su país"
                        className="w-48"
                        classNames={{
                            label: "text-sm"
                        }}
                        isRequired>
                        <SelectItem value='masculino' key='1' className="text-sm" classNames={{ title: "text-md" }}>
                            Colombia
                        </SelectItem>

                        <SelectItem value='femenino' key='2' className="text-sm" classNames={{ title: "text-md" }}>
                            España
                        </SelectItem>
                    </SelectForm>

                    {/* Select con todos los departamentos */}
                    <SelectForm
                        name=""
                        onChange={() => { }}
                        label="Departamento Residencia"
                        placeholder="Seleccione departamento"
                        className="w-52"
                        classNames={{
                            label: "text-sm"
                        }}
                        isRequired>
                        <SelectItem value='masculino' key='1' className="text-sm" classNames={{ title: "text-md" }}>
                            Cundinamarca
                        </SelectItem>
                    </SelectForm>

                    {/* Select con todas las ciudades */}
                    <SelectForm
                        name=""
                        onChange={() => { }}
                        label="Ciudad Residencia"
                        placeholder="Seleccione su ciudad"
                        className="w-48"
                        classNames={{
                            label: "text-sm"
                        }}
                        isRequired
                    >
                        <SelectItem value='masculino' key='1' className="text-md" classNames={{ title: "text-md" }}>
                            Bogotá
                        </SelectItem>
                    </SelectForm>
                </div>

                <Divider className="my-4" />

                <div className="flex flex-col flex-wrap justify-between gap-2">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <p>Dirección: </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="flex gap-4 md:gap-2">
                                    <SelectForm
                                        name=""
                                        onChange={() => { }}
                                        label
                                        className="w-48 text-sm"
                                        classNames={{
                                            
                                            // label: "text-sm"
                                        }}
                                        isRequired
                                    >
                                        {
                                            NomenclaturaUrbana.map((nom, index) => (
                                                <SelectItem value={nom.value} key={index} className="text-sm">
                                                    {nom.descr}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectForm>

                                    <div>
                                        <InputForm
                                            name=""
                                            onChange={() => { }}
                                            isRequired
                                            type="text"
                                            label
                                            classNames={{
                                                inputWrapper: "py-0 pb-1",
                                                errorMessage: "text-sm font-medium",
                                                input: "bg-off-white w-14 text-sm",
                                                label: "text-sm"
                                            }}
                                            className="max-w-xs"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 md:gap-2">
                                    <SelectForm
                                        name=""
                                        onChange={() => { }}
                                        label
                                        className="w-16"
                                        classNames={{
                                            label: "text-sm",
                                        }}
                                    >
                                        {
                                            abecedarioCalles.map((nom, index) => (
                                                <SelectItem value={nom} key={index} className="text-sm">
                                                    {nom}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectForm>

                                    <SelectForm
                                        name=""
                                        onChange={() => { }}
                                        label
                                        className="w-48"
                                        classNames={{
                                            label: "text-sm",
                                        }}
                                        isRequired
                                    >
                                        {
                                            NomenclaturaUrbana2.map((nom, index) => (
                                                <SelectItem value={nom.value} key={index} className="text-sm">
                                                    {nom.descr}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectForm>
                                </div>

                                <div>
                                    <InputForm
                                        name=""
                                        onChange={() => { }}
                                        isRequired
                                        type="text"
                                        label
                                        classNames={{
                                            inputWrapper: "py-0 pb-1",
                                            errorMessage: "text-sm font-medium",
                                            input: "bg-off-white w-20 text-sm",
                                            label: "text-md"
                                        }}
                                        className="max-w-xs"
                                    />
                                </div>

                                <div className="flex gap-4 md:gap-2">
                                    <SelectForm
                                        name=""
                                        onChange={() => { }}
                                        label
                                        className="w-16"
                                        classNames={{
                                            label: "text-sm",
                                        }}
                                    >
                                        {
                                            abecedarioCalles.map((nom, index) => (
                                                <SelectItem value={nom} key={index} className="text-sm">
                                                    {nom}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectForm>

                                    <div>
                                        <InputForm
                                            isRequired={false}
                                            name=""
                                            onChange={() => { }}
                                            type="text"
                                            label
                                            classNames={{
                                                inputWrapper: "py-0 pb-1",
                                                errorMessage: "text-sm font-medium",
                                                input: "bg-off-white w-20 text-sm",
                                                label: "text-md"
                                            }}
                                            className="max-w-xs"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="flex gap-4 md:gap-2">
                                    <SelectForm
                                        name=""
                                        onChange={() => { }}
                                        label
                                        className="w-24"
                                        classNames={{
                                            label: "text-sm",
                                        }}
                                    >
                                        {
                                            abecedarioCalles.map((nom, index) => (
                                                <SelectItem value={nom} key={index} className="text-sm">
                                                    {nom}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectForm>

                                    <SelectForm
                                        name=""
                                        onChange={() => { }}
                                        label
                                        className="w-24"
                                        classNames={{
                                            label: "text-sm",
                                        }}
                                    >
                                        {
                                            NomenclaturaUrbana3.map((nom, index) => (
                                                <SelectItem value={nom.value} key={index} className="text-sm">
                                                    {nom.descr}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectForm>
                                </div>

                                <div className="flex gap-4 md:gap-2">
                                    <div>
                                        <InputForm
                                            name=""
                                            onChange={() => { }}
                                            isRequired
                                            type="text"
                                            label
                                            classNames={{
                                                inputWrapper: "py-0 pb-1",
                                                errorMessage: "text-sm font-medium",
                                                input: "bg-off-white w-14 text-md",
                                                label: "text-sm"
                                            }}
                                            className="max-w-xs"
                                        />
                                    </div>

                                    <SelectForm
                                        name=""
                                        onChange={() => { }}
                                        label
                                        className="w-24"
                                        classNames={{
                                            label: "text-sm",
                                        }}
                                    >
                                        {
                                            NomenclaturaUrbanaCorta.map((nom, index) => (
                                                <SelectItem value={nom.value} key={index} className="text-sm">
                                                    {nom.descr}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectForm>

                                </div>

                                <div>
                                    <InputForm
                                        isRequired={false}
                                        name=""
                                        onChange={() => { }}
                                        type="text"
                                        label
                                        classNames={{
                                            inputWrapper: "py-0 pb-1",
                                            errorMessage: "text-sm font-medium",
                                            input: "bg-off-white w-20 text-md",
                                            label: "text-md"
                                        }}
                                        className="max-w-xs"
                                    />
                                </div>

                                <div className="flex gap-4 md:gap-2">
                                    <SelectForm
                                        name=""
                                        onChange={() => { }}
                                        label
                                        className="w-16"
                                        classNames={{
                                            label: "text-sm",
                                        }}
                                    >
                                        {
                                            NomenclaturaUrbanaCorta.map((nom, index) => (
                                                <SelectItem value={nom.value} key={index} className="text-sm">
                                                    {nom.descr}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectForm>

                                    <div>
                                        <InputForm
                                            isRequired
                                            name=""
                                            onChange={() => { }}
                                            type="text"
                                            label="Referencia"
                                            classNames={{
                                                inputWrapper: "py-0 pb-1",
                                                errorMessage: "text-sm font-medium",
                                                input: "bg-off-white w-20 text-sm",
                                                label: "text-sm"
                                            }}
                                            className="max-w-xs"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TODO: mostrar el texto de la dirección que se va llenando */}
                        <span className="text-sm text-primary">Dirección: CL 188 BIS A NORTE</span>
                    </div>
                </div>
            </form>

            <div className="flex flex-center mt-8">
                <div className="w-48">
                    <Button text="Continuar" icon="caret-right" onClick={() => changeTab('redes-sociales')} />
                </div>
            </div>
        </section >
    )
}