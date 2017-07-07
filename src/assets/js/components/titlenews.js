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
    //  title4.append(logo);
    //  title4.append(search);
    //  title4.append(user);
    //  title4.append(menu);
    //  title4.append(message);
    //  title3.append(title4);
    //  title2.append(title3);
    //  title.append(title2);
     header.append(menu);

 return header;
}
