'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

  wrapper.append(headerNews());
	wrapper.append(bodyNews());
	wrapper.append(bodyWorld());
	root.append(wrapper);
}

const update = function (){
  render(root);
};

$( function() {
	$.getJSON("/api/news/", function (dataNews) {
		state.news = dataNews;

    $.getJSON("/api/categories/", function (dataCategories) {
         state.categories = dataCategories;
         const root = $('.root');
         render(root);
     });
	});
});
