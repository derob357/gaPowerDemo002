'use strict';

angular.module('gaPow')
  .controller('MainController', function () {

    var vm = this;

    vm.userName = 'Deric Robinson';
    vm.helloText = 'Welcome to Ga Pow DemoProject';
    vm.descriptionText = 'It is an AngularJS web app.';
  })
.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 50000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 1920 + slides.length + 1;
    slides.push({
      image: '/assets/images/GaPow_Bg1920x516.jpg',
    //  text: ['Nice image','Awesome photograph'][slides.length % 2],
      id: currIndex++
    });
    slides.push({
      image: '/assets/images/GaPow_Bg1920x516_2.jpg',
    //  text: ['Nice image','Awesome photograph'][slides.length % 2],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 2; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});
