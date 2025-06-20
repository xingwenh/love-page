$(function() {
    $('#yes').click(function(event) {
        modal('我就知道小宝宝一定会愿意~(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('我知道错了！', A);
    });
});

function A() {
    modal('以后再也不开不适当的玩笑了！', B);
}

function B() {
    modal('说话再也不欠了', C);
}

function C() {
    modal('不要生气了好不好', D);
}

function D() {
    modal('真的知道错了', E);
}

function E() {
    modal('以后你有事再也不墨迹你了', F);
}

function F() {
    modal('原谅我吧宝宝~', G);
}

function G() {
    modal('以后都听你的宝宝', H);
}

function H() {
    modal('原谅我好不好', I);
}
 function I() {
    modal('我会买很多东西给你', J)
}
function I() {
    modal('会好好疼你', J)
}
function I() {
    modal('会哄你睡觉', J)
}
function I() {
    modal('会唱歌给你听', J)
}
function I() {
    modal('爱你。么么哒！', J)
}

function J() {
    modal('爱你爱你', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
