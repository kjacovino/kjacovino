// $(function() {
//
//     $("#nav").load("/templates/menu.html");
//
//     function activeNav() {
//         var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
//          $("#nav ul li a").each(function(){
//               if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
//               $(this).addClass("active");
//          });
//     }
//
//     setTimeout(function() {
//         activeNav();
//     }, 100);
//
// });

// $(function () {
//     $("#nav").load("/templates/menu.html");
// });
//
// jQuery(function($) {
//  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
//  $('ul a').each(function() {
//   if (this.href === path) {
//    $(this).addClass('active');
//   }
//  });
// });
