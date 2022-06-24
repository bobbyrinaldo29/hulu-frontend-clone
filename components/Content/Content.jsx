import Thumbnail from "./Thumbnail";

const Content = ({ results }) => {
  return (
    <div className="px-5 my-10 sm:grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((item) => {
        return <Thumbnail key={item.id} result={item} />;
      })}
    </div>
  );
};

export default Content;
