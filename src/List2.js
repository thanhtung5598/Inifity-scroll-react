import InfiniteScroll from 'react-infinite-scroller';
import React, { useState } from 'react';

const List = () => {
  const [listItems, setListItems] = useState(Array.from(Array(15).keys()));

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => [...prevState, ...Array.from(Array(15).keys(),n => n + prevState.length)]);
    }, 1000);
  }
  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchMoreListItems}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        {listItems.map((listItem, index) => <li key={index} className="list-group-item">List Item {listItem}</li>)}
      </InfiniteScroll>
    </>
  );
};

export default List;