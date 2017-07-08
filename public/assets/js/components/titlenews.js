'use strict';

const headerNews = () => {
    console.log(state.news);
    console.log(state.categories);
     const header = $('<header></header>');
     const menu =$('<nav class="navbar navbar-default">'+
                       '<div class="container-fluid">'+
                          '<img src="assets/img/logoicon.png" class="hidden-md hidden-lg" alt="menu">'+
                           ' <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> '+
                            '<img src="assets/img/menu.png"   alt="menu">'+
                            '</button>'+
                            '<div class="flex space-between hidden-sm hidden-xs">'+
                              '<div class="inline">' +
                                '<div class="inline"><img src="assets/img/menu.png" alt="menu">SECCTIONS</div>'+
                                '<div class="inline"><img src="assets/img/search.png" alt="menu">SEARCH</div>'+
                              '</div>'+
                              '<div class="redes_sociales inline"><span class="icon icon__redes--fb"></span><span class="icon icon__redes--tw"></span><span class=" icon icon__redes--in"></span>'+
                              '</div></div>'+
                        '</div>'+
                      '</nav>');
      const logoLab =$('<section class="flex direction_colum hidden-sm hidden-xs">'+
                            '<div class="flex content_center">'+
                            '  <img src="assets/img/logoicon.png" alt="logo">'+
                            '</div>'+
                            '<div class="flex content_center">'+
                            '  Lunes, Junio 12 de 2017  | '+
                            '  <span class="icon icon__redes--cloud"></span> 22°'+
                            '</div>'+
                          '</section>');

      const homeMenu =$('<section class="home-menu hidden-sm hidden-xs"><ul class="">'+
                            '<li>Lo ultimo</li>'+
                            '<li>Opinión</li>'+
                            '<li>Cultura</li>'+
                            '<li>Perú</li>'+
                            '<li>Tecnología</li>'+
                            '<li>Mundo</li>'+
                            '<li>Economía</li>'+
                            '<li>Lifestyle</li>'+
                            '<li>Deporte</li>'+
                          '</ul></section>');
     header.append(menu);
     header.append(logoLab);
     header.append(homeMenu);

 return header;
}
