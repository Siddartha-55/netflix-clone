let faqVisibleBox1 = document.getElementById("faqVisibleBox1");
let faqVisibleBox2 = document.getElementById("faqVisibleBox2");
let faqVisibleBox3 = document.getElementById("faqVisibleBox3");
let faqVisibleBox4 = document.getElementById("faqVisibleBox4");
let faqVisibleBox5 = document.getElementById("faqVisibleBox5");
let faqVisibleBox6 = document.getElementById("faqVisibleBox6");

let faqInvisibleBox1 = document.getElementById("faqInvisibleBox1");
let faqInvisibleBox2 = document.getElementById("faqInvisibleBox2");
let faqInvisibleBox3 = document.getElementById("faqInvisibleBox3");
let faqInvisibleBox4 = document.getElementById("faqInvisibleBox4");
let faqInvisibleBox5 = document.getElementById("faqInvisibleBox5");
let faqInvisibleBox6 = document.getElementById("faqInvisibleBox6");

let faqIcon1 = document.getElementById("faqIcon1");
let faqIcon2 = document.getElementById("faqIcon2");
let faqIcon3 = document.getElementById("faqIcon3");
let faqIcon4 = document.getElementById("faqIcon4");
let faqIcon5 = document.getElementById("faqIcon5");
let faqIcon6 = document.getElementById("faqIcon6");

let clickedElement;
let clickedElementIcon;

let allFaqIds = [faqInvisibleBox1,faqInvisibleBox2,faqInvisibleBox3,faqInvisibleBox4,faqInvisibleBox5,faqInvisibleBox6]
let allFaqIcons = [faqIcon1,faqIcon2,faqIcon3,faqIcon4,faqIcon5,faqIcon6];

faqVisibleBox1.onclick = ()=>{
    clickedElement = faqInvisibleBox1;
    clickedElementIcon = faqIcon1;
    logicImplementation();
}
faqVisibleBox2.onclick = ()=>{
    clickedElement = faqInvisibleBox2;
    clickedElementIcon = faqIcon2;
    logicImplementation();

}
faqVisibleBox3.onclick = ()=>{
    clickedElement = faqInvisibleBox3;
    clickedElementIcon = faqIcon3;
    logicImplementation();

}
faqVisibleBox4.onclick = ()=>{
    clickedElement = faqInvisibleBox4;
    clickedElementIcon = faqIcon4;
    logicImplementation();

}
faqVisibleBox5.onclick = ()=>{
    clickedElement = faqInvisibleBox5;
    clickedElementIcon = faqIcon5;
    logicImplementation();

}
faqVisibleBox6.onclick = ()=>{
    clickedElement = faqInvisibleBox6;
    clickedElementIcon = faqIcon6;
    logicImplementation();

}

function hideAllFaqs() {
    for(let element of allFaqIds){
        if(element === clickedElement){
            continue;
        }
        else{
            element.classList.add("faq-hidden");
        }
    }
    for(let icon of allFaqIcons){
        if(icon === clickedElementIcon){
            continue;
        }
        else{
            icon.classList.remove("rotate");
        }
    }
}
function logicImplementation(){
    hideAllFaqs();
    clickedElement.classList.toggle("faq-hidden");
    clickedElementIcon.classList.toggle("rotate");
}

