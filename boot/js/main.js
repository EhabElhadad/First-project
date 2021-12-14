let aboutOffset=$("#About").offset().top
$(window).scroll(function()
{
    
    let topOffset=$(window).scrollTop()
    if(topOffset>=aboutOffset-50)
    {
        $(".navbar").css({"background-color":"rgba(0,0,0,0.4)","transition":"all 2s"})
    }
    else
    {
        $(".navbar").css({"background-color":"transparent","transition":"all 2s"})

    }

    if(topOffset>1000)
    {
        $("#topBtn").fadeIn(2000)
    }
    else
    {
        $("#topBtn").fadeOut(2000)
    }
})



$(".nav-link").click(function()
{
    let currentLink=$(this).attr("href")
    let currentOffset=$(currentLink).offset().top
    $("body").animate({scrollTop:currentOffset},2000)
    
})


$("#topBtn").click(function()
{
    $("body").animate({scrollTop:0},2000)

})


$(document).ready(function()
{
    $(".loading").fadeOut(2000,function(){
        $("body").css({"overflow":"visible","transition":"all 5s"})
    })
})