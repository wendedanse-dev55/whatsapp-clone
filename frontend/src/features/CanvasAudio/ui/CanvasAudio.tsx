import React, { useState, useEffect, useRef } from "react";

export const CanvasAudio = () => {
  useEffect(() => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Устанавливаем размеры canvas
    canvas.width = 500;
    canvas.height = 50;

    // Параметры анимации
    var speed = 0.5; // скорость движения линии
    var lineWidth = 5; // ширина линии
    var lineSpacing = 5; // расстояние между линиями
    var lines = []; // массив для хранения координат линий

    // Инициализация Web Audio API
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(function (stream) {
        var audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        var analyser = audioContext.createAnalyser();
        var microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 256;
        var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);

        // Функция для получения среднего значения громкости
        function getAverageVolume(array) {
          var values = 0;
          var average;

          var length = array.length;

          for (var i = 0; i < length; i++) {
            values += array[i];
          }

          average = values / length;
          return average;
        }

        // Инициализируем первую линию
        lines.push({ x: canvas.width, height: 5 });

        function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height); // очищаем canvas

          // Анализируем аудио
          analyser.getByteFrequencyData(dataArray);
          var average = getAverageVolume(dataArray);

          // Рисуем линии...
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            ctx.fillRect(
              line.x,
              canvas.height / 2 - line.height / 2,
              lineWidth,
              line.height,
            );
            line.x -= speed; // обновляем позицию линии, двигаем влево
          }

          // Добавляем новую линию с высотой в зависимости от громкости
          if (
            canvas.width - lines[lines.length - 1].x >=
            lineSpacing + lineWidth
          ) {
            lines.push({ x: canvas.width, height: Math.max(5, average / 2) }); // примерная формула для высоты
          }
          requestAnimationFrame(draw); // повторяем анимацию
        }

        ctx.fillStyle = "#000"; // цвет линий
        draw(); // начинаем анимацию
      })
      .catch(function (err) {
        console.log("The following gUM error occured: " + err);
      });
  }, []);
  return (
    <div>
      <canvas
        id="myCanvas"
        width={400}
        height={200}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
};
