let enabledfeatures = []
let configpath = ("poopclient/gui")
let configpath2 = ("config.js")
const configGui = new Gui();
register("guiOpened" ,() => {typed = false})
const fartsound =  new Sound({ source: "fart.ogg" }); 

// gui: https://github.com/scoliosiss/badgui
// ^^ outdated just copy the code from here and remove the toggles

// i dont know wwhy i didnt just use persistant data or pogobject...
// FPS GETS BEAMED
/*
how to use drawbut:
register("command", function() {configGui.open();}).setName("opengui");
register("renderOverlay", function() {
  if (configGui.isOpen()) {                                    
    new drawbut(1, 1, 20000000, 50000000, "new button", "hi there friend", "0 // hiii", always).togglebutton();
                ^x ^y  ^width    ^height     ^text       ^hover text        ^button type  ^show if           ^ put in extra info if you want (need to put in 2 numbers for slider)
    or let newbutton = new drawbut(1, 1, 20000000, 50000000, "new button", "hi there friend", "0 // hiii", always);
    newbutton.togglebutton(); then you can use the ismouseover function
  }
})

how to use ismouseover:
newwbutton = new drawbut(1, 1, 200, 50, "newbutton", "", "1", always); // you also have to draw the button
register("guiMouseClick", function(x, y, button) {
if (configGui.isOpen()) {
  if (button == 0) {
    if (newwbutton.isMouseOver()) {
        ChatLib.Chat("cum")
    }
  }
}
})
*/

//register("step", () => {file = FileLib.read(configpath, configpath2); opengui=false})

let file = ""
let opengui=false; register("gameLoad", () => {opengui=true}) // maybe increases fps but the arraylist will no worky if u use keybinds.
register("step", () => {if (configGui.isOpen() || opengui) file = FileLib.read(configpath, configpath2); opengui=false})

class drawbut {
  constructor(x, y, width, height, text, hovert, type, show) { this.x = x; this.y = y; this.width = width; this.height = height; this.text = text; this.hovert = hovert; this.type = type; this.show = show;}
  togglebutton(min, max) {

    let newtext = this.text.replaceAll(" ", "").replace("&", "").replace("-", "").replace("/", "") // replaces spaces multiple times just incase! .replaceall() exists...

    let newy = Renderer.screen.getHeight()/(501/this.y)
    let newx = Renderer.screen.getWidth()/(960/this.x) // FUCK I DID MATHS AGAIN
    let newh = Renderer.screen.getHeight()/(501/this.height)
    let neww = Renderer.screen.getWidth()/(960/this.width)

    if (file.includes(`/*${newtext}true`)) {toggle = true;}
    else toggle = false;

    if (file.includes(`/*${newtext}true`)  && this.type == 2 && !enabledfeatures.includes(this.text)) {enabledfeatures.push(this.text)} // i might use this arraylist for config idk
    else if (file.includes(`/*${newtext}false`)  && this.type == 2 && enabledfeatures.includes(this.text)) {enabledfeatures.splice(this.text)} // if it increases fps then maybe

    if (toggle) col = "&a";
    else col = "&c";


    //if (!file.includes(`/*${newtext}true`) && !file.includes(`/*${newtext}false`) && this.type == 2) FileLib.write(configpath, configpath2, `${file}/*${newtext}false*/ let fortnite${newtext} = false; function ${newtext}tog() {if ((incoolgui && Client.getMouseX() >= Renderer.screen.getWidth()/(960/${this.x}) && Client.getMouseX() <= Renderer.screen.getWidth()/(960/${this.x} + Renderer.screen.getWidth()/(960/${this.width}) && Client.getMouseY() >= Renderer.screen.getHeight()/(501/${this.y}) && Client.getMouseY() <= Renderer.screen.getHeight()/(501/${this.y}) + Renderer.screen.getHeight()/(501/${this.height}))) || keybinded) {if (configfile.includes("/*${newtext}"+"true*/")) fortnite${newtext} = true; else fortnite${newtext} = false;} return fortnite${newtext}}; export{${newtext}tog}; /*${newtext}rightfalse*/ let fortnite${newtext}right = false; function ${newtext}righttog() {if ((incoolgui && Client.getMouseX() >= Renderer.screen.getWidth()/(960/${this.x}) && Client.getMouseX() <= Renderer.screen.getWidth()/(960/${this.x} + Renderer.screen.getWidth()/(960/${this.width}) && Client.getMouseY() >= Renderer.screen.getHeight()/(501/${this.y}) && Client.getMouseY() <= Renderer.screen.getHeight()/(501/${this.y}) + Renderer.screen.getHeight()/(501/${this.height}))) || keybinded) {if (configfile.includes("/*${newtext}right"+"true*/")) fortnite${newtext}right = true; else fortnite${newtext}right = false;} return fortnite${newtext}right}; export{${newtext}righttog}; /*${newtext}bind=13*/ function ${newtext}bindtog() {if ((incoolgui && Client.getMouseX() >= Renderer.screen.getWidth()/(960/${this.x}) && Client.getMouseX() <= Renderer.screen.getWidth()/(960/${this.x} + Renderer.screen.getWidth()/(960/${this.width}) && Client.getMouseY() >= Renderer.screen.getHeight()/(501/${this.y}) && Client.getMouseY() <= Renderer.screen.getHeight()/(501/${this.y}) + Renderer.screen.getHeight()/(501/${this.height}))) || keybinded) {${newtext}fortnite1 = configfile.split("/*"+"${newtext}bind").pop().split("*/ "+"function ${newtext}bindtog()")[0]; idfk${newtext} = ${newtext}fortnite1.charAt(0); keynum${newtext} = ${newtext}fortnite1.replace(idfk${newtext}, "");}return {k: idfk${newtext}, n: keynum${newtext}}}; export{${newtext}bindtog}; let idfk${newtext}; let keynum${newtext}; let ${newtext}fortnite1; let ${newtext}pressed = false;  register("tick", () => {let toggle = "false"; let toggle2 = "true"; let color = "a"; if (!Client.Companion.isInGui()) {if (Keyboard.isKeyDown(${newtext}bindtog().n)) {if (!${newtext}pressed){${newtext}pressed = true;if (configfile.includes("/*${newtext}"+"true*/")) toggle = "true"; else toggle = "false"; if (toggle == "false") {toggle2 = "true"; color = "a"} else {toggle2 = "false"; color = "c"};keybinded = true;FileLib.write("Mushroom/gui/", "config.js", configfile.replace("/*"+"${newtext}"+toggle, "/*"+"${newtext}"+toggle2)); ChatLib.chat("&c&lM&f&lu&c&ls&f&lh&c&lr&f&lo&c&lo&f&lo&c&lm &lClient&f&l > &"+color+"${this.text}")}} else ${newtext}pressed = false}});\n`);
    // makes fps even lower ^
    //if (!file.includes(`/*${newtext}true`) && !file.includes(`/*${newtext}false`) && this.type == 2) FileLib.write(configpath, configpath2, `${file}/*${newtext}false*/ let fortnite${newtext} = false; function ${newtext}tog() {if ((incoolgui && Client.getMouseX() >= ${newx} && Client.getMouseX() <= ${newx} + ${neww} && Client.getMouseY() >= ${newy} && Client.getMouseY() <= ${newy} + ${newh}) || keybinded) {if (configfile.includes("/*${newtext}"+"true*/")) fortnite${newtext} = true; else fortnite${newtext} = false;} return fortnite${newtext}}; export{${newtext}tog}; /*${newtext}rightfalse*/ let fortnite${newtext}right = false; function ${newtext}righttog() {if ((incoolgui && Client.getMouseX() >= ${newx} && Client.getMouseX() <= ${newx} + ${neww} && Client.getMouseY() >= ${newy} && Client.getMouseY() <= ${newy} + ${newh}) || keybinded) {if (configfile.includes("/*${newtext}right"+"true*/")) fortnite${newtext}right = true; else fortnite${newtext}right = false;} return fortnite${newtext}right}; export{${newtext}righttog}; /*${newtext}bind=13*/ function ${newtext}bindtog() {if ((incoolgui && Client.getMouseX() >= ${newx} && Client.getMouseX() <= ${newx} + ${neww} && Client.getMouseY() >= ${newy} && Client.getMouseY() <= ${newy} + ${newh}) || keybinded) {${newtext}fortnite1 = configfile.split("/*"+"${newtext}bind").pop().split("*/ "+"function ${newtext}bindtog()")[0]; idfk${newtext} = ${newtext}fortnite1.charAt(0); keynum${newtext} = ${newtext}fortnite1.replace(idfk${newtext}, "");}return {k: idfk${newtext}, n: keynum${newtext}}}; export{${newtext}bindtog}; let idfk${newtext}; let keynum${newtext}; let ${newtext}fortnite1; let ${newtext}pressed = false;  register("tick", () => {let toggle = "false"; let toggle2 = "true"; let color = "a"; if (!Client.Companion.isInGui()) {if (Keyboard.isKeyDown(${newtext}bindtog().n)) {if (!${newtext}pressed){${newtext}pressed = true;if (configfile.includes("/*${newtext}"+"true*/")) toggle = "true"; else toggle = "false"; if (toggle == "false") {toggle2 = "true"; color = "a"} else {toggle2 = "false"; color = "c"};keybinded = true;FileLib.write("Mushroom/gui/", "config.js", configfile.replace("/*"+"${newtext}"+toggle, "/*"+"${newtext}"+toggle2)); ChatLib.chat("&c&lM&f&lu&c&ls&f&lh&c&lr&f&lo&c&lo&f&lo&c&lm &lClient&f&l > &"+color+"${this.text}")}} else ${newtext}pressed = false}});\n`);
    // ^ bugs out configs, will fix later maybe?
    if (!file.includes(`/*${newtext}true`) && !file.includes(`/*${newtext}false`) && this.type == 2) FileLib.write(configpath, configpath2, `${file}/*${newtext}false*/ let fortnite${newtext} = false; function ${newtext}tog() {if (incoolgui || keybinded) {if (configfile.includes("/*${newtext}"+"true*/")) fortnite${newtext} = true; else fortnite${newtext} = false;} return fortnite${newtext}}; export{${newtext}tog}; /*${newtext}rightfalse*/ let fortnite${newtext}right = false; function ${newtext}righttog() {if (incoolgui) {if (configfile.includes("/*${newtext}right"+"true*/")) fortnite${newtext}right = true; else fortnite${newtext}right = false;} return fortnite${newtext}right}; export{${newtext}righttog}; /*${newtext}bind=13*/ function ${newtext}bindtog() {if (incoolgui) {${newtext}fortnite1 = configfile.split("/*"+"${newtext}bind").pop().split("*/ "+"function ${newtext}bindtog()")[0]; idfk${newtext} = ${newtext}fortnite1.charAt(0); keynum${newtext} = ${newtext}fortnite1.replace(idfk${newtext}, "");}return {k: idfk${newtext}, n: keynum${newtext}}}; export{${newtext}bindtog}; let idfk${newtext}; let keynum${newtext}; let ${newtext}fortnite1; let ${newtext}pressed = false;  register("tick", () => {let toggle = "false"; let toggle2 = "true"; let color = "a"; if (!Client.Companion.isInGui()) {if (Keyboard.isKeyDown(${newtext}bindtog().n)) {if (!${newtext}pressed){${newtext}pressed = true;if (configfile.includes("/*${newtext}"+"true*/")) toggle = "true"; else toggle = "false"; if (toggle == "false") {toggle2 = "true"; color = "a"} else {toggle2 = "false"; color = "c"};keybinded = true;FileLib.write("poopclient/gui/", "config.js", configfile.replace("/*"+"${newtext}"+toggle, "/*"+"${newtext}"+toggle2)); ChatLib.chat("&c&lM&f&lu&c&ls&f&lh&c&lr&f&lo&c&lo&f&lo&c&lm &lClient&f&l > &"+color+"${this.text}")}} else ${newtext}pressed = false}});\n`);
    else if (!file.includes(`/*${newtext}true`) && !file.includes(`/*${newtext}false`) && this.type < 4) FileLib.write(configpath, configpath2, `${file}/*${newtext}false*/ let fortnite${newtext} = false; function ${newtext}tog() {if (incoolgui) {if (configfile.includes("/*${newtext}"+"true*/")) fortnite${newtext} = true; else fortnite${newtext} = false;} return fortnite${newtext}}; export{${newtext}tog}; /*${newtext}rightfalse*/ let fortnite${newtext}right = false; function ${newtext}righttog() {if (incoolgui || keybinded) {if (configfile.includes("/*${newtext}right"+"true*/")) fortnite${newtext}right = true; else fortnite${newtext}right = false;} return fortnite${newtext}right}; export{${newtext}righttog}\n`);
    else if (!file.includes(`${newtext}`) && this.type == 4) FileLib.write(configpath, configpath2, `${file}let fortnite${newtext} = 0; /*${newtext}${widthe2}*/ function ${newtext}tog() {if (incoolgui) {fortnite${newtext} = configfile.split("/*"+"${newtext}").pop().split("*/ "+"function ${newtext}tog()")[0];} return fortnite${newtext}}; export {${newtext}tog}\n`);
    else if (!file.includes(`${newtext}`) && this.type == 5) FileLib.write(configpath, configpath2, `${file}let fortnite${newtext} = ""; /*${newtext}&f*/ function ${newtext}tog() {if (incoolgui) {fortnite${newtext} = configfile.split("/*"+"${newtext}&f").pop().split("*/ "+"function ${newtext}tog()")[0];} return fortnite${newtext}}; export {${newtext}tog}\n`);
 //   if (!file.includes(`/*${newtext}bind`) && this.type == 2) FileLib.write(configpath, configpath2, `${file}/*${newtext}bind=13*/ function ${newtext}bindtog() {if (incoolgui) {${newtext}fortnite1 = configfile.split("/*"+"${newtext}bind").pop().split("*/ "+"function ${newtext}bindtog()")[0]; idfk${newtext} = ${newtext}fortnite1.charAt(0); keynum${newtext} = ${newtext}fortnite1.replace(idfk${newtext}, "");}return {k: idfk${newtext}, n: keynum${newtext}}}; export{${newtext}bindtog}; let idfk${newtext}; let keynum${newtext}; let ${newtext}fortnite1; let ${newtext}pressed = false;  register("tick", () => {let toggle = "false"; let toggle2 = "true"; let color = "a"; if (Keyboard.isKeyDown(${newtext}bindtog().n)) {if (!${newtext}pressed){${newtext}pressed = true;if (configfile.includes("/*${newtext}"+"true*/")) toggle = "true"; else toggle = "false"; if (toggle == "false") {toggle2 = "true"; color = "a"} else {toggle2 = "false"; color = "c"};incoolgui = true;FileLib.write("Mushroom/gui/", "config.js", configfile.replace("/*"+"${newtext}"+toggle, "/*"+"${newtext}"+toggle2)); ChatLib.chat("&c&lM&f&lu&c&ls&f&lh&c&lr&f&lo&c&lo&f&lo&c&lm &lClient&f&l > &"+color+"${this.text}")}} else ${newtext}pressed = false});\n`);


    if (this.type == 2) {currentbind = file.split("/*"+`${newtext}bind`).pop().split("*/ "+`function ${newtext}bindtog()`)[0]; currentchar = currentbind.charAt(0); currentnum = currentbind.replace(currentchar, "")}
    
    if (this.show) {
      if (Client.getMouseX() >= newx && Client.getMouseX() <= newx + neww && Client.getMouseY() >= newy && Client.getMouseY() <= newy + newh) { // checks if mouse is over button
        Renderer.drawRect(Renderer.color(210,105,30, 150), newx, newy, neww, newh); // changes color of button

        if (clicker) { // checks if you left clicked
          clicker = false

          fartsound.play()
          
          if (this.type > 3) return;
          if (!file.includes(`${newtext}true`)) {FileLib.write(configpath, configpath2, file.replace(`${newtext}false`, `${newtext}true`)); toggle = true}
          else FileLib.write(configpath, configpath2, file.replace(`${newtext}true`, `${newtext}false`)); toggle = false; // writes true / false. the function to read the file writes itself.

        }

        if (rightclicker) { // checks if you left clicked
          if (this.type > 3) return;

          if (!file.includes(`${newtext}righttrue`)) {FileLib.write(configpath, configpath2, file.replace(`${newtext}rightfalse`, `${newtext}righttrue`)); toggle = true}
          else FileLib.write(configpath, configpath2, file.replace(`${newtext}righttrue`, `${newtext}rightfalse`)); toggle = false;

          rightclicker = false // set right clicked false 
        }

        if (this.type == 2 && typed && keycode !== 42 && keycode !== 58 && keycode !== 15 && keycode !== 29 && keycode !== 5 && keycode !== 28 && keycode !== 1) {
          typed = false;

          if (keycode == 57) {FileLib.write(configpath, configpath2, file.replace(`/*${newtext}bind${currentbind}*/`, `/*${newtext}bind=13*/`)); World.playSound('tile.piston.out', 1, 1);}
          else {FileLib.write(configpath, configpath2, file.replace(`/*${newtext}bind${currentbind}*/`, `/*${newtext}bind${keypressed}${keycode}*/`)); World.playSound('mob.chicken.plop', 1, 1);}

          keycode = ""; keypressed = "";
        }
      }

      if (this.type == 0) { // draws plain black button: https://i.imgur.com/dg6uLGX.png
        Renderer.drawRect(Renderer.color(210,105,30,250), newx, newy, neww, newh);
        Renderer.drawString(col + this.text, newx + (neww / 2 - Renderer.getStringWidth(this.text) / 2), newy + (newh / 2 - 4));
      }

      if (this.type == 1) { // less seethrough toggle button: https://i.imgur.com/TXjN41h.png
        if (Client.getMouseX() >= newx && Client.getMouseX() <= newx + neww && Client.getMouseY() >= newy && Client.getMouseY() <= newy + newh) Renderer.drawRect(Renderer.color(210,105,30,200), newx, newy, neww, newh);
        else Renderer.drawRect(Renderer.color(210,105,30,200), newx, newy, neww, newh);

        if (toggle) Renderer.drawRect(Renderer.color(210,105,30, 200), newx, newy, neww, newh);
        
        Renderer.drawString(col + this.text, newx + (neww / 2 - Renderer.getStringWidth(this.text) / 2), newy + (newh / 2 - 4));
      }

      if (this.type == 2) { // toggleable button: https://i.imgur.com/vfP5DR1.png
        Renderer.drawRect(Renderer.color(210,105,30, 150), newx, newy, neww, newh);
        if (toggle) Renderer.drawRect(Renderer.color(210,105,30, 250), newx, newy, neww, newh);

        Renderer.drawString(col + this.text, newx + (neww / 2 - Renderer.getStringWidth(this.text) / 2), newy + (newh / 2 - 4));

        if (currentchar !== "=") Renderer.drawString(currentchar, newx-Renderer.getStringWidth(currentchar)+neww-2, newy+Renderer.screen.getHeight()/35)
      }

      if (this.type == 3) { // draws a different toggle button: https://i.imgur.com/C3heK6w.png
        Renderer.drawRect(Renderer.color(210,105,30, 250), newx, newy, neww, newh);

        Renderer.drawRect(Renderer.color(250, 250, 250, 250), newx + (neww * 0.85), newy + (newh / 2)-4, neww / (neww / 8.5), newh / (newh / 8));
        if (Client.getMouseX() >= newx && Client.getMouseX() <= newx + neww && Client.getMouseY() >= newy && Client.getMouseY() <= newy + newh) Renderer.drawRect(Renderer.color(0, 0, 250, 150), newx + (neww * 0.85) + 1, newy + (newh / 2) + 1-4, neww / (neww / 8.5) - 2, newh / (newh / 8) - 2);
        
        if (toggle) Renderer.drawRect(Renderer.color(210,105,30, 250), newx + (neww * 0.85) + 1, newy + (newh / 2) + 1 - 4, neww / (neww / 8.5) - 2, newh / (newh / 8) - 2);

        Renderer.drawString(col + this.text, newx + (neww / 2 - Renderer.getStringWidth(this.text) / 2), newy + (newh / 2 - 4));
      }
      if (this.type == 4) { // Slider button: https://i.imgur.com/Ru8Kqch.png
        Renderer.drawRect(Renderer.color(210,105,30, 250), newx, newy, neww, newh);

        widthe=((widthe2-min)*(neww / (max-min))) // :fire: 
        widthe2=file.split(`/*${newtext}`).pop().split(`*/ function ${newtext}tog()`)[0] // ngl i spent like 30 minutes wondering why this wasnt working and i figured out i mispelled "file" as "fiel"
        
        if (Client.getMouseX() >= newx && Client.getMouseX() <= newx + neww && Client.getMouseY() >= newy && Client.getMouseY() <= newy + newh) {
          if (mousedown) {
            widthe = (Client.getMouseX() - newx).toFixed(0)
            widthe3 = ((widthe / (neww / (max-min)))+min).toFixed(2); // MATHS IS SO FUCKING HARD IM NEVER DOING IT AGAIN
          }
          FileLib.write(configpath, configpath2, file.replace(`${newtext}${widthe2}`, `${newtext}${widthe3}`))
        }

        if (widthe > neww) widthe = neww; if (widthe < 0.1) widthe = 1;
        if (widthe2 > max) widthe2 = max; if (widthe2 < min) widthe2 = min;

        Renderer.drawRect(Renderer.color(210,105,30, 250), newx, newy, widthe, newh);

        Renderer.drawString("&a"+this.text + "  " + widthe2, newx + (neww / 2 - Renderer.getStringWidth(this.text) / 2), newy + (newh / 2 - 4));
      }
      if (this.type == 5) { // Text button: text
        Renderer.drawRect(Renderer.color(210,105,30, 250), newx, newy, neww, newh);
        
        textboxpiss=file.split(`/*${newtext}`).pop().split(`*/ function ${newtext}tog()`)[0]
        if (textboxpiss == "&f") textboxpiss2 = this.text;
        else textboxpiss2 = textboxpiss;

        if (typed && Client.getMouseX() >= newx && Client.getMouseX() <= newx + neww && Client.getMouseY() >= newy && Client.getMouseY() <= newy + newh && keycode !== 42 && keycode !== 58 && keycode !== 15 && keycode !== 29 && keycode !== 5 && keycode !== 28 && keycode !== 1) {
          if (keycode == 14 && textboxpiss !== "&f") {let newtextpiss = textboxpiss.charAt(textboxpiss.length-1);
            World.playSound('dig.cloth', 1, 1);
            FileLib.write(configpath, configpath2, file.replace(`/*${newtext}${textboxpiss}`, `/*${newtext}${removeLastInstance(newtextpiss, textboxpiss)}`));}

          else FileLib.write(configpath, configpath2, file.replace(`/*${newtext}${textboxpiss}`, `/*${newtext}${textboxpiss}${keypressed}`)); typed = false; World.playSound('dig.stone', 1, 1);
        }
        Renderer.drawString("&b "+textboxpiss2, newx, newy + (newh / 2 - 4));
      }
    }

    if (Client.getMouseX() >= newx && Client.getMouseX() <= newx + neww && Client.getMouseY() >= newy && Client.getMouseY() <= newy + newh && this.hovert !== "" && this.show) {Renderer.drawRect(Renderer.color(20, 20, 20, 200), Client.getMouseX()-1-Renderer.getStringWidth(this.hovert), Client.getMouseY()-10, Renderer.getStringWidth(this.hovert)+3, 10); Renderer.drawStringWithShadow(this.hovert, Client.getMouseX()-Renderer.getStringWidth(this.hovert), Client.getMouseY()-9);}
  }
  isMouseOver() { // for if you want to make pressing buttons run commands or smth
    let mx = Client.getMouseX();
    let my = Client.getMouseY();
    if (mx >= newx && mx <= newx + neww && my >= newy && my <= newy + newh) {
      return true;
    } else return false;
  }
}

register("guiKey", (key, code, gui, event) => {keypressed = key; keycode = code; typed = true; setTimeout(function() {keycode = ""}, 500); setTimeout(function() {keypressed = ""}, 500);})
register("scrolled", (x,y,d) => {if (configGui.isOpen())scroll = true; scrold = d})
register("clicked", (x,y,lr,down) => {if (configGui.isOpen()) {if (down) mousedown = true; else mousedown = false; if (lr == "0" && down) {clicker = true; setTimeout(function() {clicker = false}, 500);} if (lr == "1" && down) {rightclicker = true;  setTimeout(function() {rightclicker = false}, 500)}}})
function removeLastInstance(badtext, str) {var charpos = str.lastIndexOf(badtext);if (charpos<0) return str;ptone = str.substring(0,charpos);pttwo = str.substring(charpos+(badtext.length));return (ptone+pttwo);} export{removeLastInstance}
// ^^^^ made by someone in stackoverflow: https://i.imgur.com/eKfwYab.png the thread: https://stackoverflow.com/questions/2729666/javascript-replace-last-occurrence-of-text-in-a-string yes i googled this...
let widthe = 0
let widthe2 = 0
let widthe3 = 0
let typed = false
let keycode = ""
let keypressed = ""
let textboxpiss = ""
let textboxpiss2 = ""
let mousedown = false
let clicker = false
let rightclicker = false

export {drawbut, configGui, configpath, configpath2, enabledfeatures}