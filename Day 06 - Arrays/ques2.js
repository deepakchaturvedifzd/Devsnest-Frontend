function array_Clone(input)
{
    var new_array = input.slice(0);
    return new_array;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));