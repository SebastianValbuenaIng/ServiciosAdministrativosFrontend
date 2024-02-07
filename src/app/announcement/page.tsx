import Header from "@/components/Header";
import Announcement from "@/components/pages/Announcement";
import Input from "@/components/ui/Input";

export default function Announcementpage() {
  return (
    <>
      <main>
        <Header />
        <p className="text-center mt-[90px] text-3xl text-primary font-semibold">
          Información de Convocatorias
        </p>
        <Announcement />
      </main>
    </>
  );
}
