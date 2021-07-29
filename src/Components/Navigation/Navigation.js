import { Button, ButtonGroup } from '@material-ui/core'
import React from 'react'
import './Navigation.css'


export default function Navigation() {


    const closeNav=()=>{
        // document.getElementById('side-nav').style.right="-330px"
        document.getElementById('side-nav').style.right="-350px"
        setTimeout(()=>{
        document.getElementById('side-nav').style.display="none"
        },500)
        document.getElementById('side-nav').style.opacity="1"

    }

    const openNav=()=>{
        // document.getElementById('side-nav').style.right="0px"
        document.getElementById('side-nav').style.display="grid"
        setTimeout(()=>{
        document.getElementById('side-nav').style.right="0px"
            },10)
        document.getElementById('side-nav').style.opacity="1"

    }




    return (
        <>
        <div className="nav-main">
            <div className="logo-parent">
                <div className="logo"> <i class="fas fa-chart-line"></i> </div>
                <div className="name"> Polo Mart </div>


            </div>

            <div className="nav-parent">
                <Button  variant="contained" color="primary"> Home  </Button>
                <Button  variant="contained" color="primary">  Features  </Button>
                <Button  variant="contained" color="primary">  About  </Button>
                <Button  variant="contained" color="primary">  Services  </Button>
                <Button  variant="contained" color="primary">  Contact  </Button>
                <Button  variant="contained" color="primary" onClick={openNav}>  <i className="fas fa-bars"> </i>  </Button>
            </div>

            <div className="side-nav-parent" id="side-nav" >

                <div className="side-nav">
                    <Button  variant="contained" color="primary" onClick={closeNav}> Home  </Button>
                    <Button  variant="contained" color="primary" onClick={closeNav}>  Features  </Button>
                    <Button  variant="contained" color="primary" onClick={closeNav}>  About  </Button>
                    <Button  variant="contained" color="primary" onClick={closeNav}>  Services  </Button>
                    <Button  variant="contained" color="primary" onClick={closeNav}>  Contact  </Button>
                </div>
                
                <div className="nav-close btn btn-dark" onClick={closeNav}>
                    <i class="fas fa-times"></i>
                </div>



            </div>


        </div>
        </>
    )
}
