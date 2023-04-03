import { GODMODEtog, ILLSAVEYOUMRPRESIDENTtog, antiaimtog, antisocialtog, slowplacetog, timetraveltog, toomuchspanishtog, wheelchairtog } from "./gui/config";
import "./gui/newgui";
import "./gui/newgui2";
import { Jump, Shift, Sprint, WalkBackward, WalkForward, WalkLeft, WalkRight, distanceToPlayer, lookAt, sendPos, tp, tpwalk } from "./utils";

ChatLib.chat("poop loaded")


register("step", () => {
    if (antiaimtog()) {
        let lookingAt = Player.lookingAt(); 
        if (lookingAt.getClass() == Entity) {
            lookAt(0,0,0)
        }   
    }
});

register("step", () => {
    if (antisocialtog()){
        let entitys = World.getAllEntities()
        for (let i = 0; i < entitys.length; i++) {
            if (distanceToPlayer(entitys[i].getX(), entitys[i].getY(), entitys[i].getZ()) < 5 && distanceToPlayer(entitys[i].getX(), entitys[i].getY(), entitys[i].getZ()) > 0.1) {
                sendPos(Player.getX(), -10000, Player.getZ(), true)
            }
        }
    }
})

register("messageSent", (msg, event) => {
    if (toomuchspanishtog()){
        if (!msg.toString().startsWith("/")){
            cancel(event)
        }
    }
})
register("chat", (event) => {
    if (toomuchspanishtog()){
        cancel(event)
    }
})

register("step", (ticks) => {
    if (wheelchairtog()){
        WalkBackward.setState(false)
        WalkForward.setState(false)
        WalkLeft.setState(false)
        WalkRight.setState(false)
        Sprint.setState(false)
        Shift.setState(false)
        Jump.setState(false)
    }
})

let start = false

register("step", () => {
    if (timetraveltog()){
        if (!start){
        new Thread(() => {
            start=true
            x=Player.getX()
            y=Player.getY()
            z=Player.getZ()
            Thread.sleep(3000)
            tp(x,y,z)
            start=false
        }).start()}
    }
})

register("step", () => {
    if (ILLSAVEYOUMRPRESIDENTtog()) {
        new Thread(() => {
            allEntity = World.getAllEntities()
            for(let i = 0; i < allEntity.length; i++) {
                if(allEntity[i].getClassName() == "EntityArrow") {
                    tp(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ())
                }
            }
        }).start()
    }
});

register("playerInteract", (ac, vec, event) => {
    if (slowplacetog()) cancel(event)
})

register("step", () => {
    if (GODMODEtog()){
        let poop = World.getPlayerByName(Player.getName())
        poop.setHP(poop.getMaxHP())
    }
})