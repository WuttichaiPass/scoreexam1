import React,{Component} from 'react';

class Management extends Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="card text-center" >
                        <div className="card-body">
                            <h5 className="card-header">จัดการ COD</h5>
                        </div>
                    <div className="card-body">
                        <div className="form-group row col-md-12">
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option selected>ประเภทลูกค้า</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="สาขา"/>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="คันหาบาร์โค้ด"/>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option selected>ทั้งหมด</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="form-group row col-md-12" style={{marginTop: "15px"}} >
                                <div className="container"> 
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="คันหาด้วยเลขบัตรประชาชน/เบอร์โทรศัพท์"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row"style={{marginTop: "10px"}} >
                            <div className="col-md-5">
                                <label>ตั้งแต่วันที่เปิดบิล</label>
                            </div>
                            <div className="col-md-6">
                                <label>ถึงวันที่เปิดบิล</label>
                            </div>
                        </div>
                        <div className="form-group row " style={{marginTop: "10px"}}>
                            <div className="form-check col-md-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                                <label>
                                    วันที่ปัจจุบัน
                                </label>
                            </div>
                            
                            <div className="col-md-1">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>วัน</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>เดือน</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>ปี</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-md-1">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>วัน</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>เดือน</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>ปี</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row" style={{marginTop:10}}>
                        <div className="col-xl-12"> 
                            <button type="button" class="btn btn-dark">
                                <i class="fas fa-search"></i> </button>{"                          "}
                            <button type="button" class="btn btn-light" data-mdb-ripple-color="dark">
                                <i class="fas fa-undo"></i></button>
                        </div>
                    </div>
                <hr/>   
                </div>
                <div className="form-group row" style={{marginTop: "30px"}} >
                    <div className="col-md-4">
                        <button type="button" className="btn btn-primary btn-rounded"><h5>จัดการสถานะหลายรายการ</h5></button>
                    </div>
                </div>

                <table className="table" style={{marginTop: "30px"}}>
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">พนักงานโอนเงินเข้าแล้ว</th>
                            <th scope="col">หมายเลขโทรศัพท์</th>
                            <th scope="col">ข้อมูลผู้ส่ง</th>
                            <th scope="col">เลขพัดสดุ ฯ</th>
                            <th scope="col">จำนวนเงิน COD</th>
                            <th scope="col">สถานะ COD</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <th scope="row" align="center"><input type="checkbox" className="form-check-input" id="exampleCheck1"></input></th>
                                
                                <td>095-156-4311</td>
                                <td>นาย วุฒิชัย อ่ำอ่อน</td>
                                <td>15466498461615</td>
                                <td> 23445 บาท</td>
                                <td align="center"><button type="button" className="btn btn-success btn-rounded">โอนแล้ว</button></td>
                                <td><button type="button" className="btn btn-primary btn-rounded">จัดการ</button></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <th scope="row" align="center"><input type="checkbox" className="form-check-input" id="exampleCheck1"></input></th>
                                
                                <td>095-156-4311</td>
                                <td>นาย วุฒิชัย อ่ำอ่อน</td>
                                <td>15466498461615</td>
                                <td> 23445 บาท</td>
                                <td><button type="button" className="btn btn-danger btn-rounded">ยังไม่ได้โอน</button></td>
                                <td><button type="button" className="btn btn-primary btn-rounded">จัดการ</button></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <th scope="row" align="center"><input type="checkbox" className="form-check-input" id="exampleCheck1"></input></th>
                                
                                <td>095-156-4311</td>
                                <td>นาย วุฒิชัย อ่ำอ่อน</td>
                                <td>15466498461615</td>
                                <td> 23445 บาท</td>
                                <td align="center"><button type="button" className="btn btn-success btn-rounded">โอนแล้ว</button></td>
                                <td><button type="button" className="btn btn-primary btn-rounded">จัดการ</button></td>
                            </tr>
                        </tbody>
                </table>
            </div>
        </div>
        )
    }
}
export default Management
