import styles from "./about.module.scss";

type LogoProps = {
  logo?: string;
  fallbackIcon: string;
  scale?: number;
};

export default function Logo({
  logo,
  fallbackIcon,
  scale,
}: LogoProps) {
  return (
    <span className={styles.logo} aria-hidden="true">
      {logo ? (
        <img
          src={logo}
          alt=""
          width="44"
          height="44"
          loading="lazy"
          style={scale ? { transform: `scale(${scale})` } : undefined}
        />
      ) : (
        <span className={styles.logoFallback}>
          {fallbackIcon}
        </span>
      )}
    </span>
  );
}
