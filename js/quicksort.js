/***
 * quickSort: to sort the numbers using quick method
 * data: numbers in array
 * left: the first position in less part
 * right: the last position in more part
 * rule: 1, select any number in array
 *       2, put all smaller numbers to left part, bigger numbers to right part
 *       3, set pivot number to the new left/right number
 *       4, do the recusive again for left part and right part
 * author: Raymond Fu
***/

function quickSort(data, left, right)
{
  //to set pivot number, it could be any numbers inside the array, I set the first number here
  var l = left, r = right, x = data[left];
  
  if(l > r) {
    return
  }
  console.log(data);
  while(l < r) {
    //to seperate all numbers into two parts, one smaller and another bigger
    //first, to find each number that smaller than pivot from the right end
    while(l < r && x > data[r]) {
      r--;
    }
    //set the first smaller number to left position
    if(l < r) {
      data[l] = data[r];
      l++;
    }
    //to seek the first number that bigger than pivot in left part
    while(l < r && x < data[l]) {
      l ++;
    }
    //if found, set the first bigger number to right part
    if(l < r) {
      data[r] = data[l];
      l --;
    }
  }
  //now l should be same as r
  //let's set value x to l position
  data[l] = x;
  
  //do the recrusive again
  quickSort(data, left, l-1);
  qucikSort(data, l+1, right);
}
