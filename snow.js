// Function to create a snowflake
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '*';
    snowflake.style.left = '${Math.random() * window.innerWidth.px';
    snowflake.style.animation = '${Math.random()*3+2}s';
    document.querySelector('.snow-container').appendChild(snowflake);

    // Remove the snowflake when it reaches the bottom
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Function to create multiple snowflakes only between December 15th and December 30th
function createSnowflakes() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1 //january is 0
    const currentDay = currentDate.getDate();

    //check if the current date is between December 15th and December 30th
    if (currentMonth === 12 && currentDay >= 15 && currentDay <= 30) {
        for (let i = 0; i < 30; i++) {
            createSnowflake();
        }
    }
}
