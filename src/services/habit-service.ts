/**
 * Сервис привычек - ЗАДАЧА СТУДЕНТА
 *
 * ТЕКУЩЕЕ СОСТОЯНИЕ: Работает с мок-данными
 * ВАША ЗАДАЧА: Заменить на реальные вызовы API
 */


import { del, get, post, put, patch } from '../api';
import type { Habit, CreateHabitData, UpdateHabitData } from '../types';


export async function getAllHabits() {
  return get<Habit[]>('habits/')
}

export async function getHabitById(id: Pick<Habit, 'id'>['id']) {
  
  return get<Habit>(`habits/${id}`)
}

export async function createHabit(data: CreateHabitData){
  return post<Habit>('habits/', data)

}

export async function updateHabit(data: UpdateHabitData) {
  // TODO: Реализовать с реальным API
  return patch<Habit>(`habits/${data.id}`, data)

}

export async function deleteHabit(id: string): Promise<void> {
  // TODO: Реализовать с реальным API
  return del(`habits/${id}`)
  
}

/**
 * ЗАДАЧА 2: Интеграция с API
 *
 * После определения типов:
 * 1. Раскомментировать import { request } from '../api'
 * 2. Заменить мок-реализации на реальные вызовы API
 * 3. Добавить обработку ошибок
 * 4. Протестировать с реальным бэкендом
 */
