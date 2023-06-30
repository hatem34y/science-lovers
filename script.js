'use strict';
// modal variables
const modal = document.querySelector('[data-modal]');
const middle_one = document.getElementById('m1');
const middle_two = document.getElementById('m2');
const middle_three = document.getElementById('m3');
const senior_one = document.getElementById('s1');
const senior_two = document.getElementById('s2');
const senior_three = document.getElementById('s3');
//header
const overlay = document.getElementById('overlay');
const wrapper = document.getElementById('wrapper');
const navlist = document.getElementById('nav-list');
const navbar = document.getElementById('navbar');
const header = document.getElementById('header');


// buttons
const b_one = document.getElementById('m1b');
const b_two = document.getElementById('m2b');
const b_three = document.getElementById('m3b');
const b_four = document.getElementById('s1b');
const b_five = document.getElementById('s2b');
const b_six = document.getElementById('s3b');


// modal function
const b_one_f = function () { 
    modal.style.display="none";
    middle_one.style.display="block";
}

const b_two_f = function () { 
    modal.style.display="none";
    middle_two.style.display="block";
}

const b_three_f = function () { 
    modal.style.display="none";
    middle_three.style.display="block";
}

const b_four_f = function () { 
    modal.style.display="none";
    senior_one.style.display="block";
}

const b_five_f = function () { 
    modal.style.display="none";
    senior_two.style.display="block";
}

const b_six_f = function () { 
    modal.style.display="none";
    senior_three.style.display="block";
}
// modal eventListener
b_one.addEventListener('click', b_one_f);
b_two.addEventListener('click', b_two_f);
b_three.addEventListener('click', b_three_f);
b_four.addEventListener('click', b_four_f);
b_five.addEventListener('click', b_five_f);
b_six.addEventListener('click', b_six_f);


