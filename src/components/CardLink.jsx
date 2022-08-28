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
      className={`flex h-16 cursor-default  items-center gap-2 overflow-hidden rounded-xl border-2 p-2 transition hover:-translate-y-[.1rem] active:ring-2 active:ring-offset-1 ${styles.CardLink}`}
    >
      <div className="h-10 w-10">{logo}</div>
      <div className="overflow-hidden">
        <p className="truncate text-lg font-medium">{logoName}</p>
        <p className="link-hover truncate" target={'_blank'}>
          {link}
        </p>
      </div>
    </a>
  );
}
