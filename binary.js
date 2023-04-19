//create a function for the search
function search(array, x){
    //variables for the start and end
    let begin = 0;
    let end = array.length -1;
     // iterate through the array
     while(begin <= end){
        //before proceeding find a whole number mid Index using Math.floor
        let middle = Math.floor((begin +end)/2);
        //the if statement is to find if the target is at the middle of the array
        if(array[middle] === x){
            return middle
        }
        // to compare the left and riht side
        else if(array[middle] < x){
            begin = middle +1
        }
        else{
            end = middle -1
        }
     }
     return -1

}
let num = [3,4,5,6,7,8,9,10]
let x = 7
console.log(search(num, x))
//The above works in a sorted array


