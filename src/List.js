import React, { useState, useEffect } from 'react';

const List = () => {
  const [listItems, setListItems] = useState(Array.from(Array(15).keys()));
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  }

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => [...prevState, ...Array.from(Array(15).keys(),n => n + prevState.length)]);
      setIsFetching(false);
    }, 1000);
  }

  return (
    <>
      <ul className="list-group mb-2">
        {listItems.map((listItem, index) => <li key={index} className="list-group-item">List Item {listItem}</li>)}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </>
  );
};

export default List;