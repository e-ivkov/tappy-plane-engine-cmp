import { Script } from "laya/components/Script";
import { RigidBody } from "laya/physics/RigidBody";
import GameConstants from "./GameConstants";
import { Sprite } from "laya/display/Sprite";

export default class Scroll extends Script {

    constructor() { super(); }

    onStart(): void {
        var rig: RigidBody = this.owner.getComponent(RigidBody);
        rig.setVelocity({ x: -GameConstants.scrollV, y: 0 });
    }

    onUpdate(): void {
        var owner = this.owner as Sprite;

        if (owner.x < -owner.width) {
            owner.removeSelf();
        }
    }
}