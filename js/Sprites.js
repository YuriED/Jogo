const gravidade = 0.6;

class Sprites {
    constructor({ posicao, velocidade, dimensao }) {
        this.posicao = posicao;
        this.velocidade = velocidade;
        this.width = dimensao.width;
        this.height = dimensao.height;
    }

    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.posicao.x, this.posicao.y, this.width, this.height);


        if(this.isAttacking){
            ctx.fillStyle="red"
            ctx.fillRect(this.attackBox.posicao.x, this.attackBox.posicao.y, this.attackBox.width, this.attackBox.height)
        }
    }

    update() {
        if (this.posicao.y + this.height >= canvas.height) {
            this.velocidade.y = canvas.height - (this.posicao.y + this.height);
        } else {
            this.velocidade.y += gravidade;
        }

        this.posicao.x += this.velocidade.x;
        this.posicao.y += this.velocidade.y;

        this.draw();
    }
}

class Luta extends Sprites {
    constructor({ posicao, velocidade, dimensao }) {
        super({ posicao, velocidade, dimensao });
        this.velocidade = velocidade
        this.width=dimensao.width
        this.height=dimensao.height


        this.attackBox={
            posicao:{
                x: this.posicao.x,
                y: this.posicao.y,

            },
            width:125,
            height:50
        }

        this.isAttacking
        this.attackCooldown =500
        this.onAttackCooldown

        this.lastKeyPressionada

        this.onGround
    }

    update() {
        if(Math.ceil(this.posicao.y+this.height>=canvasHeight)){
            this.onGround=true
        }else{
            this.onGround=false
        }

        if (this.posicao.y + this.height > canvas.height) {
            this.posicao.y = canvas.height - this.height;
            this.velocidade.y = 0;
        } else {
            if(!this.onGround) this.velocidade.y += gravidade;
        }

        this.posicao.x += this.velocidade.x;
        this.posicao.y += this.velocidade.y;

        this.attackBox.posicao.x = this.posicao.x
        this.attackBox.posicao.y = this.posicao.y

        this.draw();
    }

    attack(){
        if(this.onAttackCooldown)return
        this.isAttacking=true

        setTimeout(()=>{
            this.isAttacking=false
        },100)
    }



    jump(){
        if(!this.onGround) return
        this.velocidade.y=-16;
    }
}

const player = new Luta({
    posicao: {
        x: 100,
        y: 0
    },
    velocidade: {
        x: 0,
        y: 10
    },
    dimensao: {
        width: 50,
        height: 150
    }
});

const player2 = new Luta({
    posicao: {
        x: 550,
        y: 200
    },
    velocidade: {
        x: 0,
        y: 0
    },
    dimensao: {
        width: 50,
        height: 200
    }
});

