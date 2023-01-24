function encriptar(text) {
    let texten = text;
    let en;
    en = texten.replaceAll("e","enter");
    en = en.replaceAll("i","imes");
    en = en.replaceAll("a","ai");
    en = en.replaceAll("o","ober");
    en = en.replaceAll("u","ufat");
    console.log(en);
    document.getElementById("p").innerHTML = en;
    cambio();
}

function desencriptar(text) {
    let texdes = text;
    let des;
    des = texdes.replaceAll("enter","e");
    des = des.replaceAll("imes","i");
    des = des.replaceAll("ai","a");
    des = des.replaceAll("ober","o");
    des = des.replaceAll("ufat","u");
    console.log(des);
    document.getElementById("p").innerHTML = des;
    cambio();
}

function textoEn(){
    let text = document.getElementById("entradatexto").value;
    if (text == ""){
        alert("Escribe algo")
    }else{
        encriptar(text);
    }
    
}

function textoDes(){
    let text = document.getElementById("entradatexto").value;
    if (text == ""){
        alert("Escribe algo")
    }else{
        if(text != document.getElementById("p").value){
            desencriptar(text);
        }
        
    }
    
}

function cambio(){
    let oc = document.getElementById("txtb");
    oc.style.display = "none";
    let cam = document.getElementById("txta");
    cam.style.display = "flex";
}