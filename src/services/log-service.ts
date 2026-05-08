/**
 * Сервис логов - ЗАДАЧА СТУДЕНТА
 */

import { get, post, del } from "../api";
import { CreateLogData, HabitLog } from "../types";



export async function getAllLogs() {
  // TODO: Заменить на вызов API  
  return get<HabitLog[]>('logs/')
}

export async function getLogsByHabit(habitId: Pick<HabitLog, 'habitId'>['habitId']) {
  // TODO: Реализовать
  return get<HabitLog[]>(`logs/?habitId=${habitId}`)
}

export async function createLog(data: CreateLogData){
  // TODO: Заменить на вызов API
  return post<HabitLog> ('logs/', data)
}

export async function deleteLog(id: string): Promise<void> {
  return del(`logs/${id}`)
}
