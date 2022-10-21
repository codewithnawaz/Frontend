

import React ,{useState} from 'react'


export default function List() {
    const [myStyle, setmyStyle] = useState({
        color:'black',
       
    })

    let toggleStyle1=()=>{
        if(myStyle.color === 'black'){
            setmyStyle({
                color:'red',
                background:'red'
                
                
            })
        }
        else setmyStyle({
            color:'black',
            background:'white'
        })
    }
    let toggleStyle2=()=>{
        if(myStyle.color === 'black'){
            setmyStyle({
                color:'red',
                background:'red'
                
                
            })
        }
        else setmyStyle({
            color:'black',
            background:'white'
        })
    }
    let toggleStyle3=()=>{
        if(myStyle.color === 'black'){
            setmyStyle({
                color:'red',
                background:'red'
                
                
            })
        }
        else setmyStyle({
            color:'black',
            background:'white'
        })
    }
    return (
        <>
        
        <div className="Wrapper">
            <div className="image">
                <img className="img" src="./Images/Pic1.png" alt=" " />
            </div>
            <div className="ImgInfo">
                <p><b>Keith Berry's Virtual Valentines Brainhacking Show</b></p>
                <p1>Mon, Feb 15, 2021 2:30AM IST</p1><br />
                <p2>Starts at $27.55</p2>
                <div className="icons" >
                    <div className="icon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26"  class="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                    </div>
                    <div className="icon2" style={myStyle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30"  onClick={toggleStyle1} class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </div>
                </div>
            </div>
                
        </div>
        <div className="Wrapper">
            <div className="image">
                <img className="img" src="./Images/Pic2.png" alt=" " />
            </div>
            <div className="ImgInfo">
                <p><b>An evening with Kazuo Ishiguro</b></p>
                <p1>Wed, Mar 3, 2021 12:30AM IST</p1><br />
                <p2>Starts at $7.55</p2>
                <div className="icons"  >
                    <div className="icon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                    </div>
                    <div className="icon2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30"  onClick={toggleStyle2}  class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </div>
                </div>
            </div>

        </div> 
        <div className="Wrapper">
            <div className="image">
                <img className="img" src="./Images/Pic3.png" alt=" " />
            </div>
            <div className="ImgInfo">
                <p><b>Valentines Day Virtual Beer Festival</b></p>
                <p1>Sun, Feb 14, 2021 9:30AM IST</p1><br />
                <p2>Starts at $50.00</p2>
                <div className="icons"  >
                    <div className="icon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                    </div>
                    <div className="icon2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" onClick={toggleStyle3} class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

