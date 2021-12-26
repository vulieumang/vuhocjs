function con_tho_an_co(callback007) {
  setTimeout(function() {
    console.log('con thỏ ăn cỏ, uống nước');
    callback007(); // đây là lúc điệp viên báo cáo cho sếp !
  }, 1000);
}

// con thỏ chui vô hang
function hotel(callback) {
  setTimeout(function() {
    console.log('chui vô hotel');
    callback(); // đây là lúc điệp viên báo cáo cho sếp !
  }, 2000);
}
// con thỏ chui vô hang
function xxx() {
  setTimeout(function() {
    console.log('xxx1');
  }, 2000);
  console.log('xxx');
}

// con_tho_an_co(hotel(xxx));

hotel(xxx)

// con_tho_an_co(
//   hotel(
//     xxx()
// ));

// con_tho_an_co(function() {
//   hotel(function(){
//     xxx()
//   });
// });

//hell
// function doA(cb) {
//   console.log('b')
//   // cb();
// }

// function doB(cb) {
//   console.log('ab')
//   // cb();
// }

// function doC(cb) {
//   console.log('c')
//   // cb();
// };


// // đây là code ko kotex
// function main() {
//   doA(function(){
//     doB(function(){
//       doC(function(){
//         console.log('lịt pẹ mệt vl'); 
//       });
//     });
//   });
// }
// function man(){doA(doB(doC()))}
// man()
