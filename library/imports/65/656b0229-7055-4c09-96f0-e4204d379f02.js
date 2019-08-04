"use strict";
cc._RF.push(module, '656b0IpcFVMCZbw5CBNN58C', 'UIManager');
// Scripts/UIManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tanks = [];
        _this.selectedCircle = null;
        _this.tank = null;
        _this.tankSpriteFrames = [];
        _this.tankName = null;
        _this.upgradePanel = null;
        _this.mainPanel = null;
        _this.index = 1;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.circleTurnLeft = function () {
        if (this.index - 1 >= 0) {
            this.index--;
            switch (this.index) {
                case 0:
                    this.selectedCircle.position = cc.v2(160, 73.3);
                    this.tank.width = 354;
                    this.tank.height = 251;
                    this.tank.getComponent(cc.Sprite).spriteFrame = this.tankSpriteFrames[0];
                    this.tankName.string = '灰熊坦克';
                    break;
                case 1:
                    this.selectedCircle.position = cc.v2(254.2, 73.3);
                    this.tank.width = 415;
                    this.tank.height = 210;
                    this.tank.getComponent(cc.Sprite).spriteFrame = this.tankSpriteFrames[1];
                    this.tankName.string = '天启坦克';
                    break;
                default:
                    cc.log('wrong');
            }
        }
    };
    NewClass.prototype.circleTurnRight = function () {
        if (this.index + 1 <= 2) {
            this.index++;
            switch (this.index) {
                case 1:
                    this.selectedCircle.position = cc.v2(254.2, 73.3);
                    this.tank.width = 415;
                    this.tank.height = 210;
                    this.tank.getComponent(cc.Sprite).spriteFrame = this.tankSpriteFrames[1];
                    this.tankName.string = '天启坦克';
                    break;
                case 2:
                    this.selectedCircle.position = cc.v2(352.2, 73.3);
                    this.tank.width = 389;
                    this.tank.height = 235;
                    this.tank.getComponent(cc.Sprite).spriteFrame = this.tankSpriteFrames[2];
                    this.tankName.string = '爱国者坦克';
                    break;
                default:
                    cc.log('wrong');
            }
        }
    };
    NewClass.prototype.showUpgradePanel = function () {
        this.upgradePanel.active = true;
        this.mainPanel.active = false;
    };
    NewClass.prototype.showMainPanel = function () {
        this.upgradePanel.active = false;
        this.mainPanel.active = true;
    };
    __decorate([
        property([cc.Node])
    ], NewClass.prototype, "tanks", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "selectedCircle", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tank", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "tankSpriteFrames", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "tankName", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "upgradePanel", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mainPanel", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();