# PrepWise AI – Smart Study Planner

PrepWise AI is an AI-powered study planner that helps students create personalized study schedules based on their subject, topics, and exam date. The application uses Groq AI to generate customized study plans and stores them in Supabase for future access.

## Live Demo

**Deployed Application:**
https://prep-wise-ai-delta.vercel.app

## Features

* Generate AI-powered study schedules
* Personalized study plans based on exam date
* Store generated plans in Supabase database
* View previously saved study plans
* Responsive and clean user interface
* Full-stack implementation using Next.js
* Cloud deployment using Vercel

## Tech Stack

### Frontend

* Next.js 16
* React
* Tailwind CSS

### Backend

* Next.js API Routes

### Database

* Supabase

### AI Integration

* Groq API
* Llama 3.3 70B Versatile Model

### Deployment

* Vercel

## Project Structure

```text
prepwise-ai/
│
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts
│   │
│   ├── plans/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   └── StudyForm.tsx
│
├── lib/
│   ├── groq.ts
│   └── supabase.ts
│
├── public/
│
├── .env.local
├── package.json
└── README.md
```

## How It Works

1. User enters:

   * Subject
   * Topics
   * Exam Date

2. Form data is sent to the API route.

3. Groq AI generates a personalized study schedule.

4. The generated plan is displayed to the user.

5. The study plan is automatically stored in Supabase.

6. Users can view all previously saved plans on the Plans page.

## Installation

### Clone Repository

```bash
git clone <your-repository-url>
cd prepwise-ai
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env.local` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Supabase Database Schema

```sql
create table study_plans (
  id bigint generated always as identity primary key,
  subject text not null,
  topics text not null,
  exam_date text not null,
  generated_plan text not null,
  created_at timestamp default now()
);
```

## API Endpoint

### Generate Study Plan

```http
POST /api/generate
```

#### Request Body

```json
{
  "subject": "Mathematics",
  "topics": "Differentiation, Integration",
  "examDate": "2026-07-15"
}
```

#### Response

```json
{
  "plan": "Generated study schedule..."
}
```

## Learning Outcomes

This project helped in understanding:

* Next.js App Router
* API Route Development
* React State Management
* Tailwind CSS Styling
* AI Integration using Groq
* Database Operations with Supabase
* Full-Stack Development
* Cloud Deployment with Vercel
* Environment Variable Management

## Future Improvements

* User Authentication
* Edit Study Plans
* Delete Study Plans
* Progress Tracking
* Study Reminders
* PDF Export
* Dark Mode
* Multi-Subject Planning

## Screenshots

### Home Page

(Add Screenshot)

### Generated Study Plan

(Add Screenshot)

### Saved Plans Page

(Add Screenshot)

### Supabase Database

(Add Screenshot)

## Author

**Aryan Bharti**

## License

This project is developed for educational and learning purposes.
