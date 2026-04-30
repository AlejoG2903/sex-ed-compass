const KEY = "esi_role";

export type Role = "estudiantes" | "docentes" | "padres";

export const setRole = (role: Role) => sessionStorage.setItem(KEY, role);
export const getRole = (): Role | null => (sessionStorage.getItem(KEY) as Role | null);
export const clearRole = () => sessionStorage.removeItem(KEY);