/* let texten = "feliz martes campeon";
fenterlimesz mairtenters caimpenterobern
pelicula de acción 
    penterlimescufatlai denter aiccimesobern
pelele penterlenterlenter

let en = texten.replaceAll("e","enter");
en = en.replaceAll("i","imes");
en = en.replaceAll("a","ai");
en = en.replaceAll("o","ober");
en = en.replaceAll("u","ufat");
console.log(en); */

/* let textdes = "fenterlimesz mairtenters caimpenterobern";

let des = textdes.replaceAll("enter","e");
des = des.replaceAll("imes","i");
des = des.replaceAll("ai","a");
des = des.replaceAll("ober","o");
des = des.replaceAll("ufat","u");
console.log(des); */

function encriptar(text) {
    let texten = text;
    let en = texten.replaceAll("e","enter");
    en = en.replaceAll("i","imes");
    en = en.replaceAll("a","ai");
    en = en.replaceAll("o","ober");
    en = en.replaceAll("u","ufat");
    console.log(en);
}

function desencriptar(text) {
    let texdes = text;
    let des = texdes.replaceAll("enter","e");
    des = des.replaceAll("imes","i");
    des = des.replaceAll("ai","a");
    des = des.replaceAll("ober","o");
    des = des.replaceAll("ufat","u");
    console.log(des);
}

desencriptar("fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!");
