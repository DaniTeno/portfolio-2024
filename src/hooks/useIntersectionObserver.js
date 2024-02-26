import { useEffect, useState } from "react";

const placeholderData = {
  nodes: [],
  cb: (e) => console.log(e),
  options: { threshold: [1], rootMargin: '0px' },
}

const useIntersectionObserver = () => {
  const [observationData, setObservationData] = useState(placeholderData)

  useEffect(() => {
    if (!observationData.nodes?.length) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        observationData.cb(entry)
      });
    }, observationData.options
    );

    for (const node of observationData.nodes) {
      observer.observe(node);
    }

    return () => {
      for (const node of observationData.nodes) {
        observer.disconnect(node);
      }
    }
  }, [observationData]);

  return [setObservationData]
}

export default useIntersectionObserver