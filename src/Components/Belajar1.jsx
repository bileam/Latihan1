import asik from "../assets/asik.svg";
const Belajar1 = ({ style, children }) => {
  return (
    <div className="min-h-dvh bg-blue-50">
      <div className={`${style} p-2 `}>
        <h1 className="">{children}</h1>
      </div>
      <div className="mt-1 p-2 group border w-70 mx-auto transition-all duration-500 ease-in">
        <div className="flex flex-row justify-between">
          <h1>lihat sekarang</h1>
          <img
            src={asik}
            alt=""
            className="group-hover:rotate-180 transition-all duration-300 ease-in-out"
          />
        </div>
        <p className="overflow-hidden max-h-0 opacity-0 group-hover:opacity-100 group-hover:max-h-100 transition-all duration-500 ease-in-out">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae soluta
          voluptas ab odit, iure ea fugit eligendi inventore facere tempore
          sapiente beatae temporibus sint magni velit quam dicta minima
          deserunt?
        </p>
      </div>
      <div>hallo</div>
    </div>
  );
};
export default Belajar1;
