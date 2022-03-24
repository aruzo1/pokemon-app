/* 
  Add padding to number.
  Example: 1 --> 001
*/

const withPadding = (number: number) => {
  let paddedNumber = number.toString();
  while (paddedNumber.length < 3) {
    paddedNumber = "0" + paddedNumber;
  }
  return paddedNumber;
};

export default withPadding;
