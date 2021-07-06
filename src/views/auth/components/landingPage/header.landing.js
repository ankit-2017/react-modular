/* eslint-disable jsx-a11y/anchor-is-valid */
export default function header() {
  return (
    <div className="header-wrapper">
      <div className="left-header">
        <div>Logo</div>
      </div>
      <div className="right-header">
        <div className="steps-dropdown">
          <a href="#" className="dropdown-title">Steps</a>
          <div className="steps-dropdown-items">
            <a href="#">Step1</a>
            <a href="#">Step1</a>
            <a href="#">Step1</a>
          </div>
        </div>
        <div>Services</div>
        <div>Tour</div>
        <div>About Us</div>
      </div>
    </div>
)
}
