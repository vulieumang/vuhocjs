// h1Element =  document.querySelectorAll('h1')
// for (let index = 0; index < h1Element.length; index++) {
//   const element = h1Element[index];
//   element.onclick = function(){
//     console.log(this)
//   }
//   // console.log(element)
// }

// nếu index là var thì phải gán element rồi mới gọi được,
// nếu index là let thì không cần

h1Element =  document.querySelectorAll('h1')
for (let index = 0; index < h1Element.length; index++) {
  // const element = h1Element[index];
  h1Element[index].onclick = function(){
    console.log(h1Element[index].innerHTML)
  }
  // const element = h1Element[index];
  // element.onclick = function(){
  //   console.log(element)
  // }
  // console.log(element)
}