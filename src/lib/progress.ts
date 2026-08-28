const STORAGE_KEY = "ha_unit1_correct_ids_v1";

export function loadCorrectIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function saveCorrectIds(ids: string[]): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...new Set(ids)]));
}

export function markCorrect(id: string): string[] {
  const next = [...loadCorrectIds(), id];
  saveCorrectIds(next);
  return next;
}

export function resetProgress(): void {
  window.localStorage.removeItem(STORAGE_KEY);
}
