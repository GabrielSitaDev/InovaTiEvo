$(document).ready(function () {  $('[data-toggle="offcanvas"]').click(function () {    $('.row-offcanvas').toggleClass('active')  });});//BUSCA$(function(){  var $searchlink = $('#searchtoggl i');  var $searchbar  = $('#searchbar');    $('#topnav ul li a').on('click', function(e){    e.preventDefault();        if($(this).attr('id') == 'searchtoggl') {      if(!$searchbar.is(":visible")) {         // if invisible we switch the icon to appear collapsable        $searchlink.removeClass('glyphicon-search').addClass('glyphicon-zoom-out');      } else {        // if visible we switch the icon to appear as a toggle        $searchlink.removeClass('glyphicon-zoom-out').addClass('glyphicon-search');      }            $searchbar.slideToggle(200, function(){        // callback after search bar animation      });    }  });    $('#searchform').submit(function(e){    e.preventDefault(); // stop form submission  });});