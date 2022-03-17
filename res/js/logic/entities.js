export class Entity{
    constructor(x, y, w, h, c, score, type){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.score = this.score;
        this.type = type;
    }

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

export class Player {
    constructor(x, y, w, h, img, v) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.v = v;
        this.img = new Image();
        this.path = "./res/img/koralback.png";
        this.img.src = this.path;
    }
}