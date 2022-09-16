import React,{useState,useEffect} from "react";
import './Dashboard.css'
import axios from 'axios';
import Image from '../img/img.jpg'

const Dashboard = () => {

    async function fetchData() {
     try{
const response = await fetch(
          `http://localhost:4000/api/auth/user`, {
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
          });
          const data= await response.json();
          console.log(data);
} catch(err){
    console.log(err);
}
    
      }
    

    useEffect(()=>{
    
        fetchData();
      },[])





      
  return (
    <>
    <div className='dashboard-container'>
     <div class="wrapper">
        <div class="sidebar">
        <ul>
                <li>
                    <div className='bitamite-logo'><h1 className='binamite-header'>B</h1></div>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-tachometer-alt"></i></span><br/>
                        <span class="item">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-file-invoice"></i></span><br/>
                        <span class="item">Invoices</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-credit-card"></i></span><br/>
                        <span class="item">Payments</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='active'>
                        <span class="icon"><i class="fas fa-user"></i></span><br/>
                        <span class="item">Profile</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fa fa-gear"></i></span><br/>
                        <span class="item">Settings</span>
                    </a>
                </li>
                <div>
        <span class="icon"><i class="fas fa-right-from-bracket"></i></span>
        </div>
            </ul>
        </div>
        </div>
        <div className='container'>
        <h1 style={{paddingTop:'30px'}}>Contractor Profile</h1>
      
            <div className='pro-container'>
                <div className='profile'>
                    <div className='profile-head'>
                        <h3 className='profile-header'>Profile</h3>
                        <span className='item2'><i class="fa fa-angle-up"></i>&nbsp;&nbsp;Manage</span>
                    </div>
                    <div className='profile-inner'>
                        <div className='image'>
                            <img src={Image} className='img-fluid' style={{borderRadius:'100%'}}/>
                        </div>
                        <div>
                            <p className='label'>FULL NAME</p>
                            <p className='label2'>Nikhil Bhindate</p>
                            <p className='label'>USERNAME</p>
                            <p className='label2'>bhindate.nikhil</p>
                            <p className='label'>EMAIL ADDRESS</p>
                            <p className='label2'>nikhilbhindate@octaloop.com</p>
                            <p className='label'>PHONE NUMBER</p>
                            <p className='label2'>7384995155</p>
                            <p className='label'>EXPERTISE</p>
                            <div className='inner-exp'>
                                <p className='label3'>graphic design</p>
                                <p className='label3'>visual design</p>
                                <p className='label3'>user research</p>
                                <p className='label3'>prototyping</p>
                            </div>
                        </div>
                    <div>
                 </div> 
            </div>
            </div>

            <div className='location'>
            <div className='profile-head'>
                    <h3 className='profile-header'>Address</h3>
                    <span className='item2'><i class="fa fa-angle-up"></i>&nbsp;&nbsp;Manage</span>
                </div>
                <div style={{paddingTop:'10px'}}>
                        <p className='label'>TIME ZONE</p>
                        <p className='label2'>UTC+05:30 Mumbai,Kolkata,Chennai,New Delhi</p>
                        <p className='label'>PRIMARY</p>
                        <p className='label2 col-md-8' style={{marginLeft:'-10px'}}>A-83,Second Floor,Pocket D,Okhla Phase II,Okhla Industrial Estate,New Delhi,Delhi 110020</p>
                    </div>
            </div>

            <div className='tax'>
            <div className='profile-head'>
                        <h3 className='profile-header' style={{paddingBottom:'10px'}}>Tax Identification(ID)</h3>
                    </div>
                    <div>
                    <p className='label'>LEGAL TAXPAYER NAME</p>
                            <p className='label2'>Octaloop Technologies Private Limited</p>
                            <p className='label'>PAN NUMBER</p>
                            <p className='label2'>12121212121</p>
                    </div>
            </div>
            <div className='gstin'>
            <div className='profile-head'>
                        <h3 className='profile-header' style={{paddingBottom:'10px'}}>GSTIN</h3>
                    </div>
                    <div>
                    <p className='label'>A Good & Services Identification Number</p>
                    <p className='label'>GSTIN</p>
                            <p className='label2'>121212121212</p>
                           
                    </div>
            </div>
            <div className='w-8ben'>  <div className='profile-head'>
                        <h3 className='profile-header' style={{paddingBottom:'10px'}}>W-BEN</h3>
                    </div>
                    <div>
                    <p className='label'>Legal TaxPayer Name</p>
                            <p className='label2'>Octaloop Technologies Private Limited</p>
                           
                    </div></div>
            <div className='w-9'><div className='profile-head'>
                        <h3 className='profile-header' style={{paddingBottom:'10px'}}>W-9</h3>
                    </div>
                    <div>
                    <p className='label'>Legal TaxPayer Name</p>
                            <p className='label2'>Octaloop Technologies Private Limited</p>
                           
                    </div></div>
            
        </div>
</div>


           


       
        ``
       
    
    
  </div>
    </>
  )
}

export default Dashboard