export default function useYMVersion() {
  if (localStorage.getItem('_ym_uid') == undefined || localStorage.getItem('_ym_uid') == null) {
    return null;
  }

  const version = parseInt((localStorage.getItem('_ym_uid')?.toString() ?? '55').slice(-2));

  console.log('version: ', version);

  return version;
}
