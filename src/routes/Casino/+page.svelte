<script>
    function randomNmr(maxLimit = 100) {
        let rand = Math.random() * maxLimit;
        rand = Math.floor(rand);

        if (rand <= 40) {
            return 0;
        } else if (rand > 40 && rand <= 70) {
            return 1;
        } else if (rand > 70 && rand <= 90) {
            return 2;
        } else {
            return 3;
        }
    }

    let imgList = [
        { img: "/Bell.jpg", streak: 0, threeS: 10, fourS: 20, fiveS: 50 },
        { img: "/Cherry.jpg", streak: 0, threeS: 20, fourS: 40, fiveS: 100 },
        { img: "/Diamond.jpg", streak: 0, threeS: 50, fourS: 100, fiveS: 200 },
        {
            img: "/Jackpot.jpg",
            streak: 0,
            threeS: 200,
            fourS: 2000,
            fiveS: 1000000,
        },
    ];

    let slots = [];
    let money = 50000;
    let rollcost = 10;
    let iterationsLeft = 10;
    let isRolling = false;

    let check = 0;


    function alreadyRolling() {
        if (!isRolling && money >= rollcost * iterationsLeft) {
            isRolling = true;
            autoroll(iterationsLeft);
        } else {
            alert(Chill);
        }
    }

    function autoroll(its) {
        if (its <= 0) {
            isRolling = false;
            return;
        }
        its--;
        roll();

        setTimeout(() => {
            autoroll(its);
        }, 250);
    }

    function roll() {
        if (money >= rollcost) {
            money -= rollcost;
            imgList = [
                {
                    img: "/Bell.jpg",
                    streak: 0,
                    threeS: 10,
                    fourS: 20,
                    fiveS: 50,
                },
                {
                    img: "/Cherry.jpg",
                    streak: 0,
                    threeS: 20,
                    fourS: 40,
                    fiveS: 100,
                },
                {
                    img: "/Diamond.jpg",
                    streak: 0,
                    threeS: 50,
                    fourS: 100,
                    fiveS: 200,
                },
                {
                    img: "/Jackpot.jpg",
                    streak: 0,
                    threeS: 200,
                    fourS: 2000,
                    fiveS: 1000000,
                },
            ];
            slots = [];

            let streak = 1;
            let previous = undefined;
            for (let index = 0; index < 5; index++) {
                let temp = randomNmr();
                slots.push({
                    id: index,
                    img: imgList[temp].img,
                    index: temp,
                });

                if (temp == previous) {
                    streak++;
                } else {
                    streak = 1;
                }

                if (streak > imgList[temp].streak) {
                    imgList[temp].streak = streak;
                    if (imgList[temp].streak == 3) {
                        money += imgList[temp].threeS;
                    } else if (imgList[temp].streak == 4) {
                        money += imgList[temp].fourS;
                    } else if (imgList[temp].streak == 5) {
                        money += imgList[temp].fiveS;
                    }
                }

                previous = temp;
                check++;
            }

        } else {
            alert("You do not have the sufficient funds to roll");
        }
    }

</script>

<body>
    
    <main class="casinoHome">
        <h1>{money}</h1>
        <div class="Slots">
            {#each slots as slot}
                <div>
                    <img
                        class="Slot"
                        src={slot.img}
                        alt=""
                        onerror="this.src='images/Jackpot.jpg';"
                    />
                </div>
            {/each}
        </div>
        <button type="button" class="button" on:click={() => roll()}
            >roll</button
        >
        <input
            bind:value={iterationsLeft}
            type="number"
            placeholder="Enter how many autorolls you want"
            id="nmr"
        />
        <button type="button" class="butt" on:click={() => alreadyRolling()}
            >autoroll</button
        >
    </main>
</body>

<style>
    :global(body) {
        width: 100vw;
        height: 100vh;
        background-color: green;
        overflow: hidden;
    }

    .casinoHome{
        display: flex;
        place-items: center;
        place-content: center;
        gap: 50px;
        flex-direction: column;
        height: 100vh;
    }


    .button {
        width: 40px;
        height: 20px;
    }

    .Slots {
        padding: 50px 50px 50px;
        display: flex;
        flex-direction: row;
        background-color: gold;
        border-radius: 20px;
        justify-content: space-between;
        width: 500px;
        padding-left: 50px;
        padding-right: 50px;
    }

    .Slot {
        height: 90px;
        width: 90px;
        border-radius: 10px;
    }

</style>
