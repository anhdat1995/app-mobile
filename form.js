function Validator(options) {
    function validate (inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
    var formElement = document.querySelector(options.form);
    if(formElement){
        options.ruler.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                }    
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        })    
        
    }
}
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
} 
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var reger = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return reger.test(value) ? undefined : 'bạn phải nhập email';
        }
    };
}
Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}
Validator.isConfirmed = function(selector,getCofirmValue,) {
    return {
        selector: selector,
        test: function(value) {
            return value === getCofirmValue () ? undefined : 'Mật khẩu nhập lại chưa chính xác'
        }       
    }
}
