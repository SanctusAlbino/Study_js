$(function(){
    // jquery: write less (코드 적게 쓰고), do more (더 많은 처리) via Javascript

    //표시 단추를 클릭해서, 네모 상자?에 어떤 이미지를 출력하기(p.468)

    //1.DOM 요소에 접근
    //document 객체
    //javascript DOM 선택 메소드 [old]
    // const btn = document.getElementById("displayBtn");

    // var imgNo = 1;
    // btn.addEventListener("click",function(){
    //     const displayArea = document.getElementById("displayArea");
    //     imgNo++;
    //     displayArea.innerHTML="<img src=\"https://picsum.photos/id/"+imgNo+"/200/200\" alt=\"picsum\">";
    // })
    // document.getElementsByClassName();
    // document.getElementsByTagName();
    
    //[new] / trend -->jQuery 때문에 (비슷하게?)
    // const btn =  document.querySelector("#displayBtn");

    // btn.addEventListener("click", function(){
    //     const displayArea = document.getElementById("displayArea");
    //     //1. HTML DOM 조작
    //     //displayArea.innerHTML = "<img src='images/bg.jpg' alt='bg image'>";

    //     //2.CSSOM (CSS DOM) 조작
    //     displayArea.style.backgroundImage = "url('images/bg.jpg')";
    //     displayArea.style.backgroundSize = "contain";
    //     displayArea.style.backgroundRepeat = "no-repeat";
    //     displayArea.style.backgroundPosition = "center";
        
    // })
    // document.querySelectorAll();
    //====================아래부터는 jQurey ====================
    //$("ul li:nth-child(1)"); //tag, class, id, ..css selector : 다 된다.. (그래서 편함)
    //$("tag")
    var btn = $("#displayBtn");
    var display = $("#displayArea");

    //클릭 이벤트 메소드 - 클릭하면 할일을 수행
    btn.click(function(){
        // .html(tag) : html 조작 메소드
        //display.html ("<img src='images/bg.jpg' alt='bg image'>")
        
         display.css("backgroundImage","url('images/bg.jpg')"); // :css 조작 메소드
         display.css("backgroundSize","cover"); // :css 조작 메소드
         display.css("backgroundPosition","center"); // :css 조작 메소드
         display.css("backgroundRepeat","no-repeat"); // :css 조작 메소드
    });

    //$(".class")

    


})