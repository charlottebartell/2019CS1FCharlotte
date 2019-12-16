/*eslint-disable no-undef */
init();

function init(){
    for(var r=0; r<9; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace();
}

function startRace(){
    TweenMax.to("#car1",1,{x:520,ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:520, y:-300,rotation:90,delay:1, ease:Sine.easeOut});
    TweenMax.to("#car1",1,{x:-100, y:-300,rotation:-4,delay:2.5, ease:Sine.easeOut});
    TweenMax.to("#car1",1,{x:-100,y:30,rotation:90,delay:3.8, ease:Sine.easeOut});
    TweenMax.to("#car1",1,{x:220,y:0,delay:4.7, ease:Sine.easeOut});
}
    TweenMax.to("#car2",1,{x:520,ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:520, y:-300,rotation:90,delay:2, ease:Sine.easeOut});
    TweenMax.to("#car2",1,{x:-100, y:-300,rotation:-4,delay:3.8, ease:Sine.easeOut});
    TweenMax.to("#car2",1,{x:-100,y:30,rotation:90,delay:5, ease:Sine.easeOut});
    TweenMax.to("#car2",1,{x:220,y:0,delay:7, ease:Sine.easeOut});
 
    TweenMax.to("#car3",1,{x:520,ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{x:520, y:-300,rotation:90,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car3",1,{x:-100, y:-300,rotation:-4,delay:5, ease:Sine.easeOut});
    TweenMax.to("#car3",1,{x:-100,y:30,rotation:90,delay:8, ease:Sine.easeOut});
    TweenMax.to("#car3",1,{x:220,y:0,delay:8.5, ease:Sine.easeOut});
                                                                                                                                                                                                                                                                                                                                                                                                                                    
