import StudyForm from "@/components/StudyForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          PrepWise AI
        </h1>

        <StudyForm />
      </div>
    </main>
  );
}