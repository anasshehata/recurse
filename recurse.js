var numbers = [1, 2, 3, 4, 5];

numbers = [2,4,1,3,5,8,4,1,-4];

/**
 * @param {Array<number>} array
 * @param {number=} index
 * @return {number}
 */
function max(array, index, maximum)
{
	// Since we need to look at every value in the array,
	// we need to iterate either from begin to end, or 
	// from the end to the beginning. This constant decides:
	//     -1 means loop backwards
	//     +1 means loop forwards
	var direction = -1;

	// firstIndex is the index we will consider first,
	// lastIndex is the where the final value is at.
	var firstIndex = direction == 1 ? 0 : array.length - 1;
	var lastIndex  = direction == 1 ? array.length - 1 : 0;
	
	// var direction = -1;

	// Initialize recursion
	if (typeof maximum !== "number")
	{
		// Since the first value should always be considered the highest value yet,
		// we'll use negative infinity as initial maximum, to make sure all posible values
		// are higher than this initial value.

		// Besides, when the array is empty we can return negative infinity, this should
		// help reduce unwanted side effects by making sure the outcome of this function is
		// never greater than any value one could compare it with.
		maximum = -Infinity;
	}

	// FIXME: document this
	if (typeof index !== "number")
	{
		index = firstIndex;
	}

    // Some indexes don't exist. Exceptions in those cases.
    if (index < 0 || index > array.length)
    {
    	throw new RangeError("invalid index");
    }
	// Look at every index, and remember the value if it is the highest one yet.
	if (array[index] > maximum)
	{
		maximum = array[index];
	}

	// // When we have seen every value, return the highest one yet.
	if (index === lastIndex)
	{
		return maximum;
	}
	else
	{
	    // Recurse from `index` is last index in array (array.length - 1)
	    // towards index 0. Never go lower than index 0.

	    // Call `max` recursively at the very end of the function,
	    // to aid compilers that support tail recursion optimization.
		return max(array, index + direction, maximum);
	}
/*

	if (index !== lastIndex)
	{
		// Until we have seen every value, recurse.
		// bla bla
		return max(array, index + direction, maximum);
	}

    return maximum;
*/
}

console.log(max(numbers))