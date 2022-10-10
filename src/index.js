
const homerunList = document.getElementById("homerun-list")
const displayNumber = document.getElementById('display-number')
const infoDisplayed = document.getElementById("info-displayed")
const displayOpponent = document.getElementById("display-opponent")
const displayPitcher = document.getElementById('display-pitcher')
const displayInning = document.getElementById('display-inning')
const displayRunners = document.getElementById('display-runners')
const displayDistance = document.getElementById('display-distance')
const displayExitVelo = document.getElementById('display-exitVelo')
const displayLaunchAngle = document.getElementById('display-launchAngle')
const displayBallpark = document.getElementById('display=ballpark')
const displayScore1 = document.getElementById('display-score1')
const displayScore2 = document.getElementById('display-score2')
const displayVideo = document.querySelector('video')


document.addEventListener("DOMContentLoaded", () =>{

    fetch('http://localhost:3000/homeruns')
    .then(res => res.json())
    .then(((data) => getHomeruns(data)))

    function getHomeruns(dinger){
        dinger.forEach((dingers) => {
            const number = dingers.number
            const numberCopy = number
            const pitcher = dingers.pitcher
            const opponent = dingers.opponent
            const inning = dingers.inning
            const runners = dingers.runners
            const distance = dingers.distance
            const exitVelo = dingers.exitVelo
            const launchAngle = dingers.launchAngle
            const ballpark = dingers.ballpark
            const score1 = dingers.scoreBefore
            const score2 = dingers.scoreAfter
            const video = dingers.video

            const newLi = document.createElement('li')
            const numberH1 = document.createElement('h1')
            numberH1.innerText = number

            const homerunList1 = document.getElementById('select').options.length
            homerunList1.addEventListener("change", e => {
                e.target.value
                displayNumber.textContent = `Number: ${numberCopy}`
                displayVideo.src = video
                displayPitcher.textContent = `Pitcher: ${pitcher}`
                displayOpponent.textContent = `Opponent: ${opponent}`
                displayInning.textContent = `Inning: ${inning}`
                displayRunners.textContent = `Runners: ${runners}`
                displayDistance.textContent = `Distance: ${distance}`
                displayExitVelo.textContent = `Exit Velo: ${exitVelo}`
                displayLaunchAngle.textContent = `Launch Angle: ${launchAngle}°`
                displayBallpark.textContent = `Ballpark: ${ballpark}`
                displayScore1.textContent = `Score Before: ${score1}`
                displayScore2.textContent = `Score After: ${score2}`
            })
            newLi.append(numberH1)
            homerunList.append(newLi)
        })
    }

}) 