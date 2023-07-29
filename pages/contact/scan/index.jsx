const Scan = () => {
  return (
    <div className="text-white h-screen flex flex-col justify-between items-center w-full">
      <nav className="w-2/4 bg-sky-600 font-bold text-lg p-2 text-center uppercase">
        Scan Kontak
      </nav>
      <div className="h-full w-2/4 flex gap-5 flex-col justify-center items-center">
        <p className="font-bold text-lg">Scan your contact</p>
        <img width={100} src="/qr.png" alt="QR-CODE" />
        <p className="text-xs">Lorem ipsum dolor sit amet.</p>
      </div>
      <footer className="w-2/4 bg-sky-600 font-bold text-lg p-2 text-center">
        Copyright @ 2023
      </footer>
    </div>
  );
};

export default Scan;
