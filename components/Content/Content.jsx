import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Content = ({ results }) => {
  return (
    // use Flipmove for animate while load image
    <FlipMove className="px-5 my-10 sm:grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((item) => {
        return <Thumbnail key={item.id} result={item} />;
      })}
    </FlipMove>
  );
};

export default Content;
