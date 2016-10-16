const reverse = function(arr){

	const arr1=[];
		for(let i=0; i<arr.length;i++)
		{
			arr1[i]=arr[arr.length-1 -i];
		} 
	
	return arr1;
};

const a=[1, 2, 3, 4, 5];
console.log(reverse(a));