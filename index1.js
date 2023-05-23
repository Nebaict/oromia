function chatBot() {

    this.input;
    
    this.respondTo = function (input) {
  
      this.input = input.toLowerCase();
  
     
  
         if (this.match('(1)'))
         return "፩,Ija-->illaaluu || ዐይን-->ርእይ  ";

         if (this.match('(2)'))
         return "፪,gurra-->Dhagahuu || እዝን-->ሰሚዐ  ";

         if (this.match('(3)'))
         return "፫,Funyaa-->Fufaaehuu || አንፍ-->አዴንም";

         if (this.match('(4)'))
         return "፬,Afaan-->Dhamdhamaa|አፍ-->ጥዲም";

         if (this.match('(5)'))
         return "፭,Harkaa-->xuxuquu||አድ-->ገሲስ";

         if (this.match('(6)'))
         return "፮,ሃበ-->Gara";
         
         if (this.match('(7)'))
         return "፯,መንገለ-->Garan";

         if (this.match('(8)'))
         return "፰,ሃቤሁ-->Garaisaa";

         if (this.match('(9)'))
         return "፱,ሃቤሃ-->Garaishee";

         if (this.match('(10)'))
         return "፲,ሃቤሆሙ-->Garaisaanii";

         if (this.match('(11)'))
         return "፲፩,ሀይመነ-->Amanee";

         if (this.match('(12)'))
         return "፲፪,ሃዘነ-->Gaddee";

         if (this.match('(13)'))
         return "፲፫,ሃይደነ-->Maraafee";
         
         if (this.match('(14)'))
         return "፲፬,መዝገነ-->Galatoofafe";

         if (this.match('(15)'))
         return "፲፭,ማሰነ-->Badee";
               
         if (this.match('(Akkam)'))
         return "እፎ አደርከ(Akkam bulfee obboleessaa)";

         if (this.match('(Nayaa Waaga)'))
         return "Barumisii Akkam(ት/ት እፎ ውእቱ) ";

         if (this.match('(Baayee Gariidha)'))
         return "Guyyaa Garii obbolee ssa koo,Nagaa walhaa agaruu(ሰናይ መዓልት እሁየ በሰላም ያስተራክበነ)!!!";
         
  
      
         

         

         
         
  
         if (this.match('(ምን ውእቱ ግብረ ትገብሪ)'))
         return "ግእዝ-አማርፍ ትርጉም (https://t.me/tnsaegeez)";
  
      return input + ", ምን?";
    };
  
    
    this.match = function (regex) {
  
      return new RegExp(regex).test(this.input);
    };
  }
  
  
  $(function () {
   
   
    var you = 'n';
    var robot = 'ቀሲስ';
  
   
    var delayStart = 400;
    var delayEnd = 800;
  
    
    var bot = new chatBot();
    var chat = $('.chat');
    var waiting = 0;
    $('.busy').text(robot + ' is typing...');
  
   
    var submitChat = function () {
  
      var input = $('.input input').val();
      if (input == '') return;
  
      $('.input input').val('');
      updateChat(you, input);
  
      var reply = bot.respondTo(input);
      if (reply == null) return;
  
      var latency = Math.floor(Math.random() * (delayEnd - delayStart) + delayStart);
      $('.busy').css('display', 'block');
      waiting++;
      setTimeout(function () {
        if (typeof reply === 'string') {
          updateChat(robot, reply);
        } else {
          for (var r in reply) {
            updateChat(robot, reply[r]);
          }
        }
        if (--waiting == 0) $('.busy').css('display', 'none');
      }, latency);
    };
  
    var updateChat = function (party, text) {
  
      var style = 'you';
      if (party != you) {
        style = 'other';
      }
  
      var line = $('<div><span class="party"></span> <span class="text"></span></div>');
      line.find('.party').addClass(style).text(party + ':');
      line.find('.text').text(text);
  
      chat.append(line);
  
      chat.stop().animate({ scrollTop: chat.prop("scrollHeight") });
  
    };
  
  
    $('.input').bind('keydown', function (e) {
      if (e.keyCode == 13) {
        submitChat();
      }
    });
    $('.input a').bind('click', submitChat);
  
  
    updateChat(robot, '1,2,3,4,5 qaamolee nafa');
    updateChat(robot, '6,7,8,9,10,mesteaded ');
    updateChat(robot, '11,12,13,14,15,gse  ');
    updateChat(robot, '"Akkam" dialoge ');
  
  });