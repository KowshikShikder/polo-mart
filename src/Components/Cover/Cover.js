import React from 'react'
import { Button } from '@material-ui/core'
import './Cover.css'

export default function Cover() {
    return (
        <>
            <div className="cover-parent">
                <div className="cover-img">
                    <img src={`${window.location.origin}/Images/cover.jpg `} alt="" />
                </div>
                <div className="cover" >
                    <div className="text">
                        <p> WE ARE CREATIVE AND DEDICATED </p>
                        <p> Make Your Business <br/> With More Profit </p>

                        <p> Lorem ipsum, dolor djsij vfais hi joj spojs jnioh sit amet conseelit djosjf sjhnif. <br/>
                        Lorem ipsum, dolor sit amet consectetur adipisicing jio jsbhu kuj elit. </p>

                    <div className="button">
                        <button className="btn btn-primary"> Portfolio </button>  <button className="btn btn-success"> Contact Us</button>
                    </div>
                </div>
</div>


            </div>
        </>
    )
}
