import analytics from "../analytics"

export default function Home() {
  const handleClick = () => {
    analytics.track('Button Clicked', {
      message: 'Hello World',
    })
  }
  return (
    <div>
      <h1>This is the Home page</h1>
      <button onClick={handleClick}>Click to Send Track Call</button>
    </div>
  )
}
