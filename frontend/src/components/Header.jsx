import React from "react";

const Header = () => {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-4xl font-bold text-transparent bg-primary bg-clip-text">
        Todo
      </h1>
      <p className="text-muted-foreground">
        Việc gì cũng khó, nên mình không làm
      </p>
    </div>
  );
};

export default Header;
