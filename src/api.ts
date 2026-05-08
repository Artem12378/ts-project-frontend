/**
 * API Клиент - ЗАДАЧА СТУДЕНТА
 * 
 * @description Этот модуль отвечает за выполнение HTTP-запросов к API бэкенда.
 * Он должен обрабатывать аутентификацию, ошибки и возвращать типизированные данные.
 * 
 * @see http://188.132.184.170.nip.io/docs#/ для документации API
 */

import type { ApiResponse, ApiErrorResponse } from "./types/api";

const API_BASE_URL = "http://188.132.184.170.nip.io/api/v1";
function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

function convertKeysToSnakeCase<T>(data: T): any {
  if (data === null || data === undefined || typeof data !== 'object') return data;
  if (Array.isArray(data)) return data.map(item => convertKeysToSnakeCase(item));
  const newObj: any = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      newObj[toSnakeCase(key)] = convertKeysToSnakeCase(data[key]);
    }
  }
  return newObj;
}



function convertKeysToCamelCase<T>(data: T): any {
  if (data === null || data === undefined || typeof data !== 'object') return data;
  if (Array.isArray(data)) return data.map(item => convertKeysToCamelCase(item));
  const newObj: any = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      newObj[toCamelCase(key)] = convertKeysToCamelCase(data[key]);
    }
  }
  return newObj;
}


/**
 * TODO: Реализовать функцию запроса
 *
 * Эта функция должна:
 * 1. Выполнять HTTP-запросы к API
 * 2. Добавлять заголовок Authorization с токеном
 * 3. Обрабатывать ошибки
 * 4. Возвращать типизированные данные
 *
 * Подсказка: Используйте fetch API
 */
export async function request<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const token = localStorage.getItem("accessToken");
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options?.headers,
  };

    let processedBody = options?.body;
  if (options?.body && (options.method === 'POST' || options.method === 'PUT' || options.method === 'PATCH')) {
    try {
      const bodyObj = JSON.parse(options.body as string);
      const snakeObj = convertKeysToSnakeCase(bodyObj);
      processedBody = JSON.stringify(snakeObj);
    } catch (e) {
      console.warn('Failed to convert request body keys', e);
    }
  }


  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/${endpoint}`, { ...options,   body: processedBody,headers });
  } catch {
    throw {
      success: false,
      error: { message: "Нет соединения с сервером" },
    } as ApiErrorResponse;
  }

  const body: ApiResponse<T> = await response.json();
  const transformed = convertKeysToCamelCase(body);// напишите такую функцию
  if (!transformed.success && transformed.success !== undefined) {
  throw transformed;
}
return transformed.data || transformed;
 
}

// ─── Удобные обёртки ──────────────────────────────────────────────────────────

export function get<T>(endpoint: string): Promise<T> {
  return request<T>(endpoint);
}

export function post<T>(endpoint: string, body?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: "POST",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

export function put<T>(endpoint: string, body?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: "PUT",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

export function patch<T>(endpoint: string, body?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: "PATCH",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

export function del<T = void>(endpoint: string): Promise<T> {
  return request<T>(endpoint, { method: "DELETE" });
}