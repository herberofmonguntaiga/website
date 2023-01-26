window.setInterval(() => {
    const list = ["https://cdn.discordapp.com/attachments/787125869142605825/1067637249946169375/2Jelly_BW_-_Copy.png"]
    document.getElementById("imagetwo").src = list[Math.floor(Math.random() * list.length)]
    console.log('.....................................................')
}, 2000)

document.getElementsByTagName("body")[0].addEventListener("click", function() {
    document.getElementById("audio").play();
})
