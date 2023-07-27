import React from 'react'

export const Button = (props) => {
    if (props.type === "home-button") {
        return(
                <button className='inquiry-button'>Home</button>
        )
    }
    if (props.type === "app-button") {
        return(
                <button className='inquiry-button'
                style={{
                    // display:"flex",
                    width: "50px",
                    color: "#fff",
                    padding: "7px 12px",
                    backgroundColor:"#96BAF1",
                  }}
                >App</button>
        )
    }
    if (props.type === "price-button") {
        return(
                <button className='inquiry-buttons'>Pricing</button>
                
        )
    }
    if (props.type === "support-button") {
        return(
                <button className='inquiry-buttons'>Support</button>
        )
    }
    if (props.type === "getstarted") {
        return(
                <button className='get-started'
                style={{
                    width: "100px",
                    height: "30px",
                    color: "black",
                    borderRadius: "20px",
                    padding: "8px 13px",
                    border:"1px solid black",
                    fontWeight:"bold",
                    borderBottom:"1px solid black",
                    backgroundColor:"#fff",
                    fontSize:"12px",
        
                  }}
                  >Get Started</button>
        )
    }
    if (props.type === "joinus") {
        return(
                <button 
                style={{
                    display:"flex",
                    width: "130px",
                    height: "30px",
                    color: "white",
                    borderTopRightRadius:"20px",
                    borderBottomRightRadius:"20px",
                    borderTopLeftRadius:"1px",
                    borderBottomLeftRadius:"1px",
                    padding: "8px 1px",
                    border:"1px solid black",
                    backgroundColor:"black",
                    fontSize:"12px",
                    marginTop:"12px",
                    marginRight:"25px"
                  }}
                  >Join our Community</button>
        )
    }
}