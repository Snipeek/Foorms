import React, {useEffect, useRef} from "react";
import styles from "@/index.css";
import names from "@/memodzi";
import classNames from "classnames";

const byType = {
  emoji: ({ checked, value }) => {
    const { poster, src } = names[value];
    const ref = useRef();

    useEffect(() => {
      if (!ref.current) return;

      if (checked)
        ref.current.play();
      else {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    }, [checked])

    const actions = {
      autoPlay: checked,
      onMouseOver: (ref) => { ref.target.play(); },
      onMouseOut:  (ref) => {
        if (checked) return;
        ref.target.pause();
        ref.target.currentTime = 0;
      },
    }

    return (
      <video ref={ref} poster={poster} className={styles.memodzi} {...actions} loop muted playsInline>
        <source type="video/webm" src={src} />
      </video>
    )
  },
  text: ({ checked, value }) => <div className={classNames(styles.memodzi, styles.text, checked && styles.checked)}>{value}</div>,
}

export const Item = ({ checked, value }) => {
  let type = 'text';

  if (value in names) type = 'emoji';

  const Render = byType[type];

  return <Render checked={checked} value={value} />
}
