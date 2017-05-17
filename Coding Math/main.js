window.onload = function () {
      var canvas = document.getElementById("canvas"),
          context = canvas.getContext("2d"),
          width = canvas.width = window.innerWidth,
          height = canvas.height = window.innerHeight;

      // Random Lines
      // for(var i = 0; i < 100; i++) {
      //   context.beginPath();
      //   context.moveTo(Math.random() * width, Math.random() * height);
      //   context.lineTo(Math.random() * width, Math.random() * height);
      //   context.stroke();
      // }

      //sine wave
      // context.translate(0, height/2);
      // context.scale(1,-1);
      // for (var angle = 0; angle < Math.PI*2; angle +=0.01) {
      //   console.log(Math.sin(angle));
      //   var x = angle * 200,
      //       y = Math.sin(angle) *200;
      //   context.fillRect(x,y,5,5);
      // }
      var centerY = height * .5,
          centerX = width * .5,
          baseRadius = 100,
          baseAlpha = 0.5,
          offset = height * 0.4,
          speed = 0.1,
          angle = 0;
      render();

      function render () {
        var radius = baseRadius + Math.sin(angle) * 50;
        // var alpha = baseAlpha + Math.sin(angle) * offset;
        var x = centerX + Math.sin(angle) * offset;

        // context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
        context.clearRect(0,0,width,height);
        context.beginPath();
        context.arc(x, centerY, radius, 0, Math.PI*2, false);
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
      }
};
