import { Agenda } from "./sections/Agenda";
import { Cover } from "./sections/Cover";
import { Date } from "./sections/Date";
import { Gifts } from "./sections/Gifts";
import { Location } from "./sections/Location";
import { Message } from "./sections/Message";
import { Timer } from "./sections/Timer";

export default function App() {
  return (
    <div className="max-w-[430px] mx-auto">
      <Cover />
      <Date />
      <Message />
      <Location />
      <Gifts />
      <Agenda />
      <Timer />
    </div>
  );
}
