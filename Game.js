AFRAME.registerComponent("game-play", {
juego: function() {
    const element = document.querySelector(elementId);
    element.addEventListener("collide", e=>{
        if (elementId.includes("#coin")){
            element.setAttribute("visible", false);
            console.log("Colisión de anillo");
        }
        if(elementId.includes("#fish")){
            console.log("Colisioón de pez");
        }
    });
  coinEl.setAttribute("static-body", {
    shape: "sphere",
    sphereRadius: 2
  })
    
}
});
