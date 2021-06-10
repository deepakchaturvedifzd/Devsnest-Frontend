var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max_val = 0;
var max_val_item;
for(let item of arr1)
{
    var curr_val = arr1.filter(val => val==item).length;
    if (curr_val>max_val)
    {
        max_val=curr_val;
        max_val_item=item;
    }
    
}

console.log(max_val_item,"( "+max_val+" times)");