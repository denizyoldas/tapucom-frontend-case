export interface ServerResponse<T> {
  data: T
  message: string
  success: boolean
}
