
//버튼 0을 누르면
//버튼 0에 노란 선이 생기고 나머지는 선이 없어짐
//div-0가 생기고 나머지는 없어짐

var tab_button = $('.tab-button');
var tab_content = $('.tab-content');
var tab_length = $('.tab-button').length;

//반복문 사용시 램 사용률이 높아짐
//for(let i =0; i<tab_length; i++){
//   tab_button.eq(i).click(function(){
//        open_tab(i);
//   })
//
//}

//최적화를 위해 이벤트 리스너 하나만 이용하여 반복문 없이 탭기능 새로 만들기
$('.list').click(function(e){
    /*
    for(let i =0; i<tab_length; i ++){
        if($(e.target).is(tab_button[i])){
            open_tab(i);
        }
    }
    */
   //dataset문법으로 탭기능
   open_tab(e.target.dataset.id);
})

function open_tab(i) {
    tab_button.removeClass('orange');
    tab_button.eq(i).addClass('orange');
    tab_content.removeClass('show');
    tab_content.eq(i).addClass('show');
}
