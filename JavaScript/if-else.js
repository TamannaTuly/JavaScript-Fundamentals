let number = [];
number = [1,2,3,4,5,6,1,1,2];
if(number[0]==number[6]){
    console.log('correct');
}
if(number[0]==number[1]){
    console.log('correct');
}
else{
    console.log('wrong, try again');
}
//examples
if (number[0]==number[6] && number[0]==number[2]){
    console.log('both matched');
}
else{
    console.log('not matched');
}
if(number[0]==number[6] || number[0]==number[1]){
    console.log('both matched or one of them matched');
}
else{
    console.log('nothing matched');
}