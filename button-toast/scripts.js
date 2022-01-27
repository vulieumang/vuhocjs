var $ = document.querySelector.bind(document)
var toast =  $('#toast')
var showNotify = function({type, title, content, duration}){
  var icon= {
    success: 'fa-check-circle',
    danger: 'fa-exclamation-circle',
    warning: 'fa-exclamation-circle',
  };
  var ele = `
    <i class="notify__icon fas ${icon[type]}"></i>
    <div class="notify__content">
      <h3 class="notify__content_title">${title}</h3>
      <p class="notify__content_content">${content}</p>
    </div>
    <i class="notify__close fa fa-times js_notify__close"></i>
  `
  
  var notify__block = document.createElement('div');
  notify__block.classList = `notify notify--${type}`
  var delay = (duration/1000).toFixed(2)
  notify__block.style.animation = `slideInLeft ease 0.3s, fadeOut ease 0.3s ${delay}s forwards`;
  notify__block.innerHTML = ele.trim();
  

  var timeOutId = setTimeout(function(){
    notify__block.remove()
  },duration+300)
  notify__block.onclick = function(e) {
    if(e.target.closest('.js_notify__close')){
      notify__block.remove()
      clearTimeout(timeOutId)
    }
  }

  toast.appendChild(notify__block)
  
}

$('.js_btn--success').addEventListener('click', ()=>{
  showNotify(
    {type : 'success',
    title: 'Thành công', 
    content: 'Bạn đã đăng ký thành công',
    duration: 4000}
    )
})
$('.js_btn--danger').addEventListener('click', ()=>{
  showNotify(
    {type : 'danger',
    title: 'Thất bại', 
    content: 'Có lỗi xảy ra',
    duration: 4000}
    )
})