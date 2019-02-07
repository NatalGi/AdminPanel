/*
 * Replace all SVG images with inline SVG
 */

"use strict";

$(function() {
  var sidebarElement = $('#sidebar');
  var mainPageSection = $('#main-section');
  var windowWidth = $(window).width();

  if(windowWidth < 560) {
    hideSidebar();
  }

  function showSidebar(fullWidth = false) {
    sidebarElement.removeClass('sidebar-hide');
    sidebarElement.addClass('sidebar-show');
    sidebarElement.css({
      marginLeft: '0px',
      overflow: 'auto'
    });

    if(!fullWidth) {
      mainPageSection.addClass('sidebar-showed');
      mainPageSection.css('padding-left', '187px');
    }
  }

  function hideSidebar() {
    sidebarElement.addClass('sidebar-hide');
    sidebarElement.removeClass('sidebar-show');
    sidebarElement.css({
      marginLeft: '-141px',
      overflow: 'hidden'
    });
    mainPageSection.addClass('sidebar-hid');
    mainPageSection.css('padding-left', '46px');
  }

  $('#sidebar-toggle-btn').click(function() {
    var margin = sidebarElement.css('margin-left');
    windowWidth = $(window).width();

    //console.log('margin: ' + margin);
    //console.log(sidebarElement.classList);
    if(!margin || margin == '0px') { //Hide sidebar
      hideSidebar();
    }
    else { //Show sidebar
      if(windowWidth < 560) {
        showSidebar(true);
      } else {
        showSidebar();
      }
    }
  });

  $('.component--select').each(function(i, element) {
    const parentId = '#' + $(element).attr('id');
    $(parentId + ' .select').click(function() {
      $(parentId + ' .option-list').addClass('transition');
      $(parentId + ' .option-list').toggleClass('expand');
    });

    $(parentId + ' .option-list .option').click(function(event) {
      $(parentId + ' .choosen-option').html($(event.target).html());
      if(parentId === '#component-select-topbar') {
        $('#component-select-sidebar .choosen-option').html($(event.target).html());
      } else if(parentId === '#component-select-sidebar') {
        $('#component-select-sidebar .option-list').toggleClass('expand');
        $('#component-select-topbar .choosen-option').html($(event.target).html());
      }
    });
  });

  $(window).resize(function() {
    /*$('#component-select-1 .option-list').removeClass('transition');
    $('#component-select-sidebar .option-list').removeClass('transition');*/

    $('.component--select').each(function(i, element) {
      const parentId = '#' + $(element).attr('id');
      $(parentId + ' .option-list').removeClass('transition');
    });

    hideSidebar();
    windowWidth = $(window).width();
    if(windowWidth > 900) {
      showSidebar();
    }
  });

  // Remove showing of select elements options in case of click outside of them
  $('body').click(function(event) {
    $('.component--select').each(function(i, element) {
      if(!$(event.target).closest($(element)).length) {
        const parentId = '#' + $(element).attr('id');
        $(parentId + ' .option-list').removeClass('expand');
      }
    });
  });

  // If table row has :hover set :hover to 'links-icon' element
  $('.component--table.table-1 .table-row').mouseenter(function() {
    $(this).find('.links-icon').addClass('hovered');
  });

  $('.component--table.table-1 .table-row').mouseleave(function() {
    $(this).find('.links-icon').removeClass('hovered');
  });

  // If row is clicked, his 'links-icon' link is open
  $('.component--table.table-1 .table-row').click(function() {
    window.location = $(this).find('.links-icon').first().attr("href");
  });

  // On mouseenter to 'a' element in a row, remove 'links-icon' :hover
  $('.component--table.table-1 .table-row a').mouseenter(function() {
    if($(this).hasClass('links-icon')) {
      return;
    } else {
      $(this).parent().parent().find('.links-icon').removeClass('hovered');
    }
  });

  $('.component--table.table-1 .table-row a').mouseleave(function() {
    $(this).parent().parent().find('.links-icon').addClass('hovered');
  });
});
