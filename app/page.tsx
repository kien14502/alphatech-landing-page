import HOME_DATA from "@/data/home.json"

export default function Home() {
  return (
    <div className="">
      {HOME_DATA["general-introduction"].items.map((item ,i)=> <div key={i}>
        <div>
          <p>{item.title}</p>
          <p>
              {item.description}
          </p>
        </div>
      </div>)}  
    </div>
  );  
}
