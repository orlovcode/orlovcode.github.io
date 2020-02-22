$(function () {
    $('#form164543932 button[type="submit"], #form164543963 button[type="submit"]').on('click',function (e) {
        $form = $(e.target).parents('form');
        setTimeout(function () {
            let $errors = $form.find('.js-error-control-box');
            console.log($errors[0]);
            if ($errors[0] === undefined) {
                $.ajax({
                    url: "./sendMail.php",
                    method: "POST",
                    data: $form.serialize(),
                    success: function () {
                        console.log($form);
                        $form.find('button[type="submit"]').text("Отправлено!");
                        $form.find('.js-successbox').show();
                        if ($form.find('.js-successbox').text().length < 2) {
                            $form.find('.js-successbox').text('Данные успешно отправлены. Спасибо!');
                        }
                    }
                })
            } else {
                console.log('ошибки в форме.')
            }
        },1000)

    })
})
