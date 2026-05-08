/**
 * Сервис категорий - ЗАДАЧА СТУДЕНТА
 */

import { del, get, post, patch } from "../api";
import { mockCategories } from "../mocks/categories";
import { Category, CreateCategoryData, UpdateCategoryData } from "../types";

let categories: Category[] = [...mockCategories];

export async function getAllCategories(){
  return get<Category[]>('categories')
}

export async function getCategoryById(id: Pick<Category, "id">["id"]) {
  return get<Category>(`categories/${id}`)
}


export async function createCategory(
  data: CreateCategoryData,
) {
  return post<Category>(`categories`, data)
}



export async function updateCategory(data: UpdateCategoryData){
  const {id,...body} = data
  return patch<Category>(`categories/${id}`, body)
}

export async function deleteCategory(id: string): Promise<void> {
  return del(`categories/${id}`)
}
