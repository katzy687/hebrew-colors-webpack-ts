////=====================Local File Http call===========================
function ColorService($http) {

  return {
    getColors: function () {
      return $http.get('./data/colors.json'); // return only the promise to controller
    }
  };
}

export default ColorService;
