import { configGui, drawbut } from "./newgui";
const doorknock =  new Sound({ source: "door.ogg" }); 

let always = true
register("command", () => {
  configGui.open();
  doorknock.play()
}).setName("poopgui")

// toggles are named after the buttons text then tog example: button 1's toggle is clickmetog()
// every button also has a right click toggle so it can toggle multiple things
// right click toggles are named the buttons text then righttog example: button 7's toggle is rightclickmerighttog() and also rightclickmetog()
// you can also make the gui need multiple toggles to turn on by putting the toggles in ()

const nwp1 = new Image("nwp.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165426269659206/IMG_1398.jpg"); export {nwp1};
const nwp2 = new Image("nwp2.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165426710052915/ECA88A25-23C7-4C92-AEF3-2F7BD28C24CC.jpg"); export {nwp2};
const nwp3 = new Image("nwp3.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165427049799691/image.png"); export {nwp3};
const nwp4 = new Image("nwp4.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165427276304496/image0-4.jpg"); export {nwp4};
const nwp5 = new Image("nwp5.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165427712491610/IMG_1196.jpg"); export {nwp5};
const nwp6 = new Image("nwp6.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165440681283584/IMG_1432.jpg"); export {nwp6};
const nwp7 = new Image("nwp7.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165441050390579/IMG_1437.jpg"); export {nwp7};
const nwp8 = new Image("nwp8.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165441545310338/IMG_1491.jpg"); export {nwp8};
const nwp9 = new Image("nwp9.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165442073808916/IMG_1506.jpg"); export {nwp9};
const nwp10 = new Image("nwp10.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165442518397029/IMG_1519.jpg"); export {nwp10};
const nwp11 = new Image("nwp11.png", "https://cdn.discordapp.com/attachments/1021864621512073387/1092165442979778691/IMG_1557.jpg"); export {nwp11};
const nwps = [nwp1,nwp2,nwp3,nwp4,nwp5,nwp6,nwp7,nwp8,nwp9,nwp10,nwp11]; 
let nwp = nwps[Math.floor(Math.random() * nwps.length)];
register("step", () => {if (Client.currentGui.get() == null) {nwp = nwps[Math.floor(Math.random() * nwps.length)];}})
register("renderOverlay", function() {
  if (configGui.isOpen()) {       
    nwp.draw(0,0,Renderer.screen.getWidth(),Renderer.screen.getHeight())                             
    new drawbut(350, 100, 100, 100, "antiaim", "stops you from hitting entitys", "2", always).togglebutton();
    new drawbut(450, 100, 100, 100, "antisocial", "stops you from being near people", "2", always).togglebutton();
    new drawbut(550, 100, 100, 100, "too much spanish", "PLEASE NO MORE", "1", always).togglebutton();
    new drawbut(550, 200, 100, 100, "wheelchair", "nyooom", "0", always).togglebutton();
    new drawbut(350, 200, 100, 100, "timetravel", "woah", "2", always).togglebutton();
    new drawbut(350, 300, 100, 100, "ILL SAVE YOU MR PRESIDENT", "take the bullet for him", "1", always).togglebutton();
    new drawbut(450, 300, 100, 100, "slowplace", "\"gimme a minute im trying to place a block\"", "0", always).togglebutton();
    new drawbut(550, 300, 100, 100, "GOD MODE", "ANTIDAMAGE", "0", always).togglebutton();
  }
})
