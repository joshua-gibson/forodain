import ch01 from "./ch01.json";
import ch02 from "./ch02.json";
import ch03 from "./ch03.json";
import ch04 from "./ch04.json";
import ch05 from "./ch05.json";
import ch06 from "./ch06.json";
import ch07 from "./ch07.json";
import ch07b from "./ch07b.json";
import ch08 from "./ch08.json";
import ch09 from "./ch09.json";
import ch10 from "./ch10.json";
import ch11 from "./ch11.json";
import ch12 from "./ch12.json";
import ch13 from "./ch13.json";
import ch14 from "./ch14.json";
import ch15 from "./ch15.json";
import ch16 from "./ch16.json";

interface Sections {
  heading?: string;
  image?: string;
  paragraphs: string[];
}

interface Story {
  title: string;
  sections: Sections[];
}

interface Stories {
  [key: string]: Story;
}

interface Strings {
  story: Stories;
}

export const strings: Strings = {
  story: {
    ch01,
    ch02,
    ch03,
    ch04,
    ch05,
    ch06,
    ch07,
    ch07b,
    ch08,
    ch09,
    ch10,
    ch11,
    ch12,
    ch13,
    ch14,
    ch15,
    ch16
  },
};
