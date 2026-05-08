/**
 * Сервис аутентификации - ЗАДАЧА СТУДЕНТА
 */

import { get, post } from "../api";
import { AuthResponse, LoginCredentials, RegisterData, User } from "../types";

export async function login(credentials: LoginCredentials) {
  return post<AuthResponse>('auth/login', credentials)
  
  // TODO: Заменить на реальный вызов API
  // Пока что просто возвращаем мок-данные
  /* return Promise.resolve({
    accessToken: "mock-token-" + Date.now(),
    user: mockUser as User,
  }); */
}

export async function register(data: RegisterData)   {
  return post<AuthResponse>('auth/register', data)
}

export async function getCurrentUser(): Promise<User> {
    return get<User>('user/me')
}

export  function logout(): void {
  // TODO: Добавить вызов API, если необходимо
  localStorage.removeItem("accessToken");
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("accessToken");
}