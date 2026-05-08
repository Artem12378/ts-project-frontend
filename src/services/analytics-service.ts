/**
 * Сервис аналитики  - ЗАДАЧА СТУДЕНТА
 */


import { AnalyticsSummary } from "../types";
import { get } from "../api";

// --- Аналитика (GET /api/v1/analytics/) ---

export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  // TODO: Замените на реальный API вызов
  // return request<AnalyticsSummary>('/analytics/');
  return get('analytics/')
}

export async function getCalendar(
  _startDate?: string,
  _endDate?: string,
  _habitIds?: string[],
): Promise<any[]> {
  // TODO: Замените на реальный API вызов
  // return request<CalendarDay[]>('/analytics/calendar', { params: { startDate, endDate, habitIds } });
  return get('analytics/calendar')
}

export async function getHeatmap(
  _startDate?: string,
  _endDate?: string,
): Promise<any[]> {
  // TODO: Замените на реальный API вызов
  // return request<HeatmapItem[]>('/analytics/heatmap', { params: { startDate, endDate } });
  return get('analytics/heatmap')
}

export async function getTrends(
  _startDate?: string,
  _endDate?: string,
  _groupBy?: "week" | "month",
): Promise<any[]> {
  // TODO: Замените на реальный API вызов
  // return request<TrendItem[]>('/analytics/trends', { params: { startDate, endDate, groupBy } });
  return get('analytics/trends')
}

export async function getCompletionRate(
  _startDate?: string,
  _endDate?: string,
): Promise<any> {
  // TODO: Замените на реальный API вызов
  // return request<CompletionRateData>('/analytics/completion-rate', { params: { startDate, endDate } });
  return get('analytics/completion-rate')
}

// --- Достижения (GET /api/v1/achievements/) ---

export async function getAchievements(): Promise<any[]> {
  // TODO: Замените на реальный API вызов
  // return request<AchievementRead[]>('/achievements/');
  return get('achievements/')
}

export async function getAvailableAchievements(): Promise<any[]> {
  // TODO: Замените на реальный API вызов
  // return request<AvailableAchievement[]>('/achievements/available');
  return get('achievements/available')
}

export async function exportData(): Promise<any> {
  // TODO: Имплементируйте
  return get('data/export')
}
