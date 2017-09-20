class Event {
    constructor(name, text, date) {
        this.name = name;
        this.text = text;
        this.date = date;
    }

    getDate() {
        return this.date;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    alarm() {
        alert(this.name + " " + this.text);
    }
}
class Calendar {
    constructor() {
        this.startDateTime = new Date();
        this.currentDateTime = new Date();
        this.events = [];
        this.eventsId = [];
    }

    getEvents() {
        return this.events;
    }

    addEvent(event) {
        if(event.getDate() > startDateTime){
            if (this.eventsId.length !== 0) {
                event.setId(Math.max(this.eventsId) + 1)
            } else {
                event.setId(0);
            }
            this.events.push(event);
        } else {
            let el = document.createElement('p');
            document.querySelector('#dateStamp').appendChild(el);
        }
    }

    deleteEvent(id) {
        for (let i = 0; i < this.events.length; i++) {
            if(this.events[i].getId() === id) {
                this.events.splice(i, 1);
            }
        }
    }
}

function updateTime() {
    let currentDateTime = new Date();
    let difference = Math.round((currentDateTime.getTime()-startDateTime)/1000);
    let day = Math.floor(difference/(24*60*60));
    difference = difference-(day*24*60*60);
    let hour = Math.floor(difference/(60*60));
    difference = difference-(hour*60*60);
    let minutes = Math.floor(difference/(60));
    difference = difference-(minutes*60);
    document.querySelector("#days").innerHTML = "Day: " + day;
    document.querySelector("#time").innerHTML = hour + ":" + minutes + ":" + difference;
}

function present() {
    updateTime();
    let events = calendar.getEvents();
    for (let i = 0; i < events.length; i++) {
        if (Math.round(events[i].getDate()/1000) === Math.round(new Date().getTime()/1000)) {
            events[i].alarm();
            calendar.deleteEvent(events[i].getId());
        }
    }
}

const DELAY = 1000;
const startDateTime = new Date().getTime();
const event = new Event("Test", "Test", startDateTime + 5000);

var calendar = new Calendar();
calendar.addEvent(event);

setInterval(present, DELAY);