$(function () {
    let Load = 2.5;

    $(".headerText h1").slideDown(Load*400);

    $(".headerText p").delay(Load*250).slideDown(Load*300);

    $(".headerText .ctaHeader").delay(Load*550).fadeIn(Load*500);

    let tweenUnderline1 = gsap.to('.headerUnderline', 1, {delay:Load/1.3, opacity:1});

    let tweenUnderline2 = gsap.to('.headerUnderline', 1, {delay:Load/1.9, marginLeft:0});




    let tweenLine1 = gsap.to('.socialLine1', Load/1.8, {delay:Load,scaleY:1});
    //
    tweenLine1.play();
    //
    let tweenLine2 = gsap.to('.socialLine2', Load/1.8, {delay:Load,scaleY:1});
    //
    tweenLine2.play();
    //
    $(".socialIcons").delay(Load*100*7.5).fadeIn(Load*600);




    // let tweenLine1 = gsap.to('.socialLine1', Load, {scaleY:1});
    // //
    // tweenLine1.play();
    // //
    // let tweenLine2 = gsap.to('.socialLine2', Load, {scaleY:1});
    // //
    // tweenLine2.play();
    // //
    // $(".socialIcons").delay(Load*100).fadeIn(2500);
});