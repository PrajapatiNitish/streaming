import bannerstyle from './Banner.module.css'

export default function Banner() {
  return (
    <div id={bannerstyle.banner_container}>
      <div id={bannerstyle.card}>
        <h3>Hello</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}
