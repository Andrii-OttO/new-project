const photoCrs = document.querySelectorAll('.photo');
const all = document.querySelector('.img_list');
const s = document.querySelector('.video');
// function changeCrs() {
//   photoCrs.setAttribute('src', '../video/animation.gif.mp4');
// }
// const p = photoCrs.setAttribute('src', '../video/animation.gif.mp4');

//console.log('photoCrs', s);

const replaseVideo = function () {
  //console.log('Pointer moved in');
  s.setAttribute(display, inherit);
};
all.addEventListener('pointerover', () => {
  replaseVideo();
});
///
// const array = ['Earth', 'Mars', 'Venus'];
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array.length - 1;
//   const lastElement = array[0];
//   const answer = firstElement + lastElement;
//   //return lastElement
//   console.log(answer);

//   // Change code above this line
// }
// console.log(array);

function getExtremeElements(array) {
  // Change code below this line
  const finelArray = [];
  const first = array[0];
  const last = array.langth - 1;

  //const finelArray = first + last
  console.log(finelArray[(first, last)]);

  // Change code above this line
}
getExtremeElements(['apple', 'peach', 'pear', 'banana']);
getExtremeElements([1, 2, 3, 4, 5]);
// console.log(getExtremeElements);
