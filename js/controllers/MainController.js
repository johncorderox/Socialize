app.controller('MainController', ['$scope', function($scope) {

var count = 0;

$scope.code = function () {

checkFields();
showContent(1);


//Deviantart
if (count == 1) {

    var usersrc = "http://i68.tinypic.com/537ora.jpg";
    var userLink = document.getElementById('userURL').value;
    var userAlt = "deviantart";
    var userHeight = document.getElementById('userHeight').value;
    var userWidth = document.getElementById('userWidth').value;
    var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
    document.getElementById('textBox').value = output;

}

//Facebook
if (count == 2) {

  var usersrc = "http://i67.tinypic.com/rtomeo.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "facebook";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Github
if (count == 3) {

  var usersrc = "http://i64.tinypic.com/2cwpk5y.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "github";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Google+
if (count == 4) {

  var usersrc = "http://i64.tinypic.com/fdg5jn.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "googleplus";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Instagram
if (count == 5) {

  var usersrc = "http://i67.tinypic.com/30s97b7.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "instagram";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//LinkedIn
if (count == 6) {

  var usersrc = "http://i67.tinypic.com/rrr1uc.jpg";
  var userLink = document.getElementById('userURL').value;
  var useAlt = "linkedin"
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Pinterest
if (count == 7) {

  var usersrc = "http://i63.tinypic.com/sz8mxh.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "pinterest";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Reddit
if (count == 8) {

  var usersrc = "http://i68.tinypic.com/2us7t05.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "reddit";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Snapchat
if (count == 9) {

  var usersrc = "http://i63.tinypic.com/am8t2a.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "snapchat";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Tumblr
if (count == 10) {

  var usersrc = "http://i68.tinypic.com/fo3f2o.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "tumblr";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Twitter
if (count == 11) {

  var usersrc = "http://i66.tinypic.com/2cz65wk.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "twitter";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Vine
if (count == 12) {

  var usersrc = "http://i66.tinypic.com/r7ofgk.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "vine";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//WhatsApp
if (count == 13) {

  var usersrc = "http://i66.tinypic.com/scs7wz.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "whatsapp";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Yelp
if (count == 14) {

  var usersrc = "http://i64.tinypic.com/35i6kww.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "yelp";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

//Youtube
if (count == 15) {

  var usersrc = "http://i64.tinypic.com/2zsb49g.jpg";
  var userLink = document.getElementById('userURL').value;
  var userAlt = "youtube";
  var userHeight = document.getElementById('userHeight').value;
  var userWidth = document.getElementById('userWidth').value;
  var output = "<a href=\"" + userLink + "\">" + "<img src =\""+ usersrc + "\"alt=\""+ userAlt+ "\"height=\""+userHeight+"\"width=\""+userWidth+"\"</a>";
  document.getElementById('textBox').value = output;

}

  }

  $scope.detectClick = function(subject) {

    count = 0;
    var clickedSubject = $scope.subjects.indexOf(subject);
    switch (clickedSubject) {
      case 0:

        showContent();
        reset();
        count = 1;
        document.getElementById('show').src ="icons/Deviantart.png";
        break;

      case 1:
        showContent();
        reset();
        count = 2;
        document.getElementById('show').src ="icons/Facebook.png";
        break;

      case 2:
        showContent();
        reset();
        count = 3;
        document.getElementById('show').src ="icons/Github.png";
        break;

      case 3:
      showContent();
      reset();
      count = 4;
      document.getElementById('show').src ="icons/Google+.png";
      break;

      case 4:
      showContent();
      reset();
      count = 5;
      document.getElementById('show').src ="icons/Instagram.png";
      break;

      case 5:
      showContent();
      reset();
      count = 6;
      document.getElementById('show').src ="icons/Linkedin.png";
      break;

      case 6:
      showContent();
      reset();
      count = 7;
      document.getElementById('show').src ="icons/Pinterest.png";
      break;

      case 7:
      showContent();
      reset();
      count = 8;
      document.getElementById('show').src ="icons/Reddit.png";
      break;

      case 8:
      showContent();
      reset();
      count = 9;
      document.getElementById('show').src ="icons/Snapchat.png";
      break;

      case 9:
      showContent();
      reset();
      count = 10;
      document.getElementById('show').src ="icons/Tumblr.png";
      break;

      case 10:
      showContent();
      reset();
      count = 11;
      document.getElementById('show').src ="icons/Twitter.png";
      break;

      case 11:
      showContent();
      reset();
      count = 12;
      document.getElementById('show').src ="icons/Vine.png";
      break;

      case 12:
      showContent();
      reset();
      count = 13;
      document.getElementById('show').src ="icons/WhatsApp.png";
      break;

      case 13:
      showContent();
      reset();
      count = 14;
      document.getElementById('show').src ="icons/Yelp.png";
      break;

      case 14:
      showContent();
      reset();
      count = 15;
      document.getElementById('show').src ="icons/Youtube.png";
      break;

      default:
              switchError();
    }
  }
  $scope.subjects = [

      {name: 'Deviantart', type: 'art'},
      {name: 'Facebook', type: 'social'},
      {name: 'Github', type: 'code'},
      {name: 'Google +', type: 'social'},
      {name: 'Instagram',type: 'photo', type: 'social'},
      {name: 'LinkedIn', type: 'social'},
      {name: 'Pinterest',type: 'social'},
      {name: 'Reddit', type: 'social'},
      {name: 'Snapchat', type: 'social'},
      {name: 'Tumblr',type: 'social'},
      {name: 'Twitter', type: 'social', type: 'news'},
      {name: 'Vine', type: 'video'},
      {name: 'WhatsApp', type: 'social'},
      {name: 'Yelp', type: 'food'},
      {name: 'Youtube', type: 'social', type: 'video', type: 'share'}

  ];


}]);
