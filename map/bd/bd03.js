function simulate(initRatPos, initPlayerPos) {
    const spaces = [-1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0];
    let pwinCount = 0;
            
    if(initPlayerPos>=initRatPos || initPlayerPos>=spaces.length || initRatPos>=spaces.length){
        postMessage("Please enter a valid position");
        return
    }
        
    for (let i = 0; i < 100000; i++) {
        let ratPos = initRatPos;
        let playerPos = initPlayerPos;
        
        // Rat start
        ratPos += Math.floor(Math.random() * 3) + 1;
        if(ratPos >= spaces.length) continue; // Rat wins
        
        while(spaces[ratPos] === 1) {
            ratPos += Math.floor(Math.random() * 3) + 1;
        }
        
        playerPos += Math.floor(Math.random() * 6) + 1;
        if(playerPos >= spaces.length) continue; // Rat wins
        while (spaces[playerPos] === 1) {
            playerPos += Math.floor(Math.random() * 6) + 1;
        }
        console.log(playerPos);
        if (playerPos >= ratPos) {
                    pwinCount++;
        }
    }
        

    postMessage(`Catching chance: ${(pwinCount / 100000 * 100).toFixed(2)}%`);
}

onmessage = evt => {
    simulate(evt.data[0],evt.data[1]);
}
