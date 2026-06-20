import { supabase } from "@/lib/supabase";

export default async function PlansPage() {
  const { data: plans, error } = await supabase
    .from("study_plans")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-8">
        Error loading plans
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Saved Study Plans
        </h1>

        <div className="grid gap-6">
          {plans?.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-2xl font-bold text-black">
                {plan.subject}
              </h2>

              <p className="mt-2 text-gray-600">
                Exam Date: {plan.exam_date}
              </p>

              <p className="mt-2 text-gray-700">
                Topics: {plan.topics}
              </p>

              <pre className="mt-4 whitespace-pre-wrap text-black">
                {plan.generated_plan}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}