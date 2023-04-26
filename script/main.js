$(document).ready(function(){
    // 1. 입출력 메소드
    /*  개발자도구 - F12, ctrl+shift+i, 검사>console
        console.log(); <-- 디버깅할때 주로 사용!
        document.write();
        alert();
    */
//    console.log('jquery 실행!');
//    alert('잘못된 경로로 접근했습니다.'); //알림, 경고창
//    document.write("body에 내용을 출력합니다.", "<br>");
//    document.write("또 다른 내용을 출력합니다.");
//    document.write("<h1>body에 내용을 출력합니다.</h1>");
    //jQuery 시작 코드 [static(정적인 파일들 HTML, CSS, JS, IMAGE) 파일들 로드된 뒤 스크립트 실행]
    /*2. 자료형
    2-1) 숫자(number) :
    2-2) 문자열 (String)
    2-3) 배열 (array)
    2-4) 객체 (object)
    2-5) 함수 (function)
    2-6) 널/눌 (null)
    2-7) 언디파인드 (undefined) <
    2-8) 클래스 (class) : 최근 추가된 (ES6)
    2-9) 심볼 (symbol) : 최근 추가된 (ES6)
    */

    /* 3. 변수 선언 키워드
    3-1) var: 오래된, 변수 선언/할당, 재할당 가능 --> 가급적 쓰지말기
    3-2) let : 최근 변수 선언/할당, 재할당 가능(계속 쓰는..)
    3-3) const : 상수 선언시 할당 (=초기화), 재할당 불가능
    ※let, const를 엄격하게 사용하는 ES6 문법은 보통 "use strict;"와 함께 사용
    */

    var n1 = 100; // 숫자형 변수
    var n2 = "문자열"; // 문자열형 변수
    var n1 = 50; // 재선언, 재할당 (var의 문제점!)
    //let n1:number = 50; // 타입스크립트 변수 선언 (자료형 검사 --> 불일치하면, 오류)
    var arr =[10, "a", "대한민국"];
    console.log(arr[0]); //인덱싱
    arr[1]="B";
    var obj = {name: "홍길동", gender: "남성", job:"학생"}
    var func1 = function(msg){return '${msg} 100';}// 함수 표현식
    func1("hello");
    function func2(x) {return Math.pow(x,2);}//함수 선언식
    var a; //자바스크립트 변수값 초기화 --> undefined 상태
    console.log("a:"+a, typeof a);
    var b = null; // 변수 생성, 값은 없는 상태

    console.log(n1, typeof n1); //변수의 자료형을 확인하는 키워드 typeof

    let age = 100;
    age = 50;
    console.log("age:"+age); //변수, 문자열 함께 출력
    const ratio = 1.5; // 선언시 할당(=초기화)
    //ratio = 1; //에러 발생! (상수)

    //클래스 선언식
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        //실제론 더 작성해야...
        get area(){
            return this.height *this.width;
        }
    }
    //클래스는 선언 후 인스턴스화 해서 사용
    let myRect = new Rectangle (100, 100);
    console.log (myRect.name);

    //심볼
    let mySymbol = new Symbol();

    //4.자바스크립트 예약어
    //네이밍 : $, _, 영문자, 숫자 조합해서 사용 vs var var ="변수";
});