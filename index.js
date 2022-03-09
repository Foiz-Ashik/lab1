var fruits = [

	{name:"Apple", quantity:20, color:"red"},
	{name:"Orange", quantity:10, color:"orange"},
	{name:"Banana", quantity:15, color:"yellow"},
	{name:"Kiwi", quantity:3, color:"green"},
	{name:"Blueberry", quantity:5, color:"blue"},
	{name:"Grapes", quantity:8, color:"purple"}

];



var canvas = document.querySelector('canvas');

canvas.width = 2000;
canvas.height = 1000;

var ctx  = canvas.getContext('2d');

for(var i = 0;i<fruits.length;i++){
    var y = 1000;
    ctx.strokeStyle = 'black';
    ctx.font = "bold 50px Ariel"
    
    if(fruits[i].name=="Apple"){
        var q = fruits[i].quantity;
        for(j = 0; j<q; j++){
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(0,y,150,500);
        ctx.strokeText(q,40,930,100,100);
        ctx.strokeText('Apple',20,980,100,100);
        y-=50;
        }
    
      }

    if(fruits[i].name=="Orange"){
        var q = fruits[i].quantity;
        for(j = 0; j<q; j++){
        ctx.beginPath();
        ctx.fillStyle = 'orange';
        ctx.fillRect(150,y,150,500);
        ctx.strokeText(q,190,930,100,100);
        ctx.strokeText('Orange',170,980,100,100);
        y-=50;
        } 
    }

    if(fruits[i].name=="Banana"){
        var q = fruits[i].quantity;
        for(j = 0; j<q; j++){
        ctx.beginPath();
        ctx.fillStyle = 'yellow';
        ctx.fillRect(300,y,150,500);
        ctx.strokeText(q,340,930,100,100);
        ctx.strokeText('Banana',320,980,100,100);
        y-=50;
        } 
    }

    if(fruits[i].name=="Kiwi"){
        var q = fruits[i].quantity;
        for(j = 0; j<q; j++){
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.fillRect(450,y,150,500);
        ctx.strokeText(q,500,940,100,100);
        ctx.strokeText('Kiwi',480,985,50,20);
        y-=50;
        } 
    }

    if(fruits[i].name=="Blueberry"){
        var q = fruits[i].quantity;
        for(j = 0; j<q; j++){
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(600,y,150,500);
        ctx.strokeText(q,660,930,100,100);
        ctx.strokeText('Blueberry',610,980,130,100);
        y-=50;
        } 
    }

    if(fruits[i].name=="Grapes"){
        var q = fruits[i].quantity;
        for(j = 0; j<q; j++){
        ctx.beginPath();
        ctx.fillStyle = 'purple';
        ctx.fillRect(750,y,150,500);
        ctx.strokeText(q,800,930,100,100);
        ctx.strokeText('Grapes',760,980,130,100);
        y-=50;
        } 
    }  
}
