/* 
  Add padding to number.
  Example: 1 --> 001
*/

export default (id: number) => {
  let paddedId = id.toString();
  while (paddedId.length < 3) {
    paddedId = "0" + paddedId;
  }
  return paddedId;
};
