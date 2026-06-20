import Link from "next/link";
import StudyForm from "@/components/StudyForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            PrepWise AI
          </h1>

          <Link
            href="/plans"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            View Plans
          </Link>
        </div>

        <StudyForm />
      </div>
    </main>
  );
}