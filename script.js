/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Maegan Marlow
      Date: 09/14/2023  

      Filename: script.js
*/

"use strict";

$( () => {
      $("li.submenu")
      .mouseover(e => {
            $(e.currentTarget).children("ul").show();
       })
       .mouseout(e => {
        $(e.currentTarget).children("ul").hide();
       })
});



                                                