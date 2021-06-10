function first(arr,n)
{
    if(n>arr.length)
    {
        n=arr.length;
    }
    if(n===undefined)
    {
        if(arr.length!==0)
        {
            return(arr[0]);
        }
    }
    if(arr.length===0)
    {
        return [];
    }
    else
    {
        var li=[]
        for(let i=0;i<n;i++)
        {
            li.push(arr[i]);
        }
        return li;
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
