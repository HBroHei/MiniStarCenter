const msgList = [
            'Player Conveyor is a horrible minigame now that I understand it.',
            'Master difficulty? More like \"Cheating\" am I right?',
            'Although I enjoyed Superstars more, I still enjoy playing Mario Party 9.',
            'All numbers in this website are either whole number or corrected to 3 significant figure.'
        ]
        document.getElementById("div_quote").textContent = msgList[Math.floor(Math.random()*msgList.length)]