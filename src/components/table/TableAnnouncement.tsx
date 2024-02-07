import { createTable } from "@tanstack/react-table";
import { setConvocatoriaInTable } from "@/libs/setDataInTable";
import { Announcement } from "@/types/d";
import TableData from "./TableData";

const TableAnnouncement = ({
  announcement,
  selectedDataAnnouncemnt,
}: {
  announcement: Announcement[];
  selectedDataAnnouncemnt: (id: string, action: string) => any;
}) => {

  
  let table = createTable().setRowType<Announcement>();
  const columns = [
    { accessor: "id", header: "ID" },
    { accessor: "nombre", header: "NOMBRE" },
    { accessor: "fecha_fin", header: "FECHA FIN" },
    { accessor: "tipo_convocatoria", header: "TIPO" },
    { accessor: "periodo", header: "PERIODO" },
  ];

  return (
    <TableData
      selectedAnnouncement={(id, action) => selectedDataAnnouncemnt(id, action)}
      columnsArray={columns}
      dataArray={setConvocatoriaInTable(announcement)}
      createdTable={table}
    />
  );
};

export default TableAnnouncement;
