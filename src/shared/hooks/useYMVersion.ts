export default function useYMVersion() {
  const version = JSON.parse(localStorage.getItem('_ym_uid') ?? '55') % 5;

  return version;
}
