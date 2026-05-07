/**
 * ЗАДАЧА: Определите типы для всех сущностей
 *
 * Используйте документацию Swagger (http://188.132.184.170.nip.io/docs#/Пользователи/read_user_me_api_v1_users_me_get)
 */

// TODO: Определите интерфейс User (Пользователь)
export interface User {
  id: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  // Подсказка: какие поля должны быть у пользователя?
}

// TODO: Определите интерфейс Habit (Привычка)
export interface Habit {
  id: string;
  userId: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  frequencyType: "daily" | "weekly" | "monthly";
  goal: number;
  createdAt: string;
  updatedAt: string;
  // Подсказка: какие поля должны быть у привычки?
}

// TODO: Определите интерфейс HabitLog (Лог привычки)
export interface HabitLog {
  id: string;
  habitId: string;
  userId: string;
  completedAt: string;
  note: string;
  createdAt: string;
  updatedAt: string;
  // Ваш код здесь
}

// TODO: Определите интерфейс Category (Категория)
export interface Category {
  // Ваш код здесь
  id: string;
  userId: string;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

// TODO: Определите интерфейс Achievement (Достижение)
export interface Achievement {
  // Ваш код здесь
  id: string;
  userId: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

// TODO: Определите интерфейс AnalyticsSummary (Сводка аналитики)
export interface AnalyticsSummary {
  // Ваш код здесь
  totalHabits: number;
  completionRate: number;
  currentStreak: number;
  bestStreak: number;
  totalLogs: number;
}
