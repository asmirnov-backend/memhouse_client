export default function useYMVersion() {
  const version = parseInt((localStorage.getItem('_ym_uid')?.toString() ?? '55').slice(-2)) % 5;

  console.log({ version });

  return version;
}
