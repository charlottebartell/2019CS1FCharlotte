$('.circle').click(
      function(){
        var name = $('.name',this).text(); //read the text from the .name div in the clicked circle
        $('.name','#box').text(name); // write the above result in the .name div in #box

        $("#box").fadeIn();
    }

);


$('#box').click(
      function(){
       $(this).fadeOut();
    }
);