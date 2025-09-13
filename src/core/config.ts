// core/config.ts
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "student" | "teacher";
  status: "active" | "inactive" | "blocked";
  createdAt: Date;
}

export interface Student extends User {
  studentId: string;
  groupId: number;
  characterization: StudentCharacterization;
  academicStatus: AcademicStatus;
  attendance: AttendanceRecord[];
}

export interface StudentCharacterization {
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: "male" | "female" | "other";
  address: string;
  phone: string;
  emergencyContact: string;
  medicalInfo: string;
  previousSchool: string;
}

export interface Teacher extends User {
  teacherId: string;
  subjects: number[]; // IDs de materias que puede impartir
  groups: number[]; // IDs de grupos asignados
  specialization: string;
  experience: number;
}

export interface Group {
  id: number;
  name: string;
  grade: string;
  schedule: string;
  capacity: number;
  students: number[]; // IDs de estudiantes
  teacherId: number;
}

export interface Subject {
  id: number;
  name: string;
  tutorId: number;
  startDate: Date;
  endDate: Date;
  totalClasses: number;
  program: string;
  credits: number;
}

export interface AcademicRecord {
  subjectId: number;
  grades: number[];
  finalGrade: number;
  attendance: number; // Porcentaje de asistencia
  status: "not_started" | "in_progress" | "passed" | "failed";
  progress: number; // Porcentaje de progreso
}

export interface AcademicStatus {
  semester: number;
  subjects: AcademicRecord[];
  overallAverage: number;
  graduationEligibility: boolean;
}

export interface AttendanceRecord {
  subjectId: number;
  date: Date;
  present: boolean;
}

export interface Notification {
  id: number;
  userId: number;
  title: string;
  message: string;
  read: boolean;
  date: Date;
}

// Datos de ejemplo
export const sampleSubjects: Subject[] = [
  {
    id: 1,
    name: "Matemáticas",
    tutorId: 1,
    startDate: new Date("2023-08-01"),
    endDate: new Date("2023-12-15"),
    totalClasses: 30,
    program: "Programa de matemáticas avanzadas",
    credits: 4,
  },
  // Más materias...
];

export const sampleGroups: Group[] = [
  {
    id: 1,
    name: "10A",
    grade: "Décimo",
    schedule: "Lunes a Viernes 7:00am - 12:00pm",
    capacity: 30,
    students: [1, 2, 3],
    teacherId: 1,
  },
  // Más grupos...
];
