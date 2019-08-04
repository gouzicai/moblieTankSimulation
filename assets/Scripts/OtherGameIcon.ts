const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    animation:cc.Animation = null;
    timer:number = 0;
    onLoad(){
        this.animation = this.node.getComponent(cc.Animation);
    }
    update(dt){
        this.timer += dt;
        if(this.timer > 5){
            this.timer = 0;
            this.animation.play('rotate');
        }
    }
}
