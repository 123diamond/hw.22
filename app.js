/*
let i;
for(i=0; i<=10; i++){

    console. log("hello world");
}


//
let arr = ["one,"two,"tree"];

console.table(arr)

//
let arr = ["one,"two,"tree"];

arr.forEach(key => {
    console.log(key);
});

//
let arr = ["one,"two,"tree"];

let i;
for(i=0; i,<arr.lenght; i++){
console.log(arr[i]);
}
arr.forEach(key => {
    console.log(arr);
});

//
let arr = ["one,"two,"tree","4"];

let i;
for(i=0,i<=10.length;i++){
    console.log(arr{i});
}

//
*/





let dec = document.querySelector('.dec');
let result = document.querySelector('.result');
let inc = document.querySelector('.inc');

inc.addEventListener("click", function(){

    
if(result.value <5){
        
    result.value = Number(result.value) + 1;
   // console.log(result);

}else{
    inc.style.cursor = 'not-allowed';
    
}

});


dec.addEventListener("click",()=>{

    if(result.value>1){
        result.value = Number(result.value) - 1;
    }else{
        dec.style.cursor = 'not-allowed';
    }

})

   



let range = document.querySelector('.range')
let contain = document.querySelector('.contain')

range.addEventListener("input", function(){

    let rslt = Number(range.value);

contain.innerHTML = rslt;


});