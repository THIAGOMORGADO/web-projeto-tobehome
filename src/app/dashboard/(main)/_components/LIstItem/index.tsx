import React from "react";

// Tipagem das props que o componente receberá
interface ListItemProps {
  title: string; // Define que a prop 'title' será do tipo string
}

const ListItem: React.FC<ListItemProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ListItem;
