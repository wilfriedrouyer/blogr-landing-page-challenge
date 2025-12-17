import Infrastructure from "../components/Home/Infrastructure";
import Introduction from "../components/Home/Introduction";
import Tooling from "../components/Home/Tooling";

import '../styles/Home.css'

export default function Home() {
  return (
    <div className="home">
      <Introduction />
      <Infrastructure />
      <Tooling />      
    </div>
  )
}
