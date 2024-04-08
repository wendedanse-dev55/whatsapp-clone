import { useState } from "react";

export const createAudioHelpers = () => {
  const [isListen, setIsListen] = useState(false);
  const handleClickMicrophone = () => {
    const canvas = document.getElementById("voiceAnimation");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const barWidth = 2; // Ширина столбца для точек
    const barGap = 4; // Расстояние между столбцами/точками
    const maxBarHeight = height * 0.8; // Максимальная высота столбца
    const speedFactor = 15; // Увеличиваем для замедления движения анимации
    const noiseThreshold = 3; // Порог для определения тишины

    let volumeLevels = new Array(Math.floor(width / (barWidth + barGap))).fill(
      0,
    );

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setIsListen(true);
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        let frameCount = 0;

        function draw() {
          requestAnimationFrame(draw);

          // Обновляем данные каждый speedFactor кадров
          if (++frameCount >= speedFactor) {
            frameCount = 0;
            analyser.getByteFrequencyData(dataArray);

            let sum = dataArray.reduce((a, b) => a + b, 0);
            let average = sum / bufferLength;
            let normalizedVolume = Math.log1p(average) / Math.log1p(255); // Логарифмическое преобразование

            let volumeHeight =
              normalizedVolume > noiseThreshold / 100
                ? normalizedVolume * maxBarHeight
                : 1;

            // Удаляем последнее значение и добавляем новое в начало массива
            volumeLevels.pop();
            volumeLevels.unshift(volumeHeight);
          }

          ctx.clearRect(0, 0, width, height); // Очищаем canvas

          // Рисуем бары на основе значений в массиве
          volumeLevels.forEach((volume, i) => {
            const x = i * (barWidth + barGap);
            ctx.fillStyle = "#858A8D";
            ctx.fillRect(x, (height - volume) / 2, barWidth, volume); // Рисуем столбец
          });
        }

        draw();
      })
      .catch((error) => {
        console.error("Ошибка при получении аудио потока:", error);
      });
  };
  return {
    isListen,
    handleClickMicrophone,
    setIsListen,
  };
};
