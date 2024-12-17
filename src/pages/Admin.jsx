import React from 'react'
import '../styles/admin.scss'

//icons
import { RiPhoneLine, RiMapPin2Line, RiCalendarLine, RiDeleteBinLine, RiMoneyRupeeCircleLine  } from "@remixicon/react";

function Admin() {
  return (
    <div className="mainn">
  <div className="leadHeader">
      <h4>Clients {">"}</h4>
      <h1 className='adminHeading'>10 Enquiries</h1>
  </div>



  <div className="mainn__table">
    <table className="mainnTable">
      <thead className="mainnTable__head">
          <tr className="mainnTable__head__rows">
              <th>NAME</th>
              <th className="tableHeading borderRight"><RiPhoneLine  className='icon'/> PHONE</th>
              <th className="tableHeading borderRight"><RiMapPin2Line className='icon'/> DESTINATION</th>
              <th className="tableHeading borderRight"><RiMoneyRupeeCircleLine className='icon'/> PRICE</th>
              <th className="tableHeading"><RiCalendarLine className='icon'/> DATE</th>
          </tr>
      </thead>
      <tbody className="mainnTable__body">

          <tr className="mainnTable__body__rows">  
              <td className="nameTd">
                <div className="nameTd__div">
                <div className="nameDiv"><p className="name">Aman Karma</p> <p className="nameId">id</p> </div>
                </div>
              </td>
              <td className="phone clientDetail borderRight">9993800911</td>
              <td className="location clientDetail borderRight">Indore</td>
              <td className="status clientDetail borderRight">₹30000</td>
              <td className="budget clientDetail">07/02/2024</td>
              <td className="status clientDetail" id="actionIcon"> <i className="ri-delete-bin-line"><RiDeleteBinLine/></i> </td>
          </tr>
          
          
  
      </tbody>
       {/* <tfoot>
          <tr>
              <td colspan="3">Total User: 7</td>
          </tr>
      </tfoot>  */}
    </table>
  </div>
  
</div>
  )
}

export default Admin