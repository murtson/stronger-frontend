export interface Exercise {
  id: string | number;
  name: string;
  logType: string;
  description?: string;
  color: string;
  categoryId: number;
}
