'use strict';
(function() {
    function checkElement(target) {
        if (target.tagName == 'INPUT') {
            if (target.dataset.hasOwnProperty('required') && target.value == '')
                return false;
            var validator = target.dataset.validator;
            if (validator == 'letters' && target.value) {
                if (!(/[A-Za-zА-Яа-я]+/.test(target.value)))
                    return false;
            }
            else if (validator == 'number' && target.value) {
                var value = parseInt(target.value);
                if (!(/[0-9]+/.test(target.value)))
                    return false;
                else {
                    var dataset = target.dataset;
                    if (dataset.hasOwnProperty('validatorMin') && value < parseInt(dataset.validatorMin))
                        return false;
                    if (dataset.hasOwnProperty('validatorMax') && value > parseInt(dataset.validatorMax))
                        return false;
                }
            }
            else if (validator == 'regexp' && target.value) {
                var pattern = target.dataset.validatorPattern;
                var regexp = new RegExp(pattern);
                if (!(regexp.test(target.value)))
                    return false;
            }
            return true;                
        }
        return true;
    }

    // Код валидации формы
    window.validateForm = function(obj) {
        var form = document.getElementById(obj.formId);
        var inputs = Array.from(form.getElementsByTagName('input'));

        form.addEventListener('blur', function(event) {
            if (!checkElement(event.target)) 
                event.target.classList.add(obj.inputErrorClass);
        }, true);

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.classList.remove(obj.formInvalidClass);
            form.classList.remove(obj.formValidClass);
            var hasErrors = 0;
            for (var i = 0; i < inputs.length; i++) {
                var input_item = inputs[i];
                if (!checkElement(input_item)) {
                    input_item.classList.add(obj.inputErrorClass);
                    hasErrors = 1;
                }
            }
            if (hasErrors == 1) form.classList.add(obj.formInvalidClass);
            else form.classList.add(obj.formValidClass);
        });

        form.addEventListener('focus', function(event) {
            event.target.classList.remove(obj.inputErrorClass);
        }, true);
    }

}());