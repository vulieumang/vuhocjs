// CONCEPT
/*  1. Form click submit - preventDefault - get all selector and rules via rules option
    forEach Rules
      add event onblur validate current input validate(input, rules)
        - validate() :  


      oninput clear error
*/      
function Validator(options) {

  var selectorRules = {}

  function validate(inputEl, rule){
    var errorEl = inputEl.closest('.form-group').querySelector(options.errorSelector)
    var errorMessage
    var rules = selectorRules[rule.selector]
    for (let index = 0; index < rules.length; index++) {
      errorMessage = rules[index](inputEl.value)
      // console.log(errorMessage)
      // console.log(rule)

      if(errorMessage) break;
    }
    if(errorMessage){
      errorEl.innerText = errorMessage
      inputEl.parentElement.classList.add('invalid')
    } else {
      errorEl.innerText = ''
      inputEl.parentElement.classList.remove('invalid')
    }
    return !errorMessage
  }
  var formEl = document.querySelector(options.form)
  if(!formEl) return false
  
  // lap rule va xu ly lang nghe
  options.rules.forEach(function(rule) {
    // luu rule moi input 
    if(Array.isArray(selectorRules[rule.selector])){
      selectorRules[rule.selector].push(rule.test)
    } else {
      selectorRules[rule.selector] = [rule.test]
    }
    
    var inputEl = formEl.querySelector(rule.selector)
    if(inputEl){
      // blur khoi input
      inputEl.onblur = function(){
        validate(inputEl, rule)
      }

      // khi nhap vao input
      inputEl.oninput = function(){
        var errorEl = inputEl.parentElement.querySelector(options.errorSelector)
        errorEl.innerText = ''
        inputEl.parentElement.classList.remove('invalid')
      }

    }
    
  })

  // Submit Event as oo as ô 
  formEl.onsubmit = function(e){
    e.preventDefault()
    var isValid = true;
    options.rules.forEach(function(rule) {
      var inputEl = formEl.querySelector(rule.selector)
      isValid = validate(inputEl, rule)
    })
    if(isValid){
      if(typeof options.onSubmit === 'function'){
        var enableInputs = formEl.querySelectorAll('[name]')
        var formValues = Array.from(enableInputs).reduce(function(values, input){
          values[input.name] = input.value
          return values
        }, {})
        options.onSubmit(formValues)
        
      } else {
        formEl.submit()
      }
    }
  }
}

Validator.isRequired = function(selector, message){
  return {
    selector: selector,
    test: function(value){
      return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
    }
  }
}
Validator.isEmail = function(selector, message){
  return {
    selector: selector,
    test: function(value){
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : message || 'Trường này phải là email'
    }
  }
}
Validator.minLength = function(selector, min, message) {
  return {
    selector: selector,
    test: function(value){
      return value.length>=min ? undefined : message || `Mật khẩu tối thiểu ${min} ký tự`
    }
  }
}
Validator.isConfirmed = function(selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function(value){
      return value==getConfirmValue() ? undefined : message ||  `Giá trị không khớp`
    }
  }
}