
export interface TrainingExercise {
  name: string;
  durationOrReps: string;
  note?: string;
}

export interface TrainingDay {
  day: string; // e.g. "Monday", "Day 1"
  focus: string; // e.g. "Speed Endurance", "Rest"
  exercises: TrainingExercise[];
}

export interface TrainingWeek {
  weekNumber: number;
  theme: string; // e.g. "Foundation Phase"
  objective: string;
  schedule: TrainingDay[];
}

export interface RuleSection {
  title: string;
  items: string[];
}

export interface Sport {
  id: string;
  name: string;
  category: 'Team' | 'Individual' | 'Combat' | 'Athletics';
  description: string;
  icon: string;
  rules: string[]; // Kept for backward compatibility or summary
  detailedRules?: RuleSection[]; // New detailed structure
  skills: { title: string; desc: string }[];
  drills: { title: string; reps: string; desc: string }[];
  warmups: string[];
  trainingProgram: TrainingWeek[];
}

export interface MuscleInfo {
  id: string;
  name: string;
  function: string;
  warmup: string[];
  strengthening: string[];
  stretching: string[];
  injuryRisk: string;
  recovery: string;
}

export interface UserStats {
  steps: number;
  distanceKm: number;
  calories: number;
  activeMinutes: number;
  streakDays: number;
  history: { day: string; calories: number; steps: number }[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  target: number;
  unit: string;
  completed: boolean;
}

export interface AIAdvice {
  id: string;
  category: 'Strength' | 'Flexibility' | 'Cardio' | 'Recovery';
  text: string;
  targetAudience: 'Male' | 'Female' | 'All';
}

export enum AppView {
  SPLASH = 'SPLASH',
  HOME = 'HOME',
  SPORTS = 'SPORTS',
  ANATOMY = 'ANATOMY',
  TRACKER = 'TRACKER',
  AI_COACH = 'AI_COACH',
  THEORY = 'THEORY'
}
