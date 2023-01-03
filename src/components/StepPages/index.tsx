import { useState, useCallback } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./styles.scss";

const pageItems = [
  {
    id: 1,
    page: "First page",
    title: "Therapeutic Area : Oncology",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    page: "Second page",
    title: "Disease : Breast Cancer",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    page: "Third page",
    title: "Details page",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export const StepPages = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleClick = useCallback(
    (id: any) => {
      setExpandedId(id === expandedId ? null : id);
    },
    [expandedId]
  );
  return (
    <div className="wrapper">
      <div className="slider-wrap">
        {pageItems.map((item) => (
          <div key={item.id} className="slider">
            <div className="page-title" onClick={() => handleClick(item.id)}>
              {item.title}
            </div>
            {item.id === expandedId && (
              <div className="content">
                <h1>{item.page}</h1>
                <p>{item.content}</p>
                <Button variant="contained">Next</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
