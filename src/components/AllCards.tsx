import FlashCard from "./FlashCard"
import Header from './Header'
import Intro from "./Intro";

function AllCards() {

  return (
    <section className='flex  flex-col items-center justify-center '>
      <Header />
      <section className="mt-[50px]">
        <FlashCard />
      </section>
      <section className="m-[50px] mb-[50px]">
        <Intro />
      </section>
    </section>
    
  )
}

export default AllCards;