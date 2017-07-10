class array
{
	ArrayDifference(array1=[],array2=[])
	{
		var i,j,k=0,l=0;
		var array3 = new Array(2);
		array3[0] = new Array;
		array3[1] = new Array;
		for(i=0;i<array1.length;i++)
		{
			for(j=0;j<array2.length;j++)
			{
				if(array1[i]==array2[j])
					break;
			}
			if(j==array2.length)
			{
				array3[k][l]=array1[i];
				l++;
			}
		}
		k++;
		l=0;
		for(i=0;i<array2.length;i++)
		{
			for(j=0;j<array1.length;j++)
			{
				if(array2[i]==array1[j])
					break;
			}
			if(j==array1.length)
			{
				array3[k][l]=array2[i];
				l++;
			}
		}
		return(array3);
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
