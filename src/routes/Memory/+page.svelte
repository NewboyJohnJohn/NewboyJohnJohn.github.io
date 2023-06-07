<script>
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
      }

    return array;
    }

    let flippedcard1 = "";
    let flippedcard2 = "";
    let totalcards = 0;
    let numberofright = 0;
    

    let img = ["/choice.jpeg","/prison cell.png","/wave.jpeg","/choice.jpeg","/prison cell.png","/wave.jpeg","2Q.png","2Q.png"];
    let imgList = shuffle(img);

    let cards = [];
    for (let index = 0; index < 8; index++) {
      totalcards = index
      cards.push({
        id: index,
        img: imgList[index], // TODO: unique images per card card
        flipped: false,
        completed: false,
      });
    }
    let flipcount = 0;
    function flip(card) {
      if (!card.flipped && flipcount < 2) {

        
        if (flipcount == 0){
          flippedcard1 = card.img;
        }
        else if (flipcount == 1){
          flippedcard2 = card.img;
        }
        flipcount += 1;
        card.flipped = true
        // TODO: Probably do what?
        // flip the cards over after 2s from seeing both cards
        if (flipcount == 2 && flippedcard1 == flippedcard2) {
          setTimeout(() => {
            // flip over cards that have not been marked as "completed"
            cards.forEach((card) => {
              card.completed = card.flipped;
            });
            flipcount = 0;
            cards = cards;
            flippedcard1 = ""
            flippedcard2 = ""
            numberofright += 2
          }, 2000);
        }
        else if (flipcount == 2 && flippedcard1 != flippedcard2){
          setTimeout(() => {
            // flip over cards that have not been marked as "completed"
            cards.forEach((card) => {
              card.flipped = card.completed;
            });
            flipcount = 0;
            cards = cards;
            flippedcard1 = ""
            flippedcard2 = ""
          }, 2000);
        }
        flippedcard1 = flippedcard1;
        flippedcard2 = flippedcard2;
        cards = cards;
      } else {
        alert("chill");
      }
    }
  </script>
  
  <main>
    <div class="row">
      {#each cards as card, i}
        <div
          on:click={() => {
            flip(card);
          }}
          on:keypress={() => {
            flip(card);
          }}
          class:flipped={card.flipped}
          class="card"
        >
          <img class="front" src={card.img} alt="" />
          <img class="back" src="Yugioh_Card_Back.png" alt="" />
        </div>
      {/each}
    </div>
  </main>
  
  <style>
    main {
      margin-top: 50px;
      display: flex;
      place-content: center;
      place-items: center;
    }
    .row {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(4, 100px);
    }
    .card {
      border: 1px solid black;
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
    .card.flipped {
      transform: rotateY(180deg);
    }
    .card .back {
      transform: rotateY(0deg);
    }
    .card .front {
      transform: rotateY(180deg);
    }
    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
    }
  </style>