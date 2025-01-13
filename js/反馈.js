$(document).ready(function() {
    $('#feedbackForm').on('submit', function(event) {
        event.preventDefault(); // 防止默认表单提交

        // 重置错误信息
        $('.error').text('');

        // 获取表单数据
        var nickname = $('#nickname').val().trim();
        var contactType = $('#contactType').val().trim();
        var contact = $('#contact').val().trim();
        var opinion = $('#opinion').val().trim();

        var isValid = true;

        // 简单的前端验证
        if (nickname === '') {
            $('#nicknameError').text('昵称不能为空');
            isValid = false;
        }

        if (contactType === '') {
            $('#contactTypeError').text('请选择联系方式类型');
            isValid = false;
        }

        if (contact === '') {
            $('#contactError').text('联系方式内容不能为空');
            isValid = false;
        }

        if (opinion === '') {
            $('#opinionError').text('意见不能为空');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // 准备数据
        var formData = {
            nickname: nickname,
            contactType: contactType,
            contact: contact,
            opinion: opinion
        };

        // 发送 AJAX 请求
        $.ajax({
            url: 'php\register.php',
            type: 'POST',
            data: formData,
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    alert(response.message);
                    $('#feedbackForm')[0].reset();
                } else {
                    alert(response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error(error);
                alert('发生错误，请稍后再试');
            }
        });
    });
});