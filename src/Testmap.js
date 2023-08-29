export default function Testmap() {

  var courses = ["Web fundamentals", "Git & GitHub"]
  
  return (
    <>

    { courses.map (e => 
    <> 
    <h2>The course is:</h2>
    <h5>{e}</h5> 
    </> 
    ) }
    
    </>
    
  )
}

