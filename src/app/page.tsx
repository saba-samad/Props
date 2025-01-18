

import Props from "./components/Props";

export default function Home() {
  return (
   <>
   <h1 className="font-bold font-3xl text-pink-700">Student Data </h1>
      <h3 className="font-semibold">Student 1</h3>
      <Props  name='Saba'  fatherName='Samad' roolNo='rool no. 121' time="2pm to 5pm"/><br/>
      <h3 className="font-semibold">Student 2</h3>
      <Props  name='Iqra' fatherName='Samad' roolNo='rool no. 122' time="9am to 10am"/><br/>
      <h3 className="font-semibold">Student 3</h3>
      <Props  name='Sidra' fatherName='Basit' roolNo='rool no. 123' time="2pm to 5pm"/><br/>
      <h3 className="font-semibold">Student 4</h3>
      <Props  name='Tahir' fatherName='Samad' roolNo='rool no. 124'time="7pm to 11pm" /><br/>
   
      
   </>
  
  );
}
