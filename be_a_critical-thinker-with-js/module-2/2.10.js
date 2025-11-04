// Given an array of events with timestamps,
//  group them into 30-minute intervals
// and count how many events occur in each interval.

const events = [
  { timestamp: "2025-11-03T10:05:30Z", event: "click" },
  { timestamp: "2025-11-03T10:16:05Z", event: "scroll" },
  { timestamp: "2025-11-03T10:29:20Z", event: "mousemove" },
  { timestamp: "2025-11-03T10:35:10Z", event: "keypress" },
  { timestamp: "2025-11-03T10:45:45Z", event: "click" },
  { timestamp: "2025-11-03T11:02:30Z", event: "scroll" },
  { timestamp: "2025-11-03T11:12:50Z", event: "click" },
  { timestamp: "2025-11-03T11:25:15Z", event: "mousemove" },
  { timestamp: "2025-11-03T11:50:05Z", event: "keypress" },
  { timestamp: "2025-11-03T12:05:10Z", event: "click" },
];
const interval = 30 * 60 * 1000; //30 min in ms

const BeaningTimeStamp = (timeStamp) => {
  const date = new Date(timeStamp);
  const floorDate = Math.floor(date.getTime() / interval);
  return new Date(floorDate).toISOString();
};
BeaningTimeStamp("2025-11-03T10:17:20Z");

const bindata = events.reduce((accumulator, event) => {
  const bin = BeaningTimeStamp(event.timestamp);
  if (!accumulator[bin]) {
    accumulator[bin] = { total: 0 };
  }
  accumulator[bin].total += 1;

  return accumulator;
}, {});
console.log(bindata);
