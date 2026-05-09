//Question 1
let arr=["Ali","Masium","Mansoor","Omer","Abdullah"]
let first=arr[0]
console.log(first)
console.log(arr[arr.length-1])

//Question 2
function change(arr,item){
    arr.push(item);
    return arr.shift();
}
let marks = [55, 72, 88, 90, 61]
console.log("Before: ",JSON.stringify(marks));
console.log(change(marks,95));
console.log("After: ",JSON.stringify(marks));

//Practice For loop
let array=[]

for (let i=1;i<6;i++){
    array.push(i);
}
console.log(array)

//Question 03
let myarray=[20,40,60,80,100];

for (let i=0;i<myarray.length;i++){
    if(myarray[i]>50){
        console.log(myarray[i]);
    }
}
//Question 4
let sum=0;
let sumarr=[20,40,60,80,100];
for (let i=0;i<sumarr.length;i++){
    sum += sumarr[i];
}
console.log(sum)
//Question 5
let nameArr=["Ali","Mahnoor","Umama","uzma","Asif"]

for (let i=0;i<nameArr.length;i++){
    if(nameArr[i].length>4){
        console.log(nameArr[i]);
    }
}

//Question with while loop 
let sarr = [20, 40, 60, 80, 100];
let s=0;
let i=0;
while(i<sarr.length){
    s += sarr[i];
    i++;
}
console.log(s)