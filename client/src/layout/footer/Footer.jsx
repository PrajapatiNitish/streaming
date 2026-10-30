import footerstyle from "./Footer.module.css"

export default function Footer() {
  return (
      <footer id={footerstyle.globalfooter}>
        <div id={footerstyle.globalfooter_content}>
          <h2 id={footerstyle.author}>Nitish Prajapati</h2>
          <ul id={footerstyle.globalfooter_lists}>
            Lists
          </ul>
        </div>
      </footer>
  )
}
