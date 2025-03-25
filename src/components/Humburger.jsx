
export default function Humburger(){
  return (
    <>
      {/* humberger div */}
      <div className="hamburger">
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>


      <style jsx>
         {`
          .hamburger{
            width: 2rem; 
            height : 2rem; 
            display : flex;
            gap: 2px;
            justify-content; space-around; 
            flex-flow : column nowrap; 
            z-index: 10; 
             
            }

          .burger{
            width : 25px ; 
            height : 4px ; 
            border-radius : 10px ; 
            background: linear-gradient(90deg, #0CFAF5 0.1%, #8766E1 22.24%, rgba(220, 0, 211, 0.73) 72.69%); 
          }  
          
         `}         
      </style>
    </>
  )
}