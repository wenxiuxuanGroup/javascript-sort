/*****
 * bubbleSort
 * 1, find the smallest number, put it to the left
 * 2, loop until get the last number
 *
********/ 
function bubbleSort(data, pos)
{
	var len = data.length;
	if(pos >= len) {
		return;
	}
	console.log(data);
	for(var i=pos; i< len; ++i) {
		if(data[pos] > data[i]) {
			var x = data[pos];
			data[pos] = data[i];
			data[i] = x;
		}
	}
	pos ++;
	bubbleSort(data, pos);
}
