const bubbleSort = require('./bubblesort');

function mergeAndSort(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const uniqueArray = [...new Set(mergedArray)]; // Entferne Duplikate
  const sortedArray = bubbleSort(uniqueArray); // Sortiere das vereinte Array
  return sortedArray;
}

// Beispiel: Vereine zwei Arrays und sortiere sie
const array1 = [2, 5, 3];
const array2 = [8, 2, 3, 1];
const mergedAndSortedArray = mergeAndSort(array1, array2);
console.log("Vereinigtes und sortiertes Array:", mergedAndSortedArray);
