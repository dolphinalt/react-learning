import { useState } from "react";
interface ListGroupProps {
  // list the parameters for more functionality
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // similar to on click
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  /*
        PROPS                               |       STATE
        Input passed to a component         |       Data managed by a component
        Similar to function arguments       |       Similar to local variables
        Immutable                           |       Mutable
        Every change causes re-render       |       Every change causes re-render
  */
  // When the state changes, update the react DOM.
  const [selectedIndex, setSelectedIndex] = useState(-1); // each component has its own state. Therefore if there is a 2nd ListGroup, it will have its own state

  const getMessage = () => {
    return items.length === 0 && <p>No irtem found</p>; // If statement in the JSX, move it here to have cleaner code
  };

  return (
    // you cannot return multiple elements! therefore you must use a Fragment: [<>]
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}{" "}
        {/* braces help to put non HTML or react components (dynamic components) */}
        {/* the key is so that you can idetnfiy elements in the list */}
      </ul>
    </>
  );
}

export default ListGroup;
