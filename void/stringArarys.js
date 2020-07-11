const arr = [
  {
    id: '231232',
    value: 312312312,
  },
  {
    id: '123123',
    value: 3123122321312,
  },
  {
    id: '2312131232',
    value: 31231231212312312,
  },
  {
    id: '231231231232',
    value: 312312123123312,
  }
]

// convert array to string
const strArr = JSON.stringify(arr);
console.log(strArr);

// convert string back to array
const backToArr = JSON.parse(strArr);
console.log(backToArr);
