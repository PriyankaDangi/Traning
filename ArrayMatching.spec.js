class array
{
	ArrayDifference(array1=[],array2=[])
	{
		var maxArray=[],minArray=[],temp=[];
		var array3 = new Array(2);
		if(array1.length>array2.length)
		{
			maxArray=array1;
			minArray=array2;
		}
		else
		{
			maxArray=array2;
			minArray=array1;
		}
		temp=maxArray;
		minArray.forEach(function(min)
		{
			temp = temp.filter(function(max)
			{	
				return max!==min;
			})
			if(temp!==maxArray)
			{
				minArray.splice(0,1);
				maxArray=temp;
			}
		});
		if(array1.length>array2.length)
		{
			array3[0] = maxArray;
			array3[1] = minArray;
		}
		{
			array3[0] = minArray;
			array3[1] = maxArray;
		}
		return array3;
	}
}

describe('Diffrance of two array', function(){

	var Array = new array();
	
	it('should be able to find difference when both the array have all the same elements',function(){
	
		expect(Array.ArrayDifference(['a', 'b', 'c'],['a', 'b', 'c'])).toEqual([[],[]]);
		
	});
	
	it('should be able to find difference when both the array have all the diffrent elements',function(){
		
		expect(Array.ArrayDifference(['a', 'b', 'c'],['d', 'e', 'f'])).toEqual([['a', 'b', 'c'],['d', 'e', 'f']]);
		
	});
	
	it('should be able to find difference when first array contain more elements',function(){
		
		expect(Array.ArrayDifference(['a', 'b', 'c'],['a', 'c'])).toEqual([['b'],[]]);
		
	});
	
	it('should be able to find difference when second array contain more elements',function(){
		
		expect(Array.ArrayDifference(['a', 'b'],['a', 'b', 'c'])).toEqual([[],['c']]);
		
	});
	
	it('should be able to find difference when both the array have some common elements',function(){
		
		expect(Array.ArrayDifference(['a', 'b', 'c'],['a', 'c', 'd'])).toEqual([['b'],['d']]);
		
	});
	
	it('should be able to find difference when both the array is empty',function(){
		
		expect(Array.ArrayDifference([],[])).toEqual([[],[]]);
		
	});

    it('should be able to find difference when first  array is empty and second contains elements',function(){
		
		expect(Array.ArrayDifference([],['a', 'b', 'c'])).toEqual([[],['a', 'b', 'c']]);
		
	});
	
    it('should be able to find difference when second array is empty and first contains elements',function(){
		
		expect(Array.ArrayDifference(['a', 'b', 'c'],[])).toEqual([['a', 'b', 'c'],[]]);
		
	});	
		
});