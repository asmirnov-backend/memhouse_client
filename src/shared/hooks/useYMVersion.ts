export function getYMVersion(): number | null {
  const ymUid = localStorage.getItem('_ym_uid');
  if (!ymUid) {
    return null;
  }

  // Извлечение версии из _ym_uid
  return parseInt(ymUid.slice(-2), 10) % 2 === 0 ? 4 : 0;
}

export default function useYMVersion() {
  return getYMVersion();
}
