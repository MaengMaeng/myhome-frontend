    var width = 700,
        height = 900,
        range = 20;
    var speedrate = 1;
    var player = { x: 100, y: 400, width: 20, height: 20, val: 7 };
    var enemy = { x: 20, y: 0, radius: 20, val: 1 };
    var attackes = new Array;
    var intervalKey = null;
    var intervalDraw = null;

    var score = 0,
        life = 3,
        key = [];
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.border = "1px solid black";
    var ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    function attack(x, y, width, height, val) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.val = val;
    }

    intervalKey = setInterval(function() {
        inputEvent();
    }, 100)

    intervalDraw = setInterval(function() {
        update();
        draw();
    }, 10)

    function draw() {
        ctx.save();
        if (life == 0) {
            ctx.font = "40px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("Game Over!!" + score, 100, 200);
            ctx.restore();
            ctx.save();
            clearInterval(intervalKey);
            clearInterval(intervalDraw);
        }
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        // ctx.fillRect(enemy.x - enemy.width / 2, enemy.y - enemy.height / 2, enemy.width, player.height);
        ctx.fillStyle = "black";
        ctx.fillRect(player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);

        ctx.fillStyle = "blue";
        for (var att in attackes) {
            ctx.fillRect(attackes[att].x - attackes[att].width / 2, attackes[att].y - attackes[att].height / 2, attackes[att].width, attackes[att].height);
        }

        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Score: " + score, 0, 20);
        ctx.fillText("Life: " + life, 0, 40);
        ctx.restore();
    }

    function update() {
        // if (score < 0) return;
        if (player.x >= enemy.x - range && player.x <= enemy.x + range && player.y >= enemy.y - range && player.y <= enemy.y + range) {
            enemy.x = Math.ceil(Math.random() * width) - 20;
            enemy.y = 0;
            score++;
        }
        if (enemy.y > height) {
            enemy.x = Math.ceil(Math.random() * width) - 20;
            enemy.y = 0;
            enemy.val = 1;
            if (!(player.x >= enemy.x - range && player.x <= enemy.x + range && player.y >= enemy.y - range && player.y <= enemy.y + range)) {
                score--;
                life--;
            }
        }
        if (key[37] && player.x - player.width / 2 > 0) player.x -= player.val * speedrate;
        if (key[38] && player.y - player.height / 2 > 0) player.y -= player.val * speedrate;
        if (key[39] && player.x + player.width / 2 < width) player.x += player.val * speedrate;
        if (key[40] && player.y + player.height / 2 < height) player.y += player.val * speedrate;

        for (var att in attackes) {
            attackes[att].y -= attackes[att].val;
            attackes[att].val += 0.02;
            if (attackes[att].y < 0) {
                attackes.splice(att, 1);
            }
            if (enemy.x - enemy.radius <= attackes[att].x && enemy.x + enemy.radius >= attackes[att].x + attackes[att].width && enemy.y <= attackes[att].y && enemy.y + enemy.radius >= attackes[att].y + attackes[att].height) {
                attackes.splice(att, 1);
                score++;
                enemy.x = Math.ceil(Math.random() * width);
                enemy.y = 0;
            }
        }
        enemy.y += enemy.val;
        enemy.val += 0.01;
    }

    function inputEvent() {
        if (key[65]) {
            attackes.push(new attack(player.x, player.y, 2, 4, 1));
        }
    }
    window.addEventListener("keydown", function(e) {
        key[e.keyCode] = true;
    });
    window.addEventListener("keyup", function(e) {
        key[e.keyCode] = false;
    });