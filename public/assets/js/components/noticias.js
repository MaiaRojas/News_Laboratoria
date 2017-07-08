'use strict';

const bodyNews = () => {

    const contNews  = $('<section class="news_end"></section>');
    const rowNews   = $( '<div class="row"></div>');
    const contEnd_1 = $( '<div class="col-md-12  col-sm-12">'+
                         '<div class="cont_img"><img src="assets/img/news/'+ state.news[0].img+'"class="img-responsive" alt=""></div>'+
                         '<div class="text_news"><h3>'+state.news[0].title+'</h3>'+
                         '<p>'+state.news[0].brief+'</p></div></div>');
    const contEnd_2     = $( '<div class="col-md-12 col-sm-12  col-sm-12"></div>');
    const contEnd_2_1   = $('<div class="col-md-6  col-sm-12 contNews_hoy">'+
                            '<div class="cont_img"><img src="assets/img/news/'+ state.news[1].img+'"class="img-responsive" alt=""></div>'+
                            '<div class="cont_text_news "><p>'+ state.news[1].title+'</p></div></div>');
    const contEnd_2_2   = $('<div class="col-md-6 col-sm-12 padding_none"></div>');
    const contEnd_2_2_1  = $('<div class="col-md-6 col-sm-12 col-xs-12 contNews_hoy">'+
                            '<div class="cont_img col-md-12 col-sm-12  col-xs-6"><img src="assets/img/news/'+ state.news[2].img+'"class="img-responsive" alt=""></div>'+
                            '<div class="cont_text_news col-md-12 col-sm-12  col-xs-6"><p>'+ state.news[2].title+'</p></div></div>');
    const contEnd_2_2_2  = $('<div class="col-md-6 col-sm-12 col-xs-12 contNews_hoy">'+
                            '<div class="cont_img col-md-12 col-sm-12 col-xs-6"><img src="assets/img/news/'+ state.news[3].img+'"class="img-responsive" alt=""></div>'+
                            '<div class="cont_text_news col-md-12 col-sm-12  col-xs-6"><p>'+ state.news[3].title+'</p></div></div>');

    rowNews.append(contEnd_1);
    rowNews.append(contEnd_2);
    contEnd_2.append(contEnd_2_1);
    contEnd_2.append(contEnd_2_2);
    contEnd_2_2.append(contEnd_2_2_1);
    contEnd_2_2.append(contEnd_2_2_2);
    contNews.append(rowNews);
    return contNews;
}
