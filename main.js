var sayingArr =[
  [
    "Don't stop ",
    "Keep moving "

  ],
  [
    'believing',
    'trying',
    'pushing',
  ],
  [
    ' in yourself',
    ' in each other',
  ]
];

function createMessage() {
  let length1 = sayingArr[0].length;
  let length2 = sayingArr[1].length;
  let length3 = sayingArr[2].length;

  let index1 = Math.floor(Math.random() * length1);
  let index2 = Math.floor(Math.random() * length2);;
  let index3 = Math.floor(Math.random() * length3);

  let message = sayingArr[0][index1].concat(sayingArr[1][index2].concat(sayingArr[2][index3]));
  return message
}

console.log(createMessage());

