export class Cursor {
    constructor() {
        this.img = new Image();
        this.path = "./res/img/cursor.png";
        this.img.src = this.path;
        this.size = {
            width: 18,
            height: 26
        };
    }

    draw(ctx, x, y) {
        this.x = x - 2;
        this.y = y;
        ctx.drawImage(this.img, this.x, this.y, this.size.width, this.size.height);
    }
} 

export class Background {
    constructor () {
        this.img = new Image();
        this.path = "./res/img/koralback.png";
        this.img.src = this.path;
    } 

    draw(ctx, canvas){
        ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
    }
}

export class Score {
    constructor() {
        this.score = 0;
    }

    draw(ctx, canvas) {
        ctx.fillStyle = "black"
        ctx.font = "60px serif";
        ctx.fillText(`Skóre: ${this.score}` , canvas.width / 2, 60);
    }
}