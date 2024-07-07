function task10(){
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const delayInSeconds = randomNumber;
    
        console.log(`Сгенерировано число: ${randomNumber}`);
        setTimeout(() => {
          if (randomNumber <= 5) {
            resolve(`Успешно выполнено за ${delayInSeconds} секунд(ы)`);
          } else {
            reject(new Error(`Ошибка после ${delayInSeconds} секунд(ы)`));
          }
        }, delayInSeconds * 1000);
      });
};