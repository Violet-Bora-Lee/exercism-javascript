//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const gigasecondIntoMillisecond = Math.pow(10, 9) * 1000;

export const gigasecond = (inputDate) => {
	const returnDate = inputDate.getTime() + gigasecondIntoMillisecond;
	return new Date(returnDate);
};
