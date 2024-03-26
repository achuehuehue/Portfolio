let data;
let isDarkMode=1;


const thumb=document.querySelector('.thumb');

const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');

hamburger.addEventListener('click', ()=>{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.left = '0px';
})

cross.addEventListener('click', ()=>{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.left = `${-320}px`;
})

thumb.addEventListener('click',()=>{
    const buttonColor=document.querySelector('.light-dark-mode');
    const bodyColor=document.querySelector('body');
    const headings=document.querySelectorAll('h1');
    const paras=document.querySelectorAll('p');
    const containers=document.querySelectorAll('.container');
    const skillContainer1=document.querySelector('.skill-set-js1');
    const skillContainer2=document.querySelector('.skill-set-js2');
    const footerPara=document.querySelectorAll('.footer-para-container p');

    //INITIAL => LIGHT MODE
    if(!isDarkMode){
       
        thumb.style.left='95px';
        buttonColor.style.backgroundColor='#3e8e41';
        bodyColor.style.backgroundColor='#04070d';
        skillContainer1.style.background='#04070d';
        skillContainer2.style.background='#04070d';
        paras.forEach(para => {
            para.style.color='white';
        });
        headings.forEach(heading => {
            heading.style.color='white';
        });
        footerPara.forEach(para =>{
            para.style.color='white';
        });
    }

    //INITIAL => DARK MODE
    else{
        thumb.style.left='65px';
        buttonColor.style.backgroundColor='rgb(223, 221, 221)';
        bodyColor.style.backgroundColor='rgb(219, 220, 220)';
        skillContainer1.style.background='rgb(219, 220, 220)';
        skillContainer2.style.background='rgb(219, 220, 220)';
        paras.forEach(para => {
            para.style.color='black';
        });
        headings.forEach(heading => {
            heading.style.color='black';
        });
        footerPara.forEach(para =>{
            para.style.color='white';
        });
        
       
          
    }
    isDarkMode=!isDarkMode;
   
})

// function renderMode(){

// }

const search=document.querySelector('.fa');
search.addEventListener('click',()=>{
    let handle = document.querySelector(".cf-search-bar").value;
    // RETURNS PROMISE IN JSON FORMAT
    fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
                    .then( res => res.json()) //JS OBJECT FORMAT
                        .then(res =>{data= res.result[0]
                         renderCFDetails(data);
                        });

})


function renderCFDetails(data){
    const cfimage=document.querySelector('.cf-image');
    const cfhandle=document.querySelector('.cf-handle');
    const cfrating=document.querySelector('.cf-rating');
    const cfrank=document.querySelector('.cf-rank');
    const cfmaxrank=document.querySelector('.cf-max-rank');
    console.log(data);
    cfimage.setAttribute('src',data.avatar);
    cfhandle.innerText='Name: '+data.handle;
    cfrating.innerText='Rating: '+ data.rating;
    cfrank.innerText='Rank: ' + data.rank;
    cfmaxrank.innerText='Max-Rank: ' + data.maxRank;
}

const roles=['Competitive-Programmer','Web-Developer','Problem-Solver','Dog-Lover'];
let role='Competitive-Programmer';
let end=roles[0].length;
const roleSpan=document.querySelector('.roles');
const roleListEnd=roles.length;

roleSpan.innerHTML='';
let j=0;
function typeWriter(i,end,mode){
    if(i===end) {
        
        if(mode==='f'){
            i=1;
            mode='b';
            end++;
        }
        else{
            i=0;
            mode='f';
            j++;
            if(j===roleListEnd) {
                end=roles[0].length;
                role=roles[0];
                j=0;
            }
            else{
                end=roles[j].length;
                role=roles[j];}
        }
    }
    if(mode==='f'){
        roleSpan.innerHTML+=role[i];
        if(i===end-1){
        setTimeout(()=>
        typeWriter(i+1,end,'f'),800);
        }
        else{
        setTimeout(()=>
        typeWriter(i+1,end,'f'),50);}
    }
    else{
        roleSpan.innerHTML=role.slice(0,-i);
        setTimeout(()=>
        typeWriter(i+1,end,'b'),30);
    }
}
typeWriter(0,end,'f');






