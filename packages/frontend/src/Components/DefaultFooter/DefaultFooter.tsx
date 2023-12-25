import React, { ReactElement } from "react";
import { FlexboxGrid } from "rsuite";
import { IFooterTypes } from "../footerTypes";

export const DefaultFooter: React.FC<IFooterTypes> = ({ text }: { text: string }): ReactElement => {
  return (
    <>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item>
          <p>{text}</p>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};
