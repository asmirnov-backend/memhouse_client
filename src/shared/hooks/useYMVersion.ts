export default function useYMVersion() {
  if (localStorage.getItem('_ym_uid') == undefined || localStorage.getItem('_ym_uid') == null) {
    return null;
  }

  let version = parseInt((localStorage.getItem('_ym_uid')?.toString() ?? '55').slice(-2)) % 5;

  if (version == 1) {
    version = 0;
  }

  if (version == 2) {
    version = 4;
  }

  console.log('version: ', version);

  return version;
}
