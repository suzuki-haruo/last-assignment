// const { default: JustValidate } = require("just-validate");
// new JustValidate(form, globalConfig, dictLocale);
import JustValidate from "just-validate";



import Swiper from "swiper";

import 'swiper/css/bundle';




const validator = new JustValidate('#basic_form');

validator

  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力事項です。'
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上、15文字以内で入力してください。'
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '3文字以上、15文字以内で入力してください。'
    },
    
    
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '必須入力事項です。'
    },
    
    
    {
      rule: 'email',
      errorMessage: '形式が異なります。'
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '必須入力事項です。'
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '必須入力事項です。'
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },

  ])
  

  .addField('#basic_address', [
    
    {
    rule: 'required',
    errorMessage:'必須入力事項です。',
    },
    
  

  ])
  .onSuccess(onSuccess);

  

  function onSuccess(event){
    let formData = new FormData(event.target);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("passward"));
    console.log(formData.get("age"));
    console.log(formData.get("address"));
  }



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'slide',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
   
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar2',
  },
});




// let slide1=document.getElementById('slide1');
// let slide2=document.getElementById('slide2');
// let slide3=document.getElementById('slide3');



swiper.on('slideChange',function(){
 
  console.log(swiper.realIndex);
  let swipertext=document.getElementById('swiper-text');
  let title= document.createTextNode('スライド＾＾＾を表示');
  swipertext.appendChiled(title);
}
)


swiper2.on('slideChange',function(){
 
  console.log(swiper2.realIndex);
  let swipertext2=document.getElementById('swiper-text2');
  let title2= document.createTextNode('スライド＾＾＾を表示');
  swipertext2.appendChiled(title2);
}
)

