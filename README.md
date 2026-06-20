# PrepWise AI

PrepWise AI is a Next.js study-planning app that generates day-wise exam preparation plans from a subject, topic list, and exam date. Generated plans are created with Groq and saved to Supabase so they can be reviewed later.

## Features

- Generate personalized study plans from a simple form
- Create day-wise schedules based on an exam date
- Save generated plans in Supabase
- View saved study plans on the `/plans` page
- Built with Next.js App Router, TypeScript, Tailwind CSS, Groq, and Supabase

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Groq SDK
- Supabase

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root and add:

```env
GROQ_API_KEY=your_groq_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Supabase Setup

Create a `study_plans` table with columns that match the app insert and read flow:

```sql
create table study_plans (
  id uuid primary key default gen_random_uuid(),
  subject text not null,
  topics text not null,
  exam_date date not null,
  generated_plan text,
  created_at timestamp with time zone default now()
);
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/
  api/generate/route.ts   API route for generating and saving plans
  page.tsx                Home page with the study plan form
  plans/page.tsx          Saved plans page
components/
  StudyForm.tsx           Client-side form for plan generation
lib/
  groq.ts                 Groq client
  supabase.ts             Supabase client
```
