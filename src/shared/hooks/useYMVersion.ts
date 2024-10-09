export default function useYMVersion() {
  const version = JSON.parse(localStorage.getItem('_ym_uid') ?? '55').substr(-2) % 5;

  return version;
}
