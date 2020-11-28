import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clock, ClockWrapper } from '../models/clock';
import { filter, distinctUntilChanged } from 'rxjs/operators';
const LS_CLOCK_TIME = "LS_CLOCK_TIME";
const LS_IS_RUNNING = "LS_IS_RUNNING";
const LS_TICK_LIST = "LS_TICK_LIST";

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {



  emptyClock: Clock = {
    miliseconds: 0,
    minutes: 0,
    seconds: 0
  };

  private runningStateSubject = new BehaviorSubject<boolean>(this.isClockRunning());
  public runningState$ = this.runningStateSubject.asObservable().pipe(distinctUntilChanged());

  private clockStateSubject = new BehaviorSubject<Clock>(this.getTimeFromStorage());
  public clockState$ = this.clockStateSubject.asObservable().pipe(distinctUntilChanged());

  private tickListSubject = new BehaviorSubject<Clock[]>(this.getTicksFromStorage());
  public tickList$ = this.tickListSubject.asObservable();

  constructor() {

  }



  getResumeTime(): void {
    let clock = this.getTimeFromStorage();
    console.log("clock");
    this.clockStateSubject.next(clock);
  }


  isClockRunning(): boolean {
    return localStorage.getItem(LS_IS_RUNNING) === "true" || false;
  }


  removeLine(index: number): void {

    let currTickList = this.tickListSubject.value;
    currTickList.splice(index, 1);
    localStorage.setItem(LS_TICK_LIST, JSON.stringify(currTickList));
    this.tickListSubject.next(currTickList);
  }


  getTicksFromStorage(): Clock[] {
    let unparsed = localStorage.getItem(LS_TICK_LIST) || "";
    if (unparsed !== "") {
      let ticks: Clock[] = JSON.parse(unparsed);
      return ticks;
    }
    else {
      return [];
    }
  }

  toggleClock(state: boolean): void {
    this.runningStateSubject.next(state);
    localStorage.setItem(LS_IS_RUNNING, String(state));
  }


  getTimeFromStorage(): Clock {
    let unparsedClockTime = localStorage.getItem(LS_CLOCK_TIME) || "";
    if (unparsedClockTime !== "") {
      let clockWrap: ClockWrapper = JSON.parse(unparsedClockTime);
      if (this.isClockRunning()) {
        let now = Date.now();
        let oldTime = clockWrap.savedEpochTime;
        let milisecondsAlpha = now - oldTime;
        console.log("miliSecs Alpha", milisecondsAlpha);
        let addedMinutes = Math.floor(milisecondsAlpha / 60000);
        milisecondsAlpha = milisecondsAlpha - addedMinutes * 60000;
        let addedSeconds = Math.floor(milisecondsAlpha / 1000);
        milisecondsAlpha = milisecondsAlpha - addedSeconds * 1000;
        let addedMiliseconds = Math.max(1, Math.floor(milisecondsAlpha / 10));

        //if the miseconds sum go over 100 miliseconds (i divided by 10), ill need to add a seconds and put the alpha
        if (addedMiliseconds + clockWrap.currentClock.miliseconds > 100) {
          addedMiliseconds = (addedSeconds + clockWrap.currentClock.miliseconds) % 100;
          addedSeconds++;
          clockWrap.currentClock.miliseconds = 0;
        }

        //same
        if (addedSeconds + clockWrap.currentClock.seconds > 60) {
          addedSeconds = (addedSeconds + clockWrap.currentClock.seconds) % 60;
          addedMinutes++;
          clockWrap.currentClock.seconds = 0;
        }

        let clock: Clock = {
          miliseconds: clockWrap.currentClock.miliseconds + addedMiliseconds,
          minutes: clockWrap.currentClock.minutes + addedMinutes,
          seconds: clockWrap.currentClock.seconds + addedSeconds
        };
        return clock;
      }
      else {
        let clock: Clock = {
          miliseconds: clockWrap.currentClock.miliseconds,
          minutes: clockWrap.currentClock.minutes,
          seconds: clockWrap.currentClock.seconds
        };
        return clock;
      }
    }
    else {
      return this.emptyClock;
    }
  }


  zeroClock(): void {
    let clock: Clock = { miliseconds: 0, minutes: 0, seconds: 0 };
    this.toggleClock(false);
    this.clockStateSubject.next(clock);
    localStorage.setItem(LS_CLOCK_TIME, "");
    this.tickListSubject.next([]);
    localStorage.setItem(LS_TICK_LIST, "");
  }


  saveTick(newTick: Clock): void {
    let currTickList = this.tickListSubject.value;
    let newTickList = [newTick, ...currTickList];
    localStorage.setItem(LS_TICK_LIST, JSON.stringify(newTickList));
    this.tickListSubject.next(newTickList);
  }

  saveTime(clock: Clock): void {
    let time: ClockWrapper = {
      savedEpochTime: Date.now(),
      currentClock: clock
    };
    localStorage.setItem(LS_CLOCK_TIME, JSON.stringify(time));
  }





}
