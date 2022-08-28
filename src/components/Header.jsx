export default function Header() {
  return (
    <header className="via-neutral-100 fixed inset-x-0 top-0 z-50 rounded-b-xl bg-opacity-0 shadow backdrop-blur-sm">
      <div className="container flex py-1">
        <div className="mx-auto">
          <div className="h-12 w-12 overflow-hidden rounded-full shadow-md">
            <img
              src="https://unsplash.com/photos/Tn8DLxwuDMA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8Y2F0fGVufDB8fHx8MTY2MDg2NzA1Ng&force=true&w=48"
              alt="Avatar"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
