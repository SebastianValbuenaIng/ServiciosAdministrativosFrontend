import Footer from "@/components/Footer";
import SelectVotacion from "@/components/pages/SelectVotacion";

export default async function VotacionesPage({
	searchParams,
}: {
	searchParams: { error?: string };
}) {
	return (
		<>
			<main className="margin-header relative ">
				<SelectVotacion error={searchParams.error ?? undefined} />
			</main>
			<Footer	 />
		</>
	);
}