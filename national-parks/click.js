$('.circle').click(
      function(){
        var name = $('.name',this).text(); //read the text from the .name div in the clicked circle
        $('.name','#box').text(name); // write the above result in the .name div in #box
        console.log (name,$(this).attr('id'));
        
        var description= $('.description',this).text(); 
        $('.description','#box').text(description); 
        console.log (description,$(this).attr('id'));
        
        
        $("#box").fadeIn();
    }

);


$('#box').click(
      function(){
       $(this).fadeOut();
    }
);