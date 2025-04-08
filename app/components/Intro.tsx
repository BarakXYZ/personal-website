import { Fragment } from "react";

const Bio: String = `

Hello there!
I'm Barak, a developer, director, and a multidisciplinary tech artist (geek 👍)
Thank you so much for stopping by!
Feel free to contact me and let me know what you're up to!

Github
LinkedIn
iBarakXYZ@gmail.com


Click on any video from the below to start watching <3
`;

export function Intro() {
  return (
    <Fragment>
      <div className={styles.container}>
        <text className={styles.title}>Hi from Intro</text>
        <text className={styles.paragraph}>{Bio}</text>
      </div>
    </Fragment>
  );
}

const styles = {
  title: "dark:text-white text-black font-bold text-center block",
  paragraph: "dark:text-white text-black block",
  container:
    "rounded-lg p-4 w-96 h-96 dark:bg-black bg-white justify-center border border-gray-200 dark:border-gray-800",
};
