
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var tabs = $('.tabs')
var tab_panel = tabs.querySelectorAll('.tab-panel')
var tab_header_items = tabs.querySelectorAll('.tab-header-item')
var line = tabs.querySelector('.line')
line.style.width = tab_header_items[0].offsetWidth

document.addEventListener('DOMContentLoaded', function() {
  // line.style.width = tab_header_items[0].offsetWidth
})

tab_header_items.forEach(function(tab, index){
  tab.addEventListener('click',function(){
    $('.tab-header-item.active').classList.remove('active')
    $('.tab-panel.active').classList.remove('active')
    
    line.style.width = tab.offsetWidth
    line.style.left = tab.offsetLeft

    tab.classList.add('active')
    tab_panel[index].classList.add('active')
  })
})


// First not good
// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)


// var tabs = $('.tabs')
// var tab_header_items = tabs.querySelectorAll('.tab-header-item')
// var line = tabs.querySelector('.line')
// document.addEventListener('DOMContentLoaded', function(e) {
//   line.style.width = tab_header_items[0].offsetWidth

// })
// console.log(tab_header_items[0])

// var tab_panel = tabs.querySelectorAll('.tab-panel')
// tab_header_items.forEach(function(item,index){
//   item.addEventListener('click',function(){
//     removeChildClassElement(tabs, 'active')
//     item.classList.add('active')
//     tab_panel[index].classList.add('active')
//     line.style.width = item.offsetWidth
//     line.style.left = getOffsetWidthFromStart(tab_header_items, index)

//   })
// })

// function removeChildClassElement(parent, className){
//   parent.querySelectorAll('.'+className).forEach(function(item){
//     item.classList.remove(className)
//   })
// }
// function getOffsetWidthFromStart(items, index){
//   var width =0;
//   for (let i = 0; i < index; i++) {
//     width = width+items[i].offsetWidth
//   }
//   return width
// }