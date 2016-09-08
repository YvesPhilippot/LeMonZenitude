// ==UserScript==
// @name         Le Monde Zen
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Afficher les news abonnés Le Monde lorsqu'on est en lecture Zen
// @author       El_Rhonin
// @match        http://www.lemonde.fr/*
// @grant        GM_addStyle
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==
/* jshint -W097 */
// Your code here...
$(document).ready(function() {
    

      
    function listenerOffreEvent(){
    $('.fond_overlay.offre_decouverte').each(function(){
        var zindex = $(this).css("zIndex");
        if(zindex > 1) {
            $(".fond_overlay.offre_decouverte").hide();
            $(".overlay.offre_decouverte").hide();
           
        }
    });
}
window.setInterval(listenerOffreEvent, 100);
    
});
