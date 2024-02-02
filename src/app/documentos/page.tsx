import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Documents from "@/components/pages/Documents";

export default function DocumentosPage() {
	return (
		<>
			<main className="margin-header relative w-full">
				<Header />
				<h1 className="text-3xl text-center mt-10 l text-primary font-bold">
					Documentos institucionales
				</h1>
				<Documents />
			</main>
			<Footer />
		</>
	);
}