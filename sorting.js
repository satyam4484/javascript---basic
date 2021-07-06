
// variable and function in class in js 
class sorting{
     Selectionsort(arr) {
        for(let i=0;i<arr.length -1 ;i++) {
            for(let j=i+1;j<arr.length ;j++) {
                if(arr[i] > arr[j]) {
    
                    // swap elements in js 
                    [arr[i],arr[j]] = [arr[j],arr[i]];
                }
            }
        }
    }
}

// normal function outside the class 
function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr.length-i;j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
}

function insertionSort(arr) {
    for(let i=1;i<arr.length;i++){
        let j=i-1;
        let val =arr[i];
        while(j>=0 && val < arr[j]) {
            arr[j+1] = arr[j];
            j=j-1;
            
        }
        arr[j+1] = val;
    }
}



var arr = [5,7,8,36,1,2,66];

// creating object of sorting class 
var s = new sorting();
// s.Selectionsort(arr);
// bubbleSort(arr);
insertionSort(arr);

console.log("Sorting using slection sort ",arr);
console.log("Sorting using bubble sort ",arr);
console.log("Sorting using Insertion sort ",arr);



