import asik from "../assets/asik.svg";
const Content = () => {
  return (
    <div className="flex  flex-col py-2 px-5 w-full h-svh  border">
      <div className="block mx-auto w-lg px-2 py-1  group border transition-all duration-500">
        {/* mulai */}
        <div className="">
          <div className="flex gap-2">
            <img
              src={asik}
              alt=""
              className="group-hover:rotate-180 duration-500 transition"
            />
            <h1>ini adalah contet</h1>
          </div>
          <div>
            <p className="overflow-hidden max-h-0 opacity-0 group-hover:opacity-100 group-hover:max-h-100 transition-all duration-500 ease-in-out">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est
              eveniet saepe quae. Omnis doloribus harum dolores, adipisci
              debitis commodi, ex reprehenderit mollitia, amet perspiciatis
              deleniti. Dolores deleniti accusantium consequatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
