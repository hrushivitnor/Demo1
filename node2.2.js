exports.factorial=function(n)
{
   if (n>=1)
   { var fact=1;
for(var i=1;i<=n;i++)
{
    fact=fact*i;
   
}
return fact;
   }
    else 
		return 1;
}
exports.prime=function(n)
{
	var flag=false;
	var mid=n/2;
	for(var i=2;i<=mid;i++)
	{
		if(n%i==0)
		{
			return "given no is not a prime number";
			flag=true;
			break;
		}
		
	}
	if (flag==false)
	{
		return "Given no is a prime number";
	}
		
}
exports.printTable=function(n)
{
	var arr=[];
	
	for(var i=1;i<=10;i++)
	{
		arr[i-1]=i*n;
		
	}
	return arr;
}
