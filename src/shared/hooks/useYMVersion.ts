export default function useYMVersion() {
  if (localStorage.getItem('_ym_uid') == undefined || localStorage.getItem('_ym_uid') == null) {
    return null;
  }

  let version = parseInt((localStorage.getItem('_ym_uid')?.toString() ?? '55').slice(-2)) % 2;

  if (version) {
    version = 0;
  } else {
    version = 4;
  }

  console.log('version: ', version);

  return version;
}
