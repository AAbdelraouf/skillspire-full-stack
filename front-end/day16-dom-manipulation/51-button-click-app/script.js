'use strict';

var houseBtn = document.getElementById('house-btn');
var gotBtn = document.getElementById('got-btn');
var wdBtn = document.getElementById('wd-btn');
var clearBtn = document.getElementById('clear-btn');
var imgDiv = document.getElementById('img-div');

clearBtn.addEventListener('click', function() {
	imgDiv.innerHTML = '';
});

houseBtn.addEventListener('click', function() {
	imgDiv.innerHTML = '<img src="images/house.jpeg">';
});

gotBtn.addEventListener('click', function() {
	imgDiv.innerHTML = '<img src="images/got.png">';
});

wdBtn.addEventListener('click', function() {
	imgDiv.innerHTML = '<img src="images/wd.jpg">';
});
