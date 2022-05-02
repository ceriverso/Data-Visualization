import Layout from "../src/components/Layout";
import Method from "./method";


function Home() {
  const message = "Welcome To My App"
  return (
    <Layout>
      <Method method={message} />
      <p>Home Page</p>
    </Layout>
  )
}

export default Home;