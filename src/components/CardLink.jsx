import useStyles from '../hooks/useStyles';

export default function CardLink({
  primaryColor,
  secondaryColor = 'white',
  logoName,
  logo,
  link,
}) {
  const styles = useStyles({ primaryColor, secondaryColor });
  return (
    <a
      href={`http://${link}`}
      target={'_blank'}
      className={`flex h-16 w-full cursor-default items-center gap-2 overflow-hidden rounded-xl border-2 p-2 transition hover:-translate-y-[.1rem] active:ring-2 active:ring-offset-1 sm:w-fit ${styles.CardLink}`}
    >
      <div className="h-10 w-10">{logo}</div>
      <h1 className="text-lg font-medium">{logoName}</h1>
      <a
        href={`http://${link}`}
        className="link-hover truncate"
        target={'_blank'}
      >
        {link}
      </a>
    </a>
  );
}
