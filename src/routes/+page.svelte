<body>
<h1><center>China Clicker</center></h1>
<h2><center>{numberOfClicks} chinese people</center></h2>

<style>
    body{
        background-color: gray;
    }
    h1{
    font-size: 4em;
    color: rgb(115, 9, 9);
}
.cookiePic{
    border: 3px solid black;
    background-color: white;
    border-radius: 30%;
    width: 250px;
    height: 250px;
}

</style>
</body>
<script>

    let click = 1;
    let ricecost = 25;
    let childcost = 100;
    let numberOfClicks = 0;
    let cps = 0;

    function add(){
        numberOfClicks += click        
    }

    function moreDmg(){
        if (numberOfClicks >= ricecost){
            numberOfClicks -= ricecost
            ricecost += 75 * click * 3
            click *= 2; 
        }
    }

    setInterval(function(){
        numberOfClicks += cps
    }, 1000)

    function moreLabour(){
        if (numberOfClicks >= childcost){
            numberOfClicks -= childcost;
            if (cps != 0){
                cps *= 2
            }
            else{
                cps += 1;
            }
            childcost += 100 * cps * 6;
            
            
        }
            
        }


</script>



<center><button class="cookiePic"type="button" on:click={()=>add()}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdxrnEaCyptvp4Qh90qVPIhQcxA8MK79CnQ&usqp=CAU" width="200" height="200" alt="a chinese person">
</button>

<p>Buy rice farmer (x 2 click power)</p>
<button type="button" on:click={()=>moreDmg()}>
    ${ricecost}
</button>

<p>Buy child labour for {childcost }(x 2 cps)</p>
<button type="button" on:click={()=>moreLabour()}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMMlkxJjji6a3DoFiEwKKKGtf7kpfvhqkvQ&usqp=CAU" alt="chinese children"></button>
</center>
