// loai bo phan tu trung trong mang

var inputs = ['a', 'b', 'b', 'c', 'd', 'e', 'c', 'd', 'e', 'f']; 
var inputs2 = [1, 2, 3, 4, 5, 6]

// c1
// var output2 = [...new Set(inputs)]
// console.log(output2)

// c2
// var output = [];
// inputs.forEach(function(element){
// 	if(!isExistArray(output, element)){
// 		output.push(element);
// 	}
// })
// console.log(output)

// function isExistArray(array, item) {
// 	for (let index = 0; index < array.length; index++) {
// 		const element = array[index];
// 		if(element == item) return true;
// 	}
// 	return false
// }

// C3
// var temp = [];
// var output = inputs.filter((input, index) =>{
// 	console.log('=====')
// 	console.log('input: '+input);
// 	var input2 = inputs.some(thing =>{
// 		// console.log('thing: '+thing)
// 		return input==thing
// 	})
// 	console.log('input2: '+input2)
// 	return input2==input
// })
// console.log(output);

// c4
const uniqueArray = inputs.filter((thing, index) => {
	console.log('=====')
	console.log('thing: '+thing)
	var findResult =  inputs.findIndex(obj => {
		console.log('obj: '+obj)
    return obj == thing;
  });
	return index==findResult

});
console.log(uniqueArray);