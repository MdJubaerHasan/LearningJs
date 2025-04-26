function updateClock(){
    const now = new Date();
    //// for military time
    //// const hours = now.getHours().toString().padStart(2,0);
    //// for 12 hours 
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

//// Update clock immediately 

updateClock();


//// setInterval = is a function like setTimeout, but it loops 
////               indefinitely

setInterval(updateClock, 1000);