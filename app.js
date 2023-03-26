window.onload=function(){
    const canvas=document.querySelector("canvas");
    if(canvas && canvas.getContext){
        ctx=canvas.getContext("2d");
        if(ctx){
            //valeur initiale

            ctx.lineWidth="25";
            ctx.strokeStyle="black";

            ctx.beginPath();
            ctx.lineCap="round";
            ctx.moveTo(50,50);
            ctx.lineTo(300,150);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineCap="square";
            ctx.moveTo(50,200);
            ctx.lineTo(300,300);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineCap="butt";
            ctx.moveTo(50,350);
            ctx.lineTo(300,450);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineCap="square";
            ctx.moveTo(300,300);
            ctx.lineTo(250,200);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineCap="butt";
            ctx.moveTo(299,450);
            ctx.lineTo(550,350);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineJoin="round"
            ctx.moveTo(310,50);
            ctx.lineTo(400,50);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineJoind="round";
            ctx.moveTo(390,50);
            ctx.lineTo(500,70);
            ctx.stroke();

            ctx.strokeStyle="red";
            ctx.beginPath();
            ctx.moveTo(75,350);
            ctx.lineTo(125,250);
            ctx.lineTo(175,350);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineJoin="round";
            ctx.moveTo(175,350);
            ctx.lineTo(225,250);
            ctx.lineTo(275,350);
            ctx.stroke();

            ctx.strokeStyle="blue"
            ctx.beginPath();
            ctx.lineJoin="mitter";
            ctx.moveTo(600,250);
            ctx.lineTo(700,200);
            ctx.lineTo(800,250);
            ctx.stroke();

            ctx.fillStyle='white';
            ctx.fillRect(700,350,300,100);

        }
    }else{
        alert("Votre navigateur ne supporte pas")
    }
}