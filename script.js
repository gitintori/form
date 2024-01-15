document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.escolher-form button');

    buttons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            var number = index + 1;
            var forms = document.querySelectorAll('.form-container form');
            forms.forEach(function (form) {
                form.classList.remove('active');
            });
            document.querySelector('.form-container form:nth-child(' + number + ')').classList.add('active');
        });
    });
});
