import Card from "./components/card";
import Header from "./components/Header";
import TodoContainer from "./components/Todocontainer";



function App() {
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header></Header>
        <div className="flex justify-between gap-5 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} h1={"23°"} p={"Chennai"}></Card>
          <Card bgcolor={"#FC6662"} h1={"20 December"} p={"14:02:33"}></Card>
          <Card bgcolor={"#FCA301"} h1={"Built Using"} p={"React"}></Card>
        </div>


        <TodoContainer></TodoContainer>
        
        
      </div>
    </div>

  );
}

export default App;
