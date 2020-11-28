export interface Clock {
    minutes: number;
    seconds: number;
    miliseconds: number;
}

export interface ClockWrapper {
    currentClock: Clock;
    savedEpochTime: number;
}
