import React from 'react'
import clock from './images/icon-clock.svg'
import etherium from './images/icon-ethereum.svg'
import equilibrium from './images/image-equilibrium.jpg'
import myPic from './images/my-pic.jpg'
import './Nft.css'

function Nft() {
  return (
    <div>
        <card>
        <div class="div-wrap">
        <header>
            <img src={equilibrium} alt="avatar" class="hoto"/>
        </header>
        <div class="text-wrapper">
            <h4 class="eth-head">Equilibrium #3429</h4>
            <p class="eth-p">Our Equilibrium collection promotes balance and calm.</p>
            <div class="eth-house">
                <div class="eth">
                    <p class="eth-pp"><img src={etherium} alt="ethereum" /> &nbsp;0.041 ETH</p>
                </div>
                <div class="days">
                    <img src={clock} alt="clock" />&nbsp; <div class="create">
                        <gabs>3 days left</gabs>
                    </div>
                </div>
            </div>
                
            <div class="my-pic">
                <img src={myPic} alt="mypic" class="gabby"/>
                <div>
                    <span class="create">Creation of</span><span class="jw">&nbsp; Gabrielle Alexander</span>
                </div>
            </div>
        </div>
    </div>
        </card>
    </div>
  )
}

export default Nft