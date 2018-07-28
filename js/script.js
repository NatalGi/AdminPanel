/*
 * Replace all SVG images with inline SVG
 */

 /*
        <script type="text/javascript" src="js/script.js"></script>
        <script type="text/javascript">
            inlineSVG.init({
              svgSelector: 'sidebar-icon', // the class attached to all images that should be inlined
              initClass: 'icon-gen', // class added to <html>
            }, function () {
              console.log('All SVGs inlined');
            });
        </script>
 */

function sidebarToggle() {
    var sidebarElement = document.getElementById('sidebar');
    var margin = sidebarElement.style.marginLeft;
    //console.log('margin: ' + margin);
    //console.log(sidebarElement.classList); 
    if(!margin || margin == '0px') {
        sidebarElement.classList.add('sidebar-hide');
        sidebarElement.classList.remove('sidebar-show');
        sidebarElement.style.marginLeft = '-141px'; //sidebarElement.setAttribute('style', 'margin-left: -141px');        
    }
    else {
        sidebarElement.classList.remove('sidebar-hide');
        sidebarElement.classList.add('sidebar-show');
        sidebarElement.style.marginLeft = '0'; //sidebarElement.setAttribute('style', 'margin-left: 0');
    } 
}




/*            (function ()  {
    document.querySelectorAll('.sidebar-icon').forEach(function(img){
        var testElement = document.getElementById('test');
        //testElement.insertAdjacentHTML('afterbegin','DZIAŁA !!!!!!');


        var imgID = img.id;
        var imgClass = img.className;
        var imgURL = img.src;
        var mess = 'Mess: ';


        //testElement.insertAdjacentHTML('afterbegin','id: ' + imgID + ', class: ' + imgClass + ', src: ' + imgURL + '<br>');
  
        fetch(imgURL).then(function(response) {
            return response.text();
        }).then(function(text){

            testElement.insertAdjacentHTML('afterbegin', 'I am here');

            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(text, "text/xml");

            // Get the SVG tag, ignore the rest
            var svg = xmlDoc.getElementsByTagName('svg')[0];

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                svg.setAttribute('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                svg.setAttribute('class', imgClass);//+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            svg.removeAttribute('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
                svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
            }

            //svg.setAttribute('class', 'sidebar-icon');
            //mess += 'class: ' + svg.getAttribute('class') + '<br>';
            mess = "Biaaaatch";

            // Replace image with new SVG
            img.parentNode.replaceChild(svg, img);

        });
        testElement.insertAdjacentHTML('afterbegin', mess);
    });

    
}) ();*/
    