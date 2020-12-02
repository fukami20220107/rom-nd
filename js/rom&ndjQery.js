$(".tab-nav a").on("click",function(){
    console.log($(this).text());
    if($(this).hasClass('active')){
        return false;
   }
       $(".tab-nav a").removeClass("active");
        $(this).addClass("active");
        console.log(this.hash);
        $(".tab-content > div").removeClass("active");
   
        $(".tab-content > div").filter(this.hash).addClass("active");
       return false;
   });