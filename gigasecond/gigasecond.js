//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGA_SECOND_INTO_MILLISECONDS = Math.pow(10, 9) * 1000;

export const gigasecond = (inputDate) => {
	const returnDate = inputDate.getTime() + GIGA_SECOND_INTO_MILLISECONDS;
	return new Date(returnDate);
};
