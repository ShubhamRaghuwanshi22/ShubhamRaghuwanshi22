import React, { useEffect, useState } from "react";
import iconimage from '../icon.png'
const Component =({data})=>{
  
   const [expand,setExpand] = useState(false)
   const [componentValue,setcomponentValue] = useState("")
   const [expandInner,setExpandInner] = useState(false)
   const [componentInnerValue,setcomponentInnerValue] = useState("")
 
    function handleAccordian(e){
        setcomponentValue(e.target.value)
        setExpand(!expand)
    }
    function handleInnerAccordian(e){
        setcomponentInnerValue(e.target.value)
        setExpandInner(!expandInner)
    }
    return (
       
        <div className="div">
          <h1>{data.data.name}</h1>
            {data.data.items.map((values,keys)=>{
                if(values.type == "folder"){
                    return(
                        <>
                            <div className="div1" key={keys}>  
                             <img src={iconimage} />
                                <button className= "btn" onClick={(e)=>handleAccordian(e)} value={values.name}> {values.name}</button>
                            </div>
                            {componentValue  == values.name && expand ? 
                                values!=undefined && values.items.map((item,index)=>{
                                    return (
                                        <>
                                        <div className="div2" key={index}>
                                          <img src={iconimage} />
                                            <button className= "btn" onClick={(e)=>handleInnerAccordian(e)} value={item.name}> {item.name}  </button>
                                        </div>
                                        {componentInnerValue  == item.name && expandInner ? 
                                           item!=undefined &&  item.items.map((s,index)=>{
                                                return (
                                                    <div className="div2" key={index}>
                                                        <img src={iconimage}  />
                                                        <button  className= "btn" onClick={(e)=>handleInnerAccordian(e)} value={s.name}>{s.name} </button>
                                                    </div>
                                                )
                                            })
                                        :null}
                                        </>
                                    )
                                })
                            :null}
                        </>
                    )
                }
                if(values.type == "file"){
                        return(
                            <>
                            <div className="div1" onClick={handleAccordian} key={keys}> 
                            <img src={iconimage}  />
                                <button  className= "btn" onClick={(e)=>handleAccordian(e)} value={values.name}>
                                  {values.name}
                                </button>
                            </div>
                            {componentValue  == values.name && expand ?<div>{values.name}</div> : null }
                        </>
                        )
                }
            })}
          
         
          
        </div>
    )
}
export default Component