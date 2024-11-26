import { useEffect, useState } from "react";
import Posts from "./Posts";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((res) => res.json())
      .then((data) => setData((oldValue) => [...oldValue, ...data]))
      .catch((err) => console.log('error occurred'));

  }, [pageNo])

  return (
    <div className="container">
      <Posts data={data} setPageNo={setPageNo} />
    </div>
  )
}

export default InfiniteScroll;