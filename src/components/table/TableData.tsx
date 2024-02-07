"use client";

import { useCallback, useEffect, useState } from "react";
import {
  PaginationState,
  useTableInstance,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import useColumnsRows from "@/hook/useColumnsRows";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Pagination } from "@nextui-org/react";

interface Props {
  columnsArray: { accessor: string; header: string }[];
  dataArray: any[];
  createdTable: any;
  className?: string;
  selectedAnnouncement: (id: string, action: string) => {};
}

const TableData = ({
  columnsArray,
  dataArray,
  createdTable,
  selectedAnnouncement,
  className = "",
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  let table = createdTable;
  const columns = useColumnsRows(columnsArray, table);

  const [data] = useState<any>(dataArray);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const instance = useTableInstance(table, {
    data,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  const [activeFilters, setActiveFilters] = useState<Boolean>(false);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const urlParamsPage = (page: number): string => {
    return `${pathname}?${createQueryString("p", String(page))}`;
  };

  useEffect(() => {
    const totalPages = instance.getPageCount();
    const pQuery = searchParams.get("p") ?? "p";
    const pageNumber = isNaN(Number(pQuery))
      ? 1
      : Number(pQuery) > totalPages
      ? totalPages
      : Number(pQuery) < 1
      ? 1
      : Number(pQuery);

    setCurrentPage(pageNumber - 1);
    instance.setPageIndex(pageNumber - 1);
    setLoading(false);
  }, []);

  if (!loading)
    return (
      <>
        <section className="overflow-hidden rounded-2xl w-[95%] max-w-[1335px] mx-auto p-4 soft-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="mb-3 sm:mb-0">
              <button
                className="w-7 h-7 inline text-default-white rounded-md border border-soft-primary bg-primary transition-all cursor-pointer hover:bg-dark-primary hover:border-primary active:border-dark-primary"
                onClick={() => setActiveFilters(!activeFilters)}
                title="Filtros"
              >
                <i className="bi bi-funnel-fill"></i>
              </button>
              <p className="ml-3 inline text-primary font-semibold">
                P&aacute;gina {currentPage + 1} de {instance.getPageCount()}
              </p>
            </div>
            <button
              onClick={() => {
                router.push("/announcement/add");
              }}
              className="card-shadow select-none transition-all w-[200px] p-2 rounded-xl bg-primary hover:bg-dark-primary text-default-white font-medium"
            >
              <i className="bi bi-plus-circle text-lg font-medium mr-2"></i>
              Añadir convocatoria
            </button>
          </div>

          <div className="overflow-x-scroll overflow-y-hidden">
            <table
              className={twMerge(
                clsx(
                  "min-w-[1300px] border-collapse rounded-lg bg-default-white ",
                  className
                )
              )}
            >
              <thead>
                {instance.getHeaderGroups().map((headerGroup: any) => (
                  <tr
                    key={headerGroup.id}
                    className="text-gray bg-gray-box select-none"
                  >
                    {headerGroup.headers.map((header: any) => (
                      <th
                        className="p-2 text-start text-sm font-bold last:rounded-r-xl"
                        key={header.id}
                        colSpan={header.colSpan}
                      >
                        {header.isPlaceholder ? null : (
                          <div>
                            {header.renderHeader()}
                            {activeFilters && header.column.getCanFilter() && (
                              <input
                                className="px-2 h-[30px] rounded-[10px] border-2 font-normal text-base border-borders-light hover:border-borders focus:border-borders outline-none transition-all w-full"
                                type="text"
                                placeholder="Buscar..."
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  header.column.setFilterValue(e.target.value)
                                }
                              />
                            )}
                          </div>
                        )}
                      </th>
                    ))}
                    <th className="w-10 p-2 text-center font-bold rounded-r-xl">
                      <i className="bi bi-three-dots"></i>
                    </th>
                  </tr>
                ))}
              </thead>

              <tbody>
                {instance.getRowModel().rows.map((row: any) => {
                  return (
                    <tr
                      className="border-t border-b border-gray-box first:border-t-0 last:border-b-0"
                      key={row.id}
                    >
                      {row.getVisibleCells().map((cell: any) => (
                        <td className="p-2" key={cell.id}>
                          {cell.renderCell()}
                        </td>
                      ))}
                      <td className="p-2 text-center text-gray flex gap-5 ">
                        <i
                          onClick={() => {
                            selectedAnnouncement(row.original.id, "info");
                          }}
                          title="Detalles de convocatoria"
                          className="bi bi-info-circle-fill text-xl text-borders-light transition-all cursor-pointer rounded-full hover:text-custom-black"
                        ></i>
                        {/* Modal editar */}
                        <i
                          onClick={() => {
                            selectedAnnouncement(row.original.id, "edit");
                          }}
                          title="Editar convocatoria"
                          className="bi bi-pencil-fill text-xl text-borders-light transition-all cursor-pointer rounded-full hover:text-custom-black"
                        ></i>
                        <i
                          onClick={() => {
                            selectedAnnouncement(row.original.id, "person");
                          }}
                          title="Ver aspirantes"
                          className="bi bi-person-lines-fill text-xl text-borders-light transition-all cursor-pointer rounded-full hover:text-custom-black"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 w-full items-center text-center">
            <div className="hidden sm:flex items-center gap-3">
              <p className="font-medium text-dark-gray">P&aacute;gina: </p>
              <input
                className="px-2 w-[60px] h-[30px] rounded-[10px] border-2 border-borders-light hover:border-borders focus:border-borders outline-none cursor-pointer transition-all"
                type="number"
                value={(currentPage + 1).toString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (Number(e.target.value) <= instance.getPageCount()) {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    instance.setPageIndex(page);
                    setCurrentPage(page);
                    router.push(urlParamsPage(page + 1));
                  }
                }}
              />
            </div>

            <Pagination
              isCompact
              showControls
              total={instance.getPageCount()}
              initialPage={currentPage}
              onChange={(selectedPage) => {
                setCurrentPage(selectedPage - 1);
                instance.setPageIndex(selectedPage - 1);
                router.push(urlParamsPage(selectedPage));
              }}
              page={currentPage + 1}
              classNames={{
                base: "mx-auto sm:mr-0 lg:mx-auto px-0",
                wrapper: "mx-auto sm:mr-0 lg:mx-auto",
              }}
            />

            <p className="font-medium text-borders text-start lg:text-end mt-3 lg:mt-0">
              Convocatorias encontradas:{" "}
              {instance.getFilteredRowModel().rows.length}
            </p>
          </div>
        </section>
      </>
    );

  return (
    <div className="absolute ml-[40%] lg:ml-[47%] mt-[25%] lg:mt-[7%]  justify-center px-auto items-center ">
      <TailSpin
        height="80"
        width="80"
        color="#990000"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
};

export default TableData;
