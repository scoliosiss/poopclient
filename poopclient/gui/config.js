let incoolgui = true; let typed= true;let clicker = true; let rightclicker = true; let mousedown = true; let epiccumeater = true; let toggle = "false"; let toggle2 = "true"; let color = "a"; let keybinded = true;let configfile = FileLib.read("poopclient/gui", "config.js"); let dontstoploading = true; let guisopen=false
register("worldLoad", () => {
    new Thread(() => {
        dontstoploading=true
        Thread.sleep(5000)
        dontstoploading=false
    }).start()
})
register("postGuiRender" , (mx, my, gui) => {
    if (!dontstoploading){
    if (gui instanceof com.chattriggers.ctjs.engine.langs.js.JSGui) {
        configfile = FileLib.read("poopclient/gui", "config.js");
        guisopen=true
    }
    else {guisopen=false;}}
}); 

register("step", () => {
    new Thread(() => {
        if (guisopen && !incoolgui){if (clicker || rightclicker || typed) {incoolgui = true;}}
        if (incoolgui) {
            Thread.sleep(1000)
            incoolgui=false
        }
    }).start()  
})
register("clicked", (x,y,lr,down) => {
    if (Client.currentGui.get() !== null) {
        if (down) mousedown = true; else mousedown = false; 
        if (lr == "0" && down) clicker = true;
        if (lr == "1" && down) rightclicker = true;
        setTimeout(function() {rightclicker = false; clicker = false;}, 500);
    }
}); 
register("guiKey", (key, code, gui, event) => {
    keypressed = key; keycode = code; typed = true; 
    setTimeout(function() {keycode = "";keypressed = "";typed=false;}, 500);
});
register("tick", () => {
    if (keybinded) {configfile = FileLib.read("poopclient/gui", "config.js"); setTimeout(function() {keybinded=false;}, 1000); }
})

/*antiaimfalse*/ let fortniteantiaim = false; function antiaimtog() {if (incoolgui || keybinded) {if (configfile.includes("/*antiaim"+"true*/")) fortniteantiaim = true; else fortniteantiaim = false;} return fortniteantiaim}; export{antiaimtog}; /*antiaimrightfalse*/ let fortniteantiaimright = false; function antiaimrighttog() {if (incoolgui) {if (configfile.includes("/*antiaimright"+"true*/")) fortniteantiaimright = true; else fortniteantiaimright = false;} return fortniteantiaimright}; export{antiaimrighttog}; /*antiaimbind=13*/ function antiaimbindtog() {if (incoolgui) {antiaimfortnite1 = configfile.split("/*"+"antiaimbind").pop().split("*/ "+"function antiaimbindtog()")[0]; idfkantiaim = antiaimfortnite1.charAt(0); keynumantiaim = antiaimfortnite1.replace(idfkantiaim, "");}return {k: idfkantiaim, n: keynumantiaim}}; export{antiaimbindtog}; let idfkantiaim; let keynumantiaim; let antiaimfortnite1; let antiaimpressed = false;  register("tick", () => {let toggle = "false"; let toggle2 = "true"; let color = "a"; if (!Client.Companion.isInGui()) {if (Keyboard.isKeyDown(antiaimbindtog().n)) {if (!antiaimpressed){antiaimpressed = true;if (configfile.includes("/*antiaim"+"true*/")) toggle = "true"; else toggle = "false"; if (toggle == "false") {toggle2 = "true"; color = "a"} else {toggle2 = "false"; color = "c"};keybinded = true;FileLib.write("poopclient/gui/", "config.js", configfile.replace("/*"+"antiaim"+toggle, "/*"+"antiaim"+toggle2)); ChatLib.chat("&c&lM&f&lu&c&ls&f&lh&c&lr&f&lo&c&lo&f&lo&c&lm &lClient&f&l > &"+color+"antiaim")}} else antiaimpressed = false}});
/*antisocialfalse*/ let fortniteantisocial = false; function antisocialtog() {if (incoolgui || keybinded) {if (configfile.includes("/*antisocial"+"true*/")) fortniteantisocial = true; else fortniteantisocial = false;} return fortniteantisocial}; export{antisocialtog}; /*antisocialrightfalse*/ let fortniteantisocialright = false; function antisocialrighttog() {if (incoolgui) {if (configfile.includes("/*antisocialright"+"true*/")) fortniteantisocialright = true; else fortniteantisocialright = false;} return fortniteantisocialright}; export{antisocialrighttog}; /*antisocialbind*/ function antisocialbindtog() {if (incoolgui) {antisocialfortnite1 = configfile.split("/*"+"antisocialbind").pop().split("*/ "+"function antisocialbindtog()")[0]; idfkantisocial = antisocialfortnite1.charAt(0); keynumantisocial = antisocialfortnite1.replace(idfkantisocial, "");}return {k: idfkantisocial, n: keynumantisocial}}; export{antisocialbindtog}; let idfkantisocial; let keynumantisocial; let antisocialfortnite1; let antisocialpressed = false;  register("tick", () => {let toggle = "false"; let toggle2 = "true"; let color = "a"; if (!Client.Companion.isInGui()) {if (Keyboard.isKeyDown(antisocialbindtog().n)) {if (!antisocialpressed){antisocialpressed = true;if (configfile.includes("/*antisocial"+"true*/")) toggle = "true"; else toggle = "false"; if (toggle == "false") {toggle2 = "true"; color = "a"} else {toggle2 = "false"; color = "c"};keybinded = true;FileLib.write("poopclient/gui/", "config.js", configfile.replace("/*"+"antisocial"+toggle, "/*"+"antisocial"+toggle2)); ChatLib.chat("&c&lM&f&lu&c&ls&f&lh&c&lr&f&lo&c&lo&f&lo&c&lm &lClient&f&l > &"+color+"antisocial")}} else antisocialpressed = false}});
/*toomuchspanishfalse*/ let fortnitetoomuchspanish = false; function toomuchspanishtog() {if (incoolgui) {if (configfile.includes("/*toomuchspanish"+"true*/")) fortnitetoomuchspanish = true; else fortnitetoomuchspanish = false;} return fortnitetoomuchspanish}; export{toomuchspanishtog}; /*toomuchspanishrightfalse*/ let fortnitetoomuchspanishright = false; function toomuchspanishrighttog() {if (incoolgui || keybinded) {if (configfile.includes("/*toomuchspanishright"+"true*/")) fortnitetoomuchspanishright = true; else fortnitetoomuchspanishright = false;} return fortnitetoomuchspanishright}; export{toomuchspanishrighttog}
/*wheelchairfalse*/ let fortnitewheelchair = false; function wheelchairtog() {if (incoolgui) {if (configfile.includes("/*wheelchair"+"true*/")) fortnitewheelchair = true; else fortnitewheelchair = false;} return fortnitewheelchair}; export{wheelchairtog}; /*wheelchairrightfalse*/ let fortnitewheelchairright = false; function wheelchairrighttog() {if (incoolgui || keybinded) {if (configfile.includes("/*wheelchairright"+"true*/")) fortnitewheelchairright = true; else fortnitewheelchairright = false;} return fortnitewheelchairright}; export{wheelchairrighttog}
/*timetravelfalse*/ let fortnitetimetravel = false; function timetraveltog() {if (incoolgui || keybinded) {if (configfile.includes("/*timetravel"+"true*/")) fortnitetimetravel = true; else fortnitetimetravel = false;} return fortnitetimetravel}; export{timetraveltog}; /*timetravelrightfalse*/ let fortnitetimetravelright = false; function timetravelrighttog() {if (incoolgui) {if (configfile.includes("/*timetravelright"+"true*/")) fortnitetimetravelright = true; else fortnitetimetravelright = false;} return fortnitetimetravelright}; export{timetravelrighttog}; /*timetravelbind=13*/ function timetravelbindtog() {if (incoolgui) {timetravelfortnite1 = configfile.split("/*"+"timetravelbind").pop().split("*/ "+"function timetravelbindtog()")[0]; idfktimetravel = timetravelfortnite1.charAt(0); keynumtimetravel = timetravelfortnite1.replace(idfktimetravel, "");}return {k: idfktimetravel, n: keynumtimetravel}}; export{timetravelbindtog}; let idfktimetravel; let keynumtimetravel; let timetravelfortnite1; let timetravelpressed = false;  register("tick", () => {let toggle = "false"; let toggle2 = "true"; let color = "a"; if (!Client.Companion.isInGui()) {if (Keyboard.isKeyDown(timetravelbindtog().n)) {if (!timetravelpressed){timetravelpressed = true;if (configfile.includes("/*timetravel"+"true*/")) toggle = "true"; else toggle = "false"; if (toggle == "false") {toggle2 = "true"; color = "a"} else {toggle2 = "false"; color = "c"};keybinded = true;FileLib.write("poopclient/gui/", "config.js", configfile.replace("/*"+"timetravel"+toggle, "/*"+"timetravel"+toggle2)); ChatLib.chat("&c&lM&f&lu&c&ls&f&lh&c&lr&f&lo&c&lo&f&lo&c&lm &lClient&f&l > &"+color+"timetravel")}} else timetravelpressed = false}});
/*ILLSAVEYOUMRPRESIDENTfalse*/ let fortniteILLSAVEYOUMRPRESIDENT = false; function ILLSAVEYOUMRPRESIDENTtog() {if (incoolgui) {if (configfile.includes("/*ILLSAVEYOUMRPRESIDENT"+"true*/")) fortniteILLSAVEYOUMRPRESIDENT = true; else fortniteILLSAVEYOUMRPRESIDENT = false;} return fortniteILLSAVEYOUMRPRESIDENT}; export{ILLSAVEYOUMRPRESIDENTtog}; /*ILLSAVEYOUMRPRESIDENTrightfalse*/ let fortniteILLSAVEYOUMRPRESIDENTright = false; function ILLSAVEYOUMRPRESIDENTrighttog() {if (incoolgui || keybinded) {if (configfile.includes("/*ILLSAVEYOUMRPRESIDENTright"+"true*/")) fortniteILLSAVEYOUMRPRESIDENTright = true; else fortniteILLSAVEYOUMRPRESIDENTright = false;} return fortniteILLSAVEYOUMRPRESIDENTright}; export{ILLSAVEYOUMRPRESIDENTrighttog}
/*slowplacefalse*/ let fortniteslowplace = false; function slowplacetog() {if (incoolgui) {if (configfile.includes("/*slowplace"+"true*/")) fortniteslowplace = true; else fortniteslowplace = false;} return fortniteslowplace}; export{slowplacetog}; /*slowplacerightfalse*/ let fortniteslowplaceright = false; function slowplacerighttog() {if (incoolgui || keybinded) {if (configfile.includes("/*slowplaceright"+"true*/")) fortniteslowplaceright = true; else fortniteslowplaceright = false;} return fortniteslowplaceright}; export{slowplacerighttog}
/*GODMODEfalse*/ let fortniteGODMODE = false; function GODMODEtog() {if (incoolgui) {if (configfile.includes("/*GODMODE"+"true*/")) fortniteGODMODE = true; else fortniteGODMODE = false;} return fortniteGODMODE}; export{GODMODEtog}; /*GODMODErightfalse*/ let fortniteGODMODEright = false; function GODMODErighttog() {if (incoolgui || keybinded) {if (configfile.includes("/*GODMODEright"+"true*/")) fortniteGODMODEright = true; else fortniteGODMODEright = false;} return fortniteGODMODEright}; export{GODMODErighttog}
