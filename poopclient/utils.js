const mc = Client.getMinecraft();
export const C04 = Java.type('net.minecraft.network.play.client.C03PacketPlayer$C04PacketPlayerPosition')
export const WalkForward = new KeyBind(mc.field_71474_y.field_74351_w);
export const WalkRight = new KeyBind(mc.field_71474_y.field_74366_z);
export const WalkLeft = new KeyBind(mc.field_71474_y.field_74370_x);
export const WalkBackward = new KeyBind(mc.field_71474_y.field_74368_y);
export const Jump = new KeyBind(mc.field_71474_y.field_74314_A);
export const Shift = new KeyBind(mc.field_71474_y.field_74311_E);
export const Sprint = new KeyBind(mc.field_71474_y.field_151444_V);

export function tp(x,y,z) {
  Player.getPlayer().func_70107_b(x,y,z) // sets player x y z 
  return;
}

export function sendPos(x, y, z, onGround) {
  Client.getMinecraft().field_71439_g.field_71174_a.func_147297_a(new C04(x,y,z,onGround));
}

export function distanceToPlayer(x,y,z) {
  let dX = Player.getX() - x
  let dZ = Player.getZ() - z
  let dY = Player.getY() - y
  let dis = Math.sqrt((dX * dX) + (dZ * dZ))
  let dis2 = Math.sqrt((dis * dis) + (dY * dY))
  return dis2
}

export function radians_to_degrees(radians) {
  var pi = Math.PI;
  return radians * (180/pi);
}

function sin(alpha) {return Math.sin(alpha * Math.PI / 180);}
function cos(alpha) {return Math.cos(alpha * Math.PI / 180);}

export function tpwalk(x, y, z, speed) {
  if (Keyboard.isKeyDown(WalkForward.getKeyCode()) && !Client.Companion.isInGui()) {
    x += -sin(Player.getYaw()) * speed*2
    z += cos(Player.getYaw()) * speed*2
  }
  if (Keyboard.isKeyDown(WalkBackward.getKeyCode()) && !Client.Companion.isInGui()) {
    x += -sin(Player.getYaw()) * -speed*2
    z += cos(Player.getYaw()) * -speed*2
  }
  if (Keyboard.isKeyDown(WalkLeft.getKeyCode()) && !Client.Companion.isInGui()) {
    x += -sin(Player.getYaw() + 90) * -speed*2
    z += cos(Player.getYaw() + 90) * -speed*2
  }
  if (Keyboard.isKeyDown(WalkRight.getKeyCode()) && !Client.Companion.isInGui()) {
    x += -sin(Player.getYaw() - 90) * -speed*2
    z += cos(Player.getYaw() - 90) * -speed*2
  }
  Player.getPlayer().func_70107_b(x,y,z)
}

export function lookAt(x, y, z) {
    let hoekPitch;
    let hoekYaw;
    let PlayerAngleYaw = Player.getPlayer().field_70177_z; let AngleYaw; PlayerAngleYaw %= 360;
    let dX = Player.getX() - x + 0.00001; let dZ = Player.getZ() - z + 0.00001; let dY = Player.getY() - y + 0.00001; 
    let dis = Math.sqrt((dX * dX) + (dZ * dZ))
    if(dX < 0.0 && dZ < 0.0) AngleYaw = radians_to_degrees(Math.atan(dZ/dX)) + 180
    else if(dZ < 0.0 && dX > 0.0) AngleYaw = radians_to_degrees(Math.atan(dZ/dX)) + 360
    else if(dZ > 0.0 && dX < 0.0) AngleYaw = radians_to_degrees(Math.atan(dZ/dX)) + 180
    else if(dZ > 0.0 && dX > 0.0) AngleYaw = radians_to_degrees(Math.atan(dZ/dX))
    hoekYaw = AngleYaw - PlayerAngleYaw + 90
    if (hoekYaw > 180) hoekYaw -= 360;
    if (hoekYaw < -180) hoekYaw += 360;
    Player.getPlayer().field_70177_z += hoekYaw;
    hoekPitch = radians_to_degrees(Math.atan(dY/dis)) - Player.getPlayer().field_70125_A
    Player.getPlayer().field_70125_A += hoekPitch;
    return { Yaw: Player.getPlayer().field_70177_z + hoekYaw, Pitch: Player.getPlayer().field_70125_A + hoekPitch }
  }