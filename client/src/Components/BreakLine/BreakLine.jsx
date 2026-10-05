import BreakLineStyle from "./BreakLine.module.scss";

export default function BreakLine({ lineName }) {
  return (
    <>
      <div className={BreakLineStyle.lineBreak_container}>
        <div className={BreakLineStyle.lines}></div>
        <p>{lineName}</p>
        <div className={BreakLineStyle.lines}></div>
      </div>
    </>
  );
}
