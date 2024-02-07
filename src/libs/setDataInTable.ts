import { Announcement } from "../types/d";

const range = (len: number) => {
  const arr: Array<number> = [];
  for (let i: number = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const printConvocatoria = (
  data: Announcement[],
  position: number
): Announcement => {
  return {
    id: String(data[position].id),
    nombre: String(data[position].nombre),
    fecha_inicio: String(data[position].fecha_inicio),
    fecha_fin: String(data[position].fecha_fin),
    descripcion: String(data[position].descripcion),
    tipo_convocatoria: String(data[position].tipo_convocatoria),
    periodo: String(data[position].periodo),
    persona_responsable: String(data[position].persona_responsable),
    director_area: String(data[position].director_area),
  };
};

export function setConvocatoriaInTable(data: Announcement[]) {
  const setDataInTableLevel = (): Announcement[] => {
    return range(data.length).map((d): Announcement => {
      return printConvocatoria(data, d);
    });
  };

  return setDataInTableLevel();
}
