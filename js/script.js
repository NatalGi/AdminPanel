/*
 * Replace all SVG images with inline SVG
 */

"use strict";

(function() {

    document.getElementById('sidebar-toggle-btn').addEventListener('click', function() {
        var sidebarElement = document.getElementById('sidebar');
        var margin = sidebarElement.style.marginLeft;
        var mainPageSection = document.getElementById('main-section');

        //console.log('margin: ' + margin);
        //console.log(sidebarElement.classList); 
        if(!margin || margin == '0px') { //Hide sidebar
            sidebarElement.classList.add('sidebar-hide');
            sidebarElement.classList.remove('sidebar-show');
            sidebarElement.style.marginLeft = '-141px'; //sidebarElement.setAttribute('style', 'margin-left: -141px');    
            sidebarElement.style.overflow = 'hidden';   
            mainPageSection.classList.add('sidebar-hid');
            mainPageSection.style.paddingLeft = '46px';
        }
        else { //Show sidebar
            sidebarElement.classList.remove('sidebar-hide');
            sidebarElement.classList.add('sidebar-show');
            sidebarElement.style.marginLeft = '0'; //sidebarElement.setAttribute('style', 'margin-left: 0');
            sidebarElement.style.overflow = 'auto';
            mainPageSection.classList.add('sidebar-showed');
            mainPageSection.style.paddingLeft = '187px';
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






    