angular.module('userProfiles').service('mainService', function () {

var users = [
  {
      "id": 0,
      "first_name": "george",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
  },
  {
      "id": 1,
      "first_name": "lucille",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
  },
  {
      "id": 2,
      "first_name": "oscar",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
  }
]
// Allows the Controller to access the data on this page

this.getUsers = function () {
  return users;
}

this.toggleFavorite = function(userId) {
  users[userId].isFavorite = !users[userId].isFavorite;

}

})
