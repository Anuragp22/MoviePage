
import TagBox from './components/TagBox'


function App() {


  return (
    <>

      <section >
        <div className="grid  px-4 py-8 mx-auto my-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-screen bg-[url('https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F12%2Fdune-2-wraps-filming-news-info-001.jpg?cbr=1&q=90')] bg-no-repeat bg-center bg-cover" >
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-white leading-none md:text-5xl xl:text-6xl ">Dune: Part Two</h1>
            <div className="flex gap-2.5 ">
              <TagBox tag={"TS"} />
              <TagBox tag={"Duration: 167min"} />
              <TagBox tag={"IMDB: N/A"} />
              <TagBox tag={"Genre: Action, Adventure"} />
            </div>
            <p className="max-w-2xl mb-6 font-normal  text-white lg:mb-5 md:text-lg lg:text-xl ">Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family...</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
              Watch Now
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" /> */}
          </div>
        </div>
      </section>

    </>
  )
}

export default App
