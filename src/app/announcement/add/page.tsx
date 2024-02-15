import AnnouncementAdd from "@/components/AnnoucenmentAdd";
import Header from "@/components/Header";

export default function NamePage() {
  return (
    <>
      <Header />
      <main className="margin-header">
        <h1 className="mb-4 mt-2 text-center text-3xl font-bold text-primary mx-auto justify-center items-center">
          Crear nueva convocatoria
        </h1>
        <div className="mx-auto p-4 w-full max-w-[800px] normal-shadow rounded-xl bg-off-white">
          <AnnouncementAdd />
        </div>
      </main>
    </>
  );
}
