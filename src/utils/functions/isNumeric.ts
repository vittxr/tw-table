export default function isNumeric(val: string): boolean {
  return !isNaN(parseFloat(val)) && isFinite(parseFloat(val));
}
