$(function() {
    $(document).on( "click", ".btn-plus", function(){
        if(!$(this).hasClass('active')){
            $($(this).data().sid).hide();
            $(this).addClass('active');
            $(this).find('.fa-plus').show();
            $(this).find('.fa-minus').hide();
            $(this).parents('.klaster-h').removeClass('active');
        }else{
            $($(this).data().sid).show();
            $(this).removeClass('active');
            $(this).find('.fa-plus').hide();
            $(this).find('.fa-minus').show();

            $(this).parents('.klaster-h').addClass('active');
        }
    });
});
