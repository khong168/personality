$(document).ready(function() {
  $("form#surveyForm").submit(function(event) {
      var quality = $("input[name='quality']:checked").val();
      var drunkFood = $("input[name='drunkFood']:checked").val();

      console.log(quality);
      console.log(drunkFood);

      if (quality === 'bravery' && drunkFood === 'burritos') {
        $("#sexy").show();
      } else if (quality === 'kindness' && drunkFood === 'burritos') {
        $("#fabulous").show();
      } else if (quality === 'honesty' && drunkFood === 'burritos') {
        $("#brilliant").show();
      } else if (quality === 'bravery' && drunkFood === 'pizza') {
        $('#brilliant').show();
      } else if (quality === 'kindness' && drunkFood === 'pizza') {
        $('#positive').show();
      } else if (quality === 'honesty' && drunkFood === 'pizza') {
        $('#cool').show();
      } else if (quality === 'bravery' && drunkFood === 'fries') {
        $('#cool').show();
      } else if (quality === 'kindness' && drunkFood === 'fries') {
        $('#adventurous').show();
      } else {
        $('#brilliant').show();
      }


      event.preventDefault();
    });
  });
