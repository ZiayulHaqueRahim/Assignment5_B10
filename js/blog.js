

let question1 = document.getElementById('q1')
let question2 = document.getElementById('q2')
let question3 = document.getElementById('q3')
let question4 = document.getElementById('q4')

function qna1Function(question1){
    document.getElementById('ans1').innerText = 'DOM Means Document Object Model.In Browser Javascript read HTML or document file as a object element.And easily access the whole object like a object and easily manipulate and modify it .'
   
}
question1.addEventListener('click',function(){
    document.getElementById('ans2').innerText = ""
})
function qna2Function(question2){
    document.getElementById('ans2').innerText = 'There are several methods like: -getElementById(),getElementsByClassNames(),getElementByTagName(),querrySelector(),querrySelectorAll() etc'
}
function qna3Function(question3){
    document.getElementById('ans3').innerText = 'Delegation means all activity left to their parent class.That means target elements activity delegated to its parent'
}
function qna4Function(question4){
    document.getElementById('ans4').innerText = 'By binding to the tag and then applying various Javascript DOM property'
}