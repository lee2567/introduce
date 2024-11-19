//if(조건식)
//만약 조건식이 참(true)이면 {} 안에 있는 실행문 실행
if(조건문){
    참일 경우 실행
}
//eles if(조건식)
//바로 앞의 id(조건식)이 거짓(false)이고
//지금 else if(조건식)이 참(true)이면
//{} 안에 있는 실행문을 실행 (생략가능)
else if(조건문){
    참일 경우 실행
}
...
//else
//위 조건식들이 모두 거짓(false)이면 실행(생략 가능)
else{
    모든 조건에 해당이 되지 않을 경우 실행
}

const appleprice = 12_000;
const grapeprice = 8_000;
const pearprice = 5_000;

function checkisexpensive(price) {
    if(price > 10_000) {
        return true;
    }
}
    else{
        return false;
    }

    //switch
    switch(조건변수){
        case 값1:
            실행문...
            break;
    //break는 생략 가능하며 말그대로 '여기서 그만 실행하겠다'는 뜻
    //(break가 없다면 아래 case들도 계속 비교 진행)
        case 값2:
            실행문...
            break;
            default: //기본값. 아무 case에도 맞지 않을 때
            실행문...
    }

    const appleprice = 12_000;
const grapeprice = 8_000;
const pearprice = 5_000;

function checkisexpensive(price) {
    if(price > 10_000) {
        return true;
    }
}
    else{
        return false;
    }

function getpricelevel(price){
    if(price > 10_000){
        return "very expensive";
    }else if(price > 5_000){
    return "expensive";    
    }else return "cute";
}

checkisexpensive(appleprice);
checkisexpensive(grapeprice);
checkisexpensive(pearprice);

getpricelevel(appleprice);
getpricelevel(grapeprice);
getpricelevel(pearprice);

//switch
function getFruitPrice(fruit){
    switch(fruit){
        case "apple":
            return 50_000;
        case "banana":
            return 10_000;
        case "orange":
            console.log("정보가 없습니다");
            break;
            default;
            return 0;
    }
}

console.log(getFruitPrice("apple"));
console.log(getFruitPrice("banana"));
console.log(getFruitPrice("orange"));

//for
for(초기화 변수; 조건식; 증감식){
    실행문...
}

for(let i = 0; i<10; i++){ //i++은 i를 1 더해라 (i = i + 1;)
    console.log("안녕!", i);
}

//안녕 0
//안녕 1
//안녕 2
...
//안녕 9

//wile
//조건식이 참(true)인 동안에 실행문을 반복
while(조건){

}

let count = 0;
while(count<3){
    console.log('hi!');
    count = count + 1;
}
//hi!
//hi!
//hi!

//do wile
do{
    실행문...
    //조건에 상관 없이 최초에 한번 실행
}while(조건);

let count = 0;
do{
    console.log(hi!);
    count = count -1;
}while(count > 3);

//hi

//break/cotinue
break
switch문과 반복문에서 사용
즉 switch문 혹은 반복문 종료
continue
반복문에서만 사용
반복문에서 이 명령을 만나면 반복문의 끝으로 이동
반복문의 종료가 아닌 continue와
반복문 사이에 있는 실행문이 무시

for (let i = 0; i < 5; i++){
    console.log("before!, i");
    if (i>2) {
        continue;
    }
    console.log(after!,i);
}
//before! 