import { useEffect } from "react";
export default function Posts({ data, setPageNo }) {

  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      console.log(param)
      if (param[0].isIntersecting) {
        observer.unobserve(lastItem);
        setPageNo((pageNo) => pageNo + 1);
      }

    }, { threshold: 1 });

    const lastItem = document.querySelector(".image-posts:last-child");
    if (!lastItem) {
      return;
    }
    observer.observe(lastItem);
    console.log(lastItem);

    return () => {
      if (lastItem) {
        observer.unobserve(lastItem);
        observer.disconnect();
      }
    }

  }, [data])
  return (
    <div className="image-container">
      {
        data.map((d, index) => (
          <img className="image-posts" key={d.id} src={d.download_url} alt="images" />
        ))
      }

    </div>
  )
}