"use client";

import { useState } from "react";

export default function StudyForm() {
const [subject, setSubject] = useState("");
const [topics, setTopics] = useState("");
const [examDate, setExamDate] = useState("");

const [plan, setPlan] = useState("");
const [loading, setLoading] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject,
        topics,
        examDate,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.log("API Error:", text);
      throw new Error("API failed");
    }

    const data = await response.json();
    setPlan(data.plan);
  } catch (error) {
    console.error(error);
  }

  setLoading(false);
};
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white p-6 rounded-xl shadow-md"
    >
      <div>
        <label className="block mb-2 font-medium text-gray-800">
          Subject
        </label>

        <input
          type="text"
          placeholder="e.g. Data Structures"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-black bg-white"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-800">
          Topics
        </label>

        <textarea
          placeholder="Arrays, Linked Lists, Trees..."
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 h-32 text-black bg-white"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-800">
          Exam Date
        </label>

        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-black bg-white"
          required
        />
      </div>

      <button
  type="submit"
  disabled={loading}
  className="w-full bg-black text-white py-3 rounded-lg"
>
  {loading
    ? "Generating..."
    : "Generate Study Plan"}
</button>

      {plan && (
  <div className="mt-6 p-4 border rounded-lg">
    <h2 className="font-bold text-lg mb-2">
      Study Plan
    </h2>

    <pre className="whitespace-pre-wrap text-black">
      {plan}
    </pre>
  </div>
)}
    </form>
  );
}