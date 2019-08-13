<template>


</template>

<script>
export default {
  name: 'ShootingGame',
  methods:{
      myDoAction(){
          var width = 700,
        height = 900,
        range = 20;
    var speedrate = 1;
    var player = { x: 100, y: 400, width: 20, height: 20, val: 6 };
    // var enemy = { x: 20, y: 0, radius: 20, val: 1 };
    var attackes = new Array;
    var enemies = new Array;
    var intervalKey = null;
    var intervalDraw = null;
    var intervalUpdate = null;
    var intervalDrawAttack = null;
    var enemyVal = 1;
    var enemySize = 1;
    var enemyRadius = 20;

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

    function enemy(x, y, radius, val, size, sizeOrigin) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.val = val;
        this.size = size;
        this.sizeOrigin = sizeOrigin;
    }
    enemies.push(new enemy(20, 0, enemyRadius, enemyVal, enemySize, enemySize));

    intervalKey = setInterval(function() {
        inputEvent();
    }, 100)

    intervalDraw = setInterval(function() {
        draw();
    }, 10)
    intervalDrawAttack = setInterval(function() {
        drawAttack();
    }, 10)
    intervalUpdate = setInterval(function() {
        update();
    }, 10)

    function drawAttack() {
        ctx.fillStyle = "blue";
        for (var att in attackes) {
            attackes[att].y -= attackes[att].val;
            ctx.fillRect(attackes[att].x - attackes[att].width / 2, attackes[att].y - attackes[att].height / 2, attackes[att].width, attackes[att].height);
        }
    }

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
            clearInterval(intervalUpdate);
            clearInterval(intervalDrawAttack);
        }
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "red";
        for (var i in enemies) {
            ctx.beginPath();
            ctx.arc(enemies[i].x, enemies[i].y, enemies[i].radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle = "red";
            ctx.font = "16px Arial"
            ctx.fillText(enemies[i].size, enemies[i].x - 3 * enemies[i].radius / 4, enemies[i].y + enemies[i].radius / 3);

        }


        // ctx.fillRect(enemy.x - enemy.width / 2, enemy.y - enemy.height / 2, enemy.width, player.height);
        ctx.fillStyle = "black";
        ctx.fillRect(player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);



        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Score: " + score, 0, 20);
        ctx.fillText("Life: " + life, 0, 40);
        ctx.restore();
    }

    function update() {
        if (key[37] && player.x - player.width / 2 > 0) player.x -= player.val * speedrate;
        if (key[38] && player.y - player.height / 2 > 0) player.y -= player.val * speedrate;
        if (key[39] && player.x + player.width / 2 < width) player.x += player.val * speedrate;
        if (key[40] && player.y + player.height / 2 < height) player.y += player.val * speedrate;

        for (var i in enemies) {
            if (enemies[i].size < 1) {
                score += Math.ceil(enemies[i].sizeOrigin);
                var size = enemies[i].sizeOrigin;
                var radius = enemies[i].radius;
                enemies.splice(i, 1);
                var newOne = new enemy(Math.ceil(Math.random() * width) - 20, 0, radius, Math.random() * 2, Math.ceil(size), Math.ceil(size));
                var newTow = new enemy(Math.ceil(Math.random() * width) - 20, 0, radius * 1.1, Math.random() * 2, Math.ceil(size * 2), Math.ceil(size * 2));
                enemies.push(newOne);
                enemies.push(newTow);
                return;
            }
            //옮겨
            if (player.x >= enemies[i].x - range && player.x <= enemies[i].x + range && player.y >= enemies[i].y - range && player.y <= enemies[i].y + range) {
                enemies[i].x = Math.ceil(Math.random() * width) - 20;
                enemies[i].y = 0;
                life--;
            }
            if (enemies[i].y > height) {
                enemies[i].x = Math.ceil(Math.random() * width) - 20;
                enemies[i].y = 0;
                enemies[i].val = 1;
                //enemy땅끝으로
                if (!(player.x >= enemies[i].x - range && player.x <= enemies[i].x + range && player.y >= enemies[i].y - range && player.y <= enemies[i].y + range)) {
                    enemies[i].x = Math.ceil(Math.random() * width) - 20;
                    enemies[i].y = 0;
                }
            }
            for (var att in attackes) {

                if (attackes[att].y < 0) {
                    attackes.splice(att, 1);
                } else if (enemies[i].x - enemies[i].radius <= attackes[att].x &&
                    enemies[i].x + enemies[i].radius >= attackes[att].x + attackes[att].width &&
                    enemies[i].y - enemies[i].radius <= attackes[att].y - attackes[att].height &&
                    enemies[i].y + enemies[i].radius >= attackes[att].y + attackes[att].height) { //미사일맞음
                    attackes.splice(att, 1);
                    enemies[i].size--;
                }
            }
            enemies[i].y += enemies[i].val;
            enemies[i].val += 0.01;
        }
    }


    function inputEvent() {
        if (key[65]) {
            attackes.push(new attack(player.x, player.y, 2, 4, 2));
        }
    }
    window.addEventListener("keydown", function(e) {
        key[e.keyCode] = true;
    });
    window.addEventListener("keyup", function(e) {
        key[e.keyCode] = false;
    });
      }
  }
}
    
</script>