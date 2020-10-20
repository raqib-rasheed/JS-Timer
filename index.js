
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const PauseButton = document.querySelector("#pause");
const circle =  document.querySelector("circle");
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);


let duration;
const timer = new Timer(durationInput,startButton,PauseButton,
    {
        onStart(totalDuration) {
            duration = totalDuration;
        },
        onTick(timeReamainig) { 
            circle.setAttribute('stroke-dashoffset',
            perimeter * timeReamainig/duration - perimeter
            );
        },
        onComplete(){
        console.log("Time out");
    }
}); 