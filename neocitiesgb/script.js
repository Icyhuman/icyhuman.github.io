function byebye(img){
    console.log('removing image')
    let image=img
    image.classList.add("boxgo")
    setTimeout(() => {
        image.classList.remove("boxgo")
        image.style.display="none";
    }, 300);
}

function pinclick(pin, link){
    console.log('Displaying image: '+link)
    let box=document.getElementById("box")
    box.src=link
    box.style.display="block"
    pin.src="imgs/gpin.png"
}
function howbtn(link){
    console.log('Displaying image: '+link)
    let box=document.getElementById("box")
    box.src=link
    box.style.display="block"
}

let images = ['screenshots/2026031019182200_c.jpg','screenshots/2021080818235400_s.jpg','screenshots/2021040117212000_s.jpg','screenshots/2026031221191500_c.jpg','screenshots/2021073110423300_s.jpg','screenshots/2020120513581200_s.jpg','screenshots/2026022712025600_c.jpg','screenshots/2026031019213500_c.jpg','screenshots/2026031019285100_c.jpg','screenshots/2026031019165600_c.jpg','screenshots/2021052714290100_s.jpg','screenshots/2021022013210600_s.jpg','screenshots/2026011418432500_c.jpg','screenshots/2026021214505200_c.jpg','screenshots/2020100414563700_s.jpg','screenshots/2022072612353600_c.jpg','screenshots/2020051215563900_s.jpg','screenshots/2026020113331700_c.jpg','screenshots/2021031514024800_s.jpg','screenshots/2021082923590600_s.jpg','screenshots/2024051723172800_c.jpg','screenshots/2024042917023600_c.jpg','screenshots/2021081514333000_s.jpg','screenshots/2021052415185000_s.jpg','screenshots/2026031313554600_c.jpg','screenshots/2026031221231600_c.jpg','screenshots/2023031718255600_c.jpg','screenshots/2026031019315700_c.jpg','screenshots/2021033112194200_s.jpg','screenshots/2020112612001300_s.jpg','screenshots/2020071521571000_s.jpg','screenshots/2020111606355500_s.jpg','screenshots/2020040714451000_s.jpg','screenshots/2026031019161800_c.jpg','screenshots/2020092814594300_s.jpg','screenshots/2026010200080200_c.jpg','screenshots/2021110409420100_c.jpg','screenshots/2026031019255700_c.jpg','screenshots/2020072915011300_s.jpg','screenshots/2026031019335000_c.jpg','screenshots/2024042917032400_c.jpg','screenshots/2021020219065700_s.jpg','screenshots/2021030217242900_s.jpg','screenshots/2020091413082300_s.jpg','screenshots/2026031019141600_c.jpg','screenshots/2026012715225400_c.jpg','screenshots/2020100414575400_s.jpg','screenshots/2020123121412700_s.jpg','screenshots/2026020212325300_c.jpg','screenshots/2024042916561800_c.jpg','screenshots/2024042916581600_c.jpg','screenshots/2026012715045200_c.jpg','screenshots/2026020513335700_c.jpg','screenshots/2026012715213900_c.jpg','screenshots/2026031221213700_c.jpg','screenshots/2024042916552100_c.jpg','screenshots/2026041715402500_c.jpg','screenshots/2026041715460300_c.jpg','screenshots/2026041715422500_c.jpg','screenshots/2026041715375000_c.jpg','screenshots/2026041715403300_c.jpg','screenshots/2026041715345200_c.jpg','screenshots/2026041715380800_c.jpg','screenshots/2026041715390500_c.jpg','screenshots/2026041715323500_c.jpg','screenshots/2026040121285100_c.jpg','screenshots/2026040217532400_c.jpg','screenshots/2026041715353500_c.jpg','screenshots/2026041715360800_c.jpg','screenshots/2026040121301800_c.jpg','screenshots/2026041715425200_c.jpg','screenshots/2026041715472300_c.jpg','screenshots/2026041715435600_c.jpg','screenshots/2026041715370200_c.jpg','screenshots/2026041715413200_c.jpg','screenshots/2026040217551100_c.jpg','screenshots/2026041715405900_c.jpg','screenshots/2026041715321100_c.jpg','screenshots/2026041715432600_c.jpg','screenshots/2026041715334100_c.jpg','screenshots/2026041715444400_c.jpg','screenshots/2026041715462400_c.jpg','screenshots/2026041715342700_c.jpg','screenshots/2026041715313200_c.jpg','screenshots/2026041715482000_c.jpg','screenshots/2026041715491600_c.jpg','screenshots/2026041715395000_c.jpg']
const imgarray=[]
function preload(){
console.log('Preloading images')
    for(i in images){
        const img = new Image();
        img.src = images[i];
        imgarray.push(img)
    }

}

console.log('Oh hey, you\'re checking out the console. Cool. Not that there\'s much here, unless you\'re really into actions being logged.')
let secret = 'Yahaha! You found me!'