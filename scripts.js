 $("document").ready(function(){
            $("#reserve-modal").click(function()
            {
                $('#reserveModal').modal('show')
            });

            $("#modal-login").click(function()
            {
                $('#loginModal').modal('show')
            });


        });

 $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });

 $(document).ready(function() {
   
   
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });

   
    if ($(window).width() < 992) {
        $('.dropdown-menu a').click(function(e){
            e.preventDefault();
            if($(this).next('.submenu').length){
                $(this).next('.submenu').toggle();
            }
            $('.dropdown').on('hide.bs.dropdown', function () {
               $(this).find('.submenu').hide();
            })
        });
    }
    
});
                