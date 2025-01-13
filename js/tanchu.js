
$(document).ready(function(){
    // 半生介绍点击事件
    $('li:nth-child(1)').click(function(){
        $('#modal-intro').fadeIn();
    });

    // 联系方式点击事件
    $('li:nth-child(2)').click(function(){
        $('#modal-contact').fadeIn();
    });

    // 我的收藏点击事件
    $('li:nth-child(3)').click(function(){
        $('#modal-collection').fadeIn();
    });

    // 关闭模态框
    $('.modal-close').click(function(){
        $('.modal').fadeOut();
    });

    // 点击模态框外部关闭
    $('.modal').click(function(event){
        if ($(event.target).is('.modal')) {
            $(this).fadeOut();
        }
    });
});
