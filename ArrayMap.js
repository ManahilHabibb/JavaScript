const MyArray=[1,2,3,4];

function myfunction(square)
{
    return square*2;
}

const NewArray=MyArray.map(myfunction);
console.log(NewArray);