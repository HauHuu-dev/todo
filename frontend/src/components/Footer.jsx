import React, { act } from "react";

const Footer = ({ completedTaskCount = 0, activedTaskCount = 0 }) => {
  return (
    <>
      {completedTaskCount + activedTaskCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {(completedTaskCount > 0 && (
              <>
                Tuyệt vời! Bạn đã hoàn thành {completedTaskCount} việc
                {activedTaskCount > 0 &&
                  `, còn ${activedTaskCount} việc nữa thôi!`}
              </>
            )) ||
              (activedTaskCount > 0 && (
                <>
                  Hãy bắt đầu {activedTaskCount} việc
                  {completedTaskCount > 0 &&
                    `, bạn đã hoàn thành ${completedTaskCount}!`}
                </>
              ))}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
