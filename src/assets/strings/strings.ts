import ch1 from "./ch1.json";
import ch2 from "./ch2.json";
import ch3 from "./ch3.json";
import ch4 from "./ch4.json";
import ch5 from "./ch5.json";
import ch6 from "./ch6.json";
import ch7 from "./ch7.json";

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
    ch1,
    ch2,
    ch3,
    ch4,
    ch5,
    ch6,
    ch7,
  },
};
