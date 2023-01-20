let sliderStore = Array.from($(`#portfolio .tab-content img`).slice(0,6));
sliderStore = sliderStore.map((element)=>element.getAttribute("src"))
let index;
$("nav a").click((eInfo)=>{
    let secPosition = $(eInfo.target.getAttribute("href")).offset().top;
    $("html , body").animate({scrollTop : `${secPosition}px`},1000)
 })
$(`.fa-magnifying-glass`).click((eInfo)=>{
    let imgSrc = $(eInfo.target).parent().parent().siblings("img").attr("src");
    $(".overLay").removeClass("d-none");
    index = sliderStore.indexOf(imgSrc);
    $(".slider").css({"background-image" : `url(${sliderStore[index]})`});
})
function goRight()
{
    if(index>=6)
    {
        index=0;
        $(".slider").css({"background-image" : `url(${sliderStore[index]})`});
    }
    else
    {
        $(".slider").css({"background-image" : `url(${sliderStore[index++]})`});
    }

}
function goLeft(){
    if(index<=-1)
    {
        index=5;
        $(".slider").css({"background-image" : `url(${sliderStore[index]})`});
    }
    else{
        $(".slider").css({"background-image" : `url(${sliderStore[index--]})`});
    }
}
$(`.fa-arrow-alt-circle-right`).click(()=>{
    goRight();
});
$(`.fa-arrow-alt-circle-left`).click(()=>{
    goLeft();
});
$(".fa-x").click(()=>{
    $(".overLay").addClass("d-none");
});
$(document).keydown((eInfo)=>{
    if(eInfo.key == "Escape")
    {
        $(".overLay").addClass("d-none");
    }
    else if(eInfo.key == "ArrowRight")
    {
        goRight();
    }
    else if(eInfo.key == "ArrowLeft")
    {
        goLeft();
    }
});
$('.fa-arrow-down').click(()=>{
    $("html , body").animate({scrollTop : `${$("#about").offset().top}px` } ,100)
});
