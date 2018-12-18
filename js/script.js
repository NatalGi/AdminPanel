/*
 * Replace all SVG images with inline SVG
 */

"use strict";

(function() {
        $('#sidebar-toggle-btn').click(function() {
        var sidebarElement = $('#sidebar');
        var margin = sidebarElement.css('margin-left');
        var mainPageSection = $('#main-section');

        //console.log('margin: ' + margin);
        //console.log(sidebarElement.classList);
        if(!margin || margin == '0px') { //Hide sidebar
            sidebarElement.addClass('sidebar-hide');
            sidebarElement.removeClass('sidebar-show');
            sidebarElement.css({
              marginLeft: '-141px',
              overflow: 'hidden'
            });
            mainPageSection.addClass('sidebar-hid');
            mainPageSection.css('padding-left', '46px');
        }
        else { //Show sidebar
            sidebarElement.removeClass('sidebar-hide');
            sidebarElement.addClass('sidebar-show');
            sidebarElement.css({
              marginLeft: '0px',
              overflow: 'auto'
            });
            mainPageSection.addClass('sidebar-showed');
            mainPageSection.css('padding-left', '187px');
        }
    });

    $(function() {
        $('#component-select-1 .select').click(function() {
            $('#component-select-1 .option-list').addClass('transition');
            $('#component-select-1 .option-list').toggleClass('expand');
        });

        $(window).resize(function() {
            $('#component-select-1 .option-list').removeClass('transition');
        });

        $('#component-select-1 .option-list .option').click(function(event) {
            $('#component-select-1 .choosen-option').html($(event.target).html());
        });
    })

    /*document.getElementById('component--select .select').addEventListener('click', function() {
        document.getElementById('option-list').classList.toggle('show');
    });*/
})();
