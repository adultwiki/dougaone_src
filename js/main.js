// console.log($('#iframe').contents().find('body').html())

// $("#iframe").ready(function(){
//     console.log("ready");

//     $('iframe:first').contents().find('head')

//     var iframe = $('#iframe').contents();
//     console.log($('#iframe').contents().find('body').html())
//     // iframe.find('div').css('background-color', 'black');
//     // console.log(iframe.find('video').attr('src'));

//     // console.log($(".fc2-video-container").children('video').attr('src'))
// });
// $('#iframe').load(function(){
//     console.log('読み込み完了');
//     alert('読み込み完了');
// });

// var iframeOBJ = document.getElementById('#iframe').contentWindow;
// iframeOBJ.postMessage("メッセージを送る", 'https://adult.contents.fc2.com/embed/1599099?i=TXpjeE16a3lNVGc9&info=0&logo=0');


function fc2() {
    // alert("unko")
    console.log($('#iframe').contents().find('body').html())

}


(function ($) {


    //検索キーワードのカテゴリに現在のページのカテゴリを設定
    // $("[id=search-category]").val($('.page-title-link').html().toLowerCase())
    $(".search-category").val($('.page-title-link').html().toLowerCase())

  
    //タグに女優名が含まれる場合、タグの先頭に持ってくる
    //女優名リスト(非表示)の女優名を配列に格納
    var actress = $('.actress-area').text().split(",")
    //リスト内をタグひとつづつ走査    
    $.each(actress,function(i) {
        $('.tag-link-link').each(function(x) {
        
            if( $(this).text() == actress[i] ){

               $(this).text($(this).text() +" ") 
               $('.tag-link-link')[0].before($('.tag-link-link')[x]);
            }

        });
    });




    //タイトルに張られたのリンクを写真にも適用する

    //liの数を取得
    var idx = $('.popular-posts li').length
    //各写真にリンクを適用
    for (var i=0; i<idx; i++) {
        $('.popular-posts-img').eq(i).wrapInner(function() {
            return '<a href="' + $('.popular-posts-item .popular-posts-title h3 a')[i] + '" />';
        });
    }
    

  


     catClickFlg =0;

    //クリックされた動画カテゴリによってロゴクリック時の遷移先を変更する
    $('#main-nav li').click(function(){
        
        //〇番目がクリックされたかを取得
        clickCategory = $(this).index() + 1;

        catClickFlg =1;
     


    });
    $('.logo').click(function(){
        // alert("logo cliked");

        var result=$('#main-nav li').find(".current");

      //  alert(result[0])

    });
    

 

    //関連記事が更新ボタン押下時にパカパカするので対処
    $(".popular-posts").css("visibility", "visible");


    
    // To top button
    $("#back-to-top").on('click', function () {
        $('body, html').animate({ scrollTop: 0 }, 600);
    });

    // Nav bar toggle
    $('#main-nav-toggle').on('click', function () {
        $('.nav-container-inner').slideToggle();
    });

    // Caption
    $('.article-entry').each(function(i) {
        $(this).find('img').each(function() {
            if (this.alt && !(!!$.prototype.justifiedGallery && $(this).parent('.justified-gallery').length)) {
                $(this).after('<span class="caption">' + this.alt + '</span>');
            }

            // 对于已经包含在链接内的图片不适用lightGallery
            if ($(this).parent().prop("tagName") !== 'A') {
                $(this).wrap('<a href="' + this.src + '" title="' + this.alt + '" class="gallery-item"></a>');
            }
        });

    });
    if (typeof lightGallery != 'undefined') {
        var options = {
            selector: '.gallery-item',
        };
        $('.article-entry').each(function(i, entry) {
            lightGallery(entry, options);
        });
        lightGallery($('.article-gallery')[0], options);
    }
    if (!!$.prototype.justifiedGallery) {  // if justifiedGallery method is defined
        var options = {
            rowHeight: 140,
            margins: 4,
            lastRow: 'justify'
        };
        $('.justified-gallery').justifiedGallery(options);
    }

    // Sidebar expend
    $('#sidebar .sidebar-toggle').on('click', function () {
        if($('#sidebar').hasClass('expend')) {
            $('#sidebar').removeClass('expend');
        } else {
            $('#sidebar').addClass('expend');
        }
    });


    // Remove extra main nav wrap
    $('.main-nav-list > li').unwrap();


    // カテゴリの自動色替え
    // ロゴクリック時の遷移先変更
    $('#main-nav > li > .main-nav-list-link').each(function () { //ナビ部分のカテゴリ欄

            if ($(this).attr('name').toUpperCase() == $('.page-title-link').html().toUpperCase()) {

                //カテゴリ名ごとに判定
                $(this).addClass('current');

                var currentPageName =$('.page-title-link').html()

                if(currentPageName !="ホーム"){
                $('#top-logo-link').attr('href', '/categories/' + currentPageName);          
                $('.logo-wrap a').attr('href', '/categories/' + currentPageName);
                 }
                
            } else if ($(this).attr('href') == $('.page-title-link').attr('data-url')) {
                $(this).addClass('current');
                // alert(2)
            }
        // }
    });

 
    // $(function(){
    //     setInterval(function(){
    //         $('.fc2-video-settings-group').css("display","none")
    //         console.log($('.fc2-video-settings-group').length)
    //     },1000);
    // });

    // while ($('.fc2-video-settings-group').length == 0) {
        // console.log("hit")
    //   }


//         $('.fc2-video-settings-group').css("display","none")

// alert($('.fc2-video-settings-group').length)
// console.log($('.fc2-video-settings-group').length)
/* 


    // Auto hide main nav menus
    function autoHideMenus(){
        var max_width = $('.nav-container-inner').width() - 10;
        var main_nav_width = $('#main-nav').width();
        var sub_nav_width = $('#sub-nav').width();
        if (main_nav_width + sub_nav_width > max_width) {
            // If more link not exists
            if ($('.main-nav-more').length == 0) {
                $(['<li class="main-nav-list-item top-level-menu main-nav-more">',
                    '<a class="main-nav-list-link" href="javascript:;">More</a>',
                    '<ul class="main-nav-list-child">',
                    '</ul></li>'].join('')).appendTo($('#main-nav'));
                // Bind hover event
                $('.main-nav-more').hover(function () {
                    if($(window).width() < 480) {
                        return;
                    }
                    $(this).children('.main-nav-list-child').slideDown('fast');
                }, function () {
                    if($(window).width() < 480) {
                        return;
                    }
                    $(this).children('.main-nav-list-child').slideUp('fast');
                });
            }
            var child_count = $('#main-nav').children().length;
            for (var i = child_count - 2; i >= 0; i--) {
                var element = $('#main-nav').children().eq(i);
                if (main_nav_width + sub_nav_width > max_width) {
                    element.prependTo($('.main-nav-more > ul'));
                    main_nav_width = $('#main-nav').width();
                } else {
                    return;
                }
            }
        }
        // Nav bar is wide enough
        if ($('.main-nav-more').length > 0) {
            $('.main-nav-more > ul').children().appendTo($('#main-nav'));
            $('.main-nav-more').remove();
        }
    }
    autoHideMenus();

    $(window).on('resize', function () {
        autoHideMenus();
    });

*/

    // Fold second-level menu
    $('.main-nav-list-item').hover(function () {
        if ($(window).width() < 480) {
            return;
        }
        $(this).children('.main-nav-list-child').slideDown('fast');
    }, function () {
        if ($(window).width() < 480) {
            return;
        }
        $(this).children('.main-nav-list-child').slideUp('fast');
    });

    // Add second-level menu mark
    $('.main-nav-list-item').each(function () {
        if ($(this).find('.main-nav-list-child').length > 0) {
            $(this).addClass('top-level-menu');
        }
    });

})(jQuery);
