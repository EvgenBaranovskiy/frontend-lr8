let firstPlayerName, secondPlayerName = "Computer";
let totalScoreFirstPlayer = 0, totalScoreSecondPlayer = 0;


document.addEventListener("DOMContentLoaded", () => {
    const firstPlayerGeneratedNumDiv = document.getElementById("first-player-generated-number");
    const secondPlayerGeneratedNumDiv = document.getElementById("second-player-generated-number");
    const firstPlayerTotalScoreDiv = document.getElementById("first-player-total-score");
    const secondPlayerTotalScoreDiv = document.getElementById("second-player-total-score");
    const generateButton = document.getElementById("generate-button");


    //Ввод імені гравця
    while (true) {
        firstPlayerName = prompt("Введіть ваше ім'я: ", "Player");
        if (isValidPlayerName(firstPlayerName)) {
            setPlayerName(firstPlayerName);
            break;
        } else {
            alert("Щось з Вашим ім'ям не так!");
        }
    }

    //Початок гри
    //generateAndCompare();
    //updateTotalScore();

    //Обробка подія натискання на кнопку ЗГЕНЕРУВАТИ
    generateButton.addEventListener("click", (event) => {
        generateAndCompare();
        updateTotalScore();

        //Якщо нічия
        if (totalScoreFirstPlayer == 3 && totalScoreSecondPlayer == 3) {
            alert("Вітаю, " + firstPlayerName + " у Вас нічия з " + secondPlayerName + "!");
            restart();
            return;
        }

        //Якщо перший гравець вийграв
        if (totalScoreFirstPlayer == 3) {
            setTimeout(() => {
                alert("Вітаю, " + firstPlayerName + " ви перемогли " + secondPlayerName + "!");
                restart();
            }, 100);
            return;
        }

        //Якщо другий гравець вийграв
        if (totalScoreSecondPlayer == 3) {
            setTimeout(() => {
                alert("Нажаль, " + firstPlayerName + " ви програли гравцю " + secondPlayerName + "!");
                restart();
            }, 100);
            return;
        }
    });

    
    //Функція для перевірки валідності ім я гравця
    function isValidPlayerName(playerName) {
        return playerName != null && String(playerName).trim().length > 0;
    }

    //Функція для встановлення ім я гравця
    function setPlayerName(playerName) {
        document.getElementById("first-player-name").innerText = playerName;
        firstPlayerName = playerName;
    }

    //Функція, яка генерує та порівнює отримані очки для кожного гравця
    function generateAndCompare() {
        var randomForFirstPlayer = Math.floor(Math.random() * 100);
        var randomForSecondPlayer = Math.floor(Math.random() * 100);

        firstPlayerGeneratedNumDiv.innerText = randomForFirstPlayer;
        secondPlayerGeneratedNumDiv.innerText = randomForSecondPlayer;

        totalScoreFirstPlayer += randomForFirstPlayer >= randomForSecondPlayer ? 1 : 0;
        totalScoreSecondPlayer += randomForSecondPlayer >= randomForFirstPlayer ? 1 : 0;
    }

    //Функція, яка оновлює поточни загальний рахунок
    function updateTotalScore() {
        firstPlayerTotalScoreDiv.innerText = totalScoreFirstPlayer;
        secondPlayerTotalScoreDiv.innerText = totalScoreSecondPlayer;
    }

    //Функція, яка повертає початкові значення рахунку
    function restart() {
        firstPlayerGeneratedNumDiv.innerText = 0;
        secondPlayerGeneratedNumDiv.innerText = 0;
        firstPlayerTotalScoreDiv.innerText = 0;
        secondPlayerTotalScoreDiv.innerText = 0;
        totalScoreFirstPlayer = 0;
        totalScoreSecondPlayer = 0;
    }
});