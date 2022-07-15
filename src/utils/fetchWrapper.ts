export async function fetchWrapper<T = any>(url: string) {
  const response = await fetch(url);
  return response.json() as Promise<T>;
}
