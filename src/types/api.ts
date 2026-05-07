/**
 * ЗАДАЧА: Определите типы для ответов API и ошибок
 */

import { Category, Habit, HabitLog, User } from "./entities";

// TODO: Определите тип для успешного ответа, который содержит данные типа T
export interface ApiSuccessResponse<T> {
  // Подсказка: API возвращает { success: true, data: T }
  success: true,
  data: T
}

export interface ApiErrorResponse {
  // Подсказка: API возвращает {  } }
  success: false,
  error: {
    message: string,
    code?: string | string,
    details?: null
  }
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse /* Ваш код здесь */;

// Готовые типы для аутентификации и регистрации
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  username: string;
}

export interface AuthResponse {

  user: User
  accessToken: string;

}

export type CreateHabitData= Pick<Habit, 'title'| 'description'| 'color'| 'icon' | 'frequencyType' | 'goal'  >

// TODO: Определите тип для обновления привычки (может быть частичным, так что используйте Partial?)
export type UpdateHabitData = Pick<Habit, "id"> & Partial<CreateHabitData>

// TODO: Определите тип для создания категории
export type CreateCategoryData = Pick<Category, "name"> &
  Partial<Pick<Category, "color">>;

export type UpdateCategoryData = Pick<Category, "id"> & Partial<CreateCategoryData>;

// --- Logs ---

export type CreateLogData = Pick<HabitLog, "habitId"> &
  Partial<Pick<HabitLog, "completedAt" | "note">>;

export function isSuccessResponse<T>(
  response: ApiResponse<T>
): response is ApiSuccessResponse<T> {
  return response.success === true;
}

export function isErrorResponse(
  response: ApiResponse<unknown>
): response is ApiErrorResponse {
  return response.success === false;
}


