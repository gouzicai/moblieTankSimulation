"use strict";
cc._RF.push(module, 'f4fedViv/xOsplyxGjOaQGZ', 'OtherGameIcon');
// Scripts/OtherGameIcon.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animation = null;
        _this.timer = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.animation = this.node.getComponent(cc.Animation);
    };
    NewClass.prototype.update = function (dt) {
        this.timer += dt;
        if (this.timer > 5) {
            this.timer = 0;
            this.animation.play('rotate');
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();