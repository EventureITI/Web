function generateArrayFromNumber(num) {
  return new Array(num).fill(0).map((_, i) => i + 1);
}
export default generateArrayFromNumber;
