function threeSum(arr, target) {
// write your code here
  arr.sort((a,b) => a - b);
	let closetsum=arr[0]+ arr[1]+ arr[2];
	for (let i = 0; i < arr.length-2; i++) {
		let left=i+1;
		let right=arr.length-1;
		while (left<right) {
			const sum=arr[i]+ arr[left]+ arr[right];
			if (Math.abs(sum-target)<Math.abs(closetsum-target)) {
				closetsum=sum;
			}
			if(sum<target){
				left++;
			}
			else if (sum>target) {
				right--;
			}
			else{
				return sum;
			}
		}
	}
	return closetsum;
}

module.exports = threeSum;
