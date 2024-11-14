$( document ).ready(function() {


        var cards=[
        {id:0,
         question:'././images/амер сэндв с говядиной1.png',
         answer:'././images/амер сэндв с говядиной.png'},
        
        {id:1,
         question:'././images/амер сэндв с курицей1.png',
         answer:'././images/амер сэндв с курицей.png'},
        
        {id:2,
         question:'././images/английский завтрак1.png',
         answer:'././images/английский завтрак.png'},
        
        {id:3,
         question:'././images/Беларуский завтрак1.png',
         answer:'././images/Беларуский завтрак.png'},
        
        {id:4,
         question:'././/images/бенедикт с беконом1.png',
         answer:'././images/бенедикт с беконом.png'},
        {id:5,
         question:'././images/бенедикт с лососем1.png',
         answer:'././images/бенедикт с лососем.png'},
        
        {id:6,
         question:'././images/бенедикт с цыпленком1.png',
         answer:'././images/бенедикт с цыпленком.png'},
        
        {id:7,
         question:'././images/блинчики с рикоотой и шпин1.png',
         answer:'././images/блинчики с рикоотой и шпин.png'},
        
        {id:8,
         question:'././images/блинчики с твор и клюкв1.png',
         answer:'././images/блинчики с твор и клюкв.png'},
        
         {id:9,
         question:'././images/Большой блин1.png',
         answer:'././images/Большой блин.png'},
        
        {id:10,
         question:'././images/кули1.png',
         answer:'././images/кули.png'},
        
        {id:11,
         question:'././images/Немецкий завтрак.1.png',
         answer:'././images/Немецкий завтрак.png'},
        
        {id:12,
         question:'././images/овсяная каша1.png',
         answer:'././images/овсяная каша.png'},
        
        {id:13,
         question:'././images/омлет-лосось1.png',
         answer:'././images/омлет-лосось.png'},
        
        {id:14,
         question:'././images/омлет-овощи-гриль1.png',
         answer:'././images/омлет-овощи-гриль.png'},
        
        
        ];
        /*for (var i=0;i<cards.length;i++) {
        var randomcard = Math.floor(Math.random() * cards.id);
        console.log(randomcard);
        
        }*/
        
        
        var ran;
        ran= Math.round(Math.random()*14);
        /*var blindcard=cards[20].question;
            var el=document.getElementById('card');
            //el[0].classList.add('img-responsive');//+=' flashtext';
            el.src=blindcard;
        */
            $('.flashcard').hide();
            $('#checkanswer').hide();
         var displaycard=cards[ran].question;
            var el=document.getElementById('card');
            el.src=displaycard;
        
        
        $('#question').on('click',function(){
        
            ran= Math.round(Math.random()*15);
        
            //console.log(ran);
            
            var displaycard=cards[ran].question;
            var el=document.getElementById('card');
            el.src=displaycard;
        
            $('.flashcard').show();
            $('#checkanswer').show();
            });
        
            $('#question').on("mousedown",function(){
                    $('#question').css("background-color","#b32e2e");
            });
            $('#question').on("mouseleave",function(){
                    $('#question').css("background-color","red");
            });
            $('#question').on("mouseenter",function(){
                    $('#question').css("background-color","#b32e2e");
                });
        
        
        $('#checkanswer').on('click',function(){
            
            var displayanswer=cards[ran].answer;
            var el1=document.getElementById('card');
            el1.src=displayanswer;
        
            $('.flashcard').show();
            
            });
        
            $('#checkanswer').on("mousedown",function(){
                    $('#checkanswer').css("background-color","#b32e2e");
            });
            $('#checkanswer').on("mouseleave",function(){
                    $('#checkanswer').css("background-color","red");
            });
            $('#checkanswer').on("mouseenter",function(){
                    $('#checkanswer').css("background-color","#b32e2e");
                });
        
        
        })