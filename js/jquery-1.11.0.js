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

        {id:15,
                question:'././images/Блин с твор соус и икрой1.png',
                answer:'././images/Блин с твор соус и икрой.png'},
        {id:16,
         question:'././images/Драники верещака1.png',
         answer:'././images/Драники верещака.png'},

        {id:17,
         question:'././images/драники с беки сыр1.png',
         answer:'././images/драники с беки сыр.png'},

        {id:18,
                question:'././images/драники с дом колб1.png',
                answer:'././images/драники с дом колб.png'},
        {id:19,
         question:'././images/драники с копч лососем1.png',
         answer:'././images/драники с копч лососем.png'}, 

        {id:20,
         question:'././images/драники с мачанкой1.png',
         answer:'././images/драники с мачанкой.png'},

        {id:21,
                question:'././images/драники с цыпленком и грибным соусом1.png',
                answer:'././images/драники с цыпленком и грибным соусом.png'},
        {id:22,
         question:'././images/драники со слоб сол лос1.png',
         answer:'././images/драники со слоб сол лос.png'},

         {id:23,
         question:'././images/драники со сметаной1.png',
         answer:'././images/драники со сметаной.png'},

        {id:24,
                question:'././images/запеченые блины1.png',
                answer:'././images/запеченые блины.png'},
        {id:25,
         question:'././images/налистники с вареньемь1.png',
         answer:'././images/налистники с вареньем.png'},
         {id:26,
         question:'././images/налистники с мочанкой1.png',
         answer:'././images/налистники с мочанкой.png'},
         {id:27,
                question:'././images/рулька с кортоф и яйцом1.png',
                answer:'././images/рулька с кортоф и яйцом.png'}
        ];
        /*for (var i=0;i<cards.length;i++) {
        var randomcard = Math.floor(Math.random() * cards.id);
        console.log(randomcard);
        
        }*/
        
        
        var ran;
        ran= Math.round(Math.random()*26);
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
        
            ran= Math.round(Math.random()*26);
        
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