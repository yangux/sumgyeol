import "../styles/buttons.css";
export default function Buttons(){
  return(
    <>
    {/* 일반 버튼 */}
    <div className="btn-row">
      <button className="primary">primary</button>
      <button className="info">primary</button>
    </div>
    {/* 색이 없는 라운드 버튼 */}
    <div className="btn-row">
      <button className="plain round">primary</button>
    </div>
    {/* 색 있는 라운드 버튼 */}
    <div className="btn-row">
      <button className="primary round">primary</button>
      <button className="notification round">primary</button>
    </div>
    </>
  )
}