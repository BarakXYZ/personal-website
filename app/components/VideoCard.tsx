import { Fragment } from "react";

export function VideoCard({
  title,
  description,
  color,
  image,
}: {
  title?: string;
  description?: string;
  color?: string;
  image?: string;
}) {
  return (
    <Fragment>
      <div className={styles.container + " " + color}>
        <text className={styles.title}>{title}</text>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} />
        </div>
        <text className={styles.paragraph}>{description}</text>
      </div>
    </Fragment>
  );
}

const styles = {
  title: "dark:text-white text-black font-bold text-center block",
  paragraph: "text-white block text-stroke-2 text-stroke-black",
  container:
    "rounded-lg p-4 w-64 h-96 dark:bg-black bg-white justify-center border border-gray-200 dark:border-gray-800",
  imageContainer: "p-2",
  image: "border border-black rounded-lg mx-auto block",
};
