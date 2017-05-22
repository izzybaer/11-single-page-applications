'use strict';
var app = app || {};

(function(module) {

  const articleController = {};

  articleController.initIndexPage = function () {
    app.Article.all.forEach(a =>
      $('#articles').append(a.toHtml()));

    $(document).ready(function() {
      $(!'#articles').hide();
    })
  };

  module.articleController = articleController;
})(app);


  // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
