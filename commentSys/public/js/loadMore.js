// $( document ).ready(function () {
//     $(".comment").slice(0, 3).show();
//       if ($(".blogBox:hidden").length != 0) {
//         $("#loadMore").show();
//       }   
//       $("#loadMore").on('click', function (e) {
//         e.preventDefault();
//         $(".moreBox:hidden").slice(0, 6).slideDown();
//         if ($(".moreBox:hidden").length == 0) {
//           $("#loadMore").fadeOut('slow');
//         }
//       });
//     });


    $(document).ready (function () {  
        $(".comment").slice(0, 4).show();  
        $("#loadMore").on("click", function(e){  
          e.preventDefault();  
          $(".comment:hidden").slice(0, 4).slideDown();  
          if ($(".comment:hidden").length == 0) {  
            $("#loadMore").text("No Content").addClass("noContent");  
          }  
        });  
        });