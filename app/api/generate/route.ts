import { groq } from "@/lib/groq";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { subject, topics, examDate } = await req.json();

    const prompt = `
Create a study plan.

Subject: ${subject}

Topics: ${topics}

Exam Date: ${examDate}

Provide a day-wise schedule.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const generatedPlan =
      completion.choices[0].message.content;

    const { error } = await supabase
      .from("study_plans")
      .insert([
        {
          subject,
          topics,
          exam_date: examDate,
          generated_plan: generatedPlan,
        },
      ]);

    if (error) {
      console.error("Supabase Error:", error);
    }

    return NextResponse.json({
      plan: generatedPlan,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate plan" },
      { status: 500 }
    );
  }
}