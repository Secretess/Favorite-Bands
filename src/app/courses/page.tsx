import CourseCard from "@/components/CourseCard";
import type { Course } from "@/types/course";

const courses: Course[] = [
  { id: 1, code: "10301231", title: "Web Technology", credits: 3, isOpen: true },
  { id: 2, code: "10301232", title: "Database Systems", credits: 3, isOpen: true },
  { id: 3, code: "10301233", title: "Software Engineering", credits: 3, isOpen: true },
  { id: 4, code: "10301234", title: "Computer Networks", credits: 3, isOpen: true },
  { id: 5, code: "10301235", title: "Mobile Application Development", credits: 3, isOpen: false },
];

export default function CoursesPage() {
  return (
    <main>
      <h1>รายวิชาทั้งหมด</h1>

      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}