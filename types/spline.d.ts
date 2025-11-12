declare module "@splinetool/react-spline" {
  import * as React from "react";

  interface SplineProps extends React.HTMLAttributes<HTMLDivElement> {
    scene: string;
    onLoad?: (splineApp: any) => void;
    onMouseDown?: (event: any) => void;
    onMouseHover?: (event: any) => void;
  }

  const Spline: React.FC<SplineProps>;
  export default Spline;
}
