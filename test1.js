var MyObject = {
	name:"Dima", age: 34, hair: "brown"
};	
function MyObjectName(MON)
{
	return(MON.name);
}
alert(MyObjectName(MyObject));
var MyArray = [1, 2, 3, 4, 5];
function MyArrays(MyArrayP)
{
	for(var i = 0; i < MyArrayP.length;i++)
	{
		alert(MyArrayP[i]);
	}
}
MyArrays(MyArray);


function ZeroToHungred () 
{
	for (var i = 1; i <= 100; i++)
	{
		if (i % 3 == 0 && i % 5 == 0)
		{
			alert("FizzBuzz" + i)
			continue;
		}
		if (i % 3 == 0)
		{
			alert("Fizz" + i);
			continue;

		}
		if (i % 5 == 0)
			alert("Buzz" + i);
		else 
			alert(i);
	}
}
ZeroToHungred();
