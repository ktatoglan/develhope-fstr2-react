import React, { useState } from "react";

const Container = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="bg-white border border-red-500 p-4">
      {title && (
        <h2
          className="text-red-500 text-xl mb-4 cursor-pointer"
          onClick={toggleCollapse}
        >
          {title}
        </h2>
      )}
      {!collapsed && children}
    </div>
  );
};

export default Container;
