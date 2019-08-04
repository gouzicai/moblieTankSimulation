
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property([cc.Node])
    tanks:Array<cc.Node> = [];

    @property(cc.Node)
    selectedCircle:cc.Node=null;

    @property(cc.Node)
    tank:cc.Node = null;

    @property([cc.SpriteFrame])
    tankSpriteFrames:Array<cc.SpriteFrame> = [];

    @property(cc.Label)
    tankName:cc.Label = null;

    @property(cc.Node)
    upgradePanel:cc.Node = null;

    @property(cc.Node)
    mainPanel:cc.Node = null;

    index:number = 1;
    onLoad(){
    }

    circleTurnLeft(){
        if(this.index-1 >= 0){
            this.index--;
            switch(this.index){
                case 0:
                    this.selectedCircle.position = cc.v2(160,73.3);
                    this.tank.width = 354;
                    this.tank.height = 251;
                    this.tank.getComponent(cc.Sprite).spriteFrame = this.tankSpriteFrames[0];
                    this.tankName.string = '灰熊坦克';
                    break;
                case 1:
                    this.selectedCircle.position = cc.v2(254.2,73.3);
                    this.tank.width = 415;
                    this.tank.height = 210;
                    this.tank.getComponent(cc.Sprite).spriteFrame = this.tankSpriteFrames[1];
                    this.tankName.string = '天启坦克';
                    break;
                default:
                    cc.log('wrong');
            }
        }
    }

    circleTurnRight(){
        if(this.index+1 <= 2){
            this.index++;
            switch(this.index){
                case 1:
                    this.selectedCircle.position = cc.v2(254.2,73.3);
                    this.tank.width = 415;
                    this.tank.height = 210;
                    this.tank.getComponent(cc.Sprite).spriteFrame = this.tankSpriteFrames[1];
                    this.tankName.string = '天启坦克';
                    break;
                case 2:
                    this.selectedCircle.position = cc.v2(352.2,73.3);
                    this.tank.width = 389;
                    this.tank.height = 235;
                    this.tank.getComponent(cc.Sprite).spriteFrame = this.tankSpriteFrames[2];
                    this.tankName.string = '爱国者坦克';
                    break;
                default:
                    cc.log('wrong');
            }
        }
    }

    showUpgradePanel(){
        this.upgradePanel.active = true;
        this.mainPanel.active = false;
    }

    showMainPanel(){
        this.upgradePanel.active = false;
        this.mainPanel.active = true;
    }
}
