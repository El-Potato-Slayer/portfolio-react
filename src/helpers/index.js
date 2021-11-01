export function shortenedArray(arr, amount) {
  let newArr = []
  for (let i = 0; i < amount; i++) {
    newArr.push(arr[i])
  }
  return newArr;
}