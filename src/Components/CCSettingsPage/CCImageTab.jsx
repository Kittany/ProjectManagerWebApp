import React, { Component } from 'react'

export default class CCImageTab extends Component {




    
    render() {
        return (
            <div id="CCImageTab" onClick={e => this.props.selectImage(null)}>
                <div id="CCImageTabChild">
                 <h5 style={{fontFamily:"poppins", fontWeight:"bold", textAlign:"center",color:"white",marginTop:"1%", width:"100%",height:"5%", margin:"0"}}>Please select an image</h5>
                <div id="imagesContainer">
                <div> 
                            <img name="1" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/Y0SNb0G0/001-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="2" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/hv3LwnTr/002-man.png" width={this.props.imageSelected == "https://i.postimg.cc/hv3LwnTr/002-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="3" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/MZsmX7NQ/003-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/MZsmX7NQ/003-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="4" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/X7pc5Z6D/004-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/X7pc5Z6D/004-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="5" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/9FKPYWWX/005-man.png" width={this.props.imageSelected == "https://i.postimg.cc/9FKPYWWX/005-man.png"? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="6" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/qRJ2vqGw/006-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/qRJ2vqGw/006-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="7" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/K8TP9dzP/007-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/K8TP9dzP/007-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="8" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/x87m5RVp/008-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/x87m5RVp/008-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="9" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/xC6MJQx2/009-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/xC6MJQx2/009-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="10" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/RhqfwYyn/010-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/RhqfwYyn/010-woman.png"? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="11" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/q7d8Wjh9/011-man.png" width={this.props.imageSelected == "https://i.postimg.cc/q7d8Wjh9/011-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="12" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/PqzmHY1N/012-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/PqzmHY1N/012-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="13" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/h43VKSQ8/013-man.png" width={this.props.imageSelected == "https://i.postimg.cc/h43VKSQ8/013-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="14" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/ZKBpR16G/014-man.png" width={this.props.imageSelected == "https://i.postimg.cc/ZKBpR16G/014-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="15" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/Nf3Trp45/015-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/Nf3Trp45/015-woman.png"? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="16" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/Mp1B0VPt/016-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/Mp1B0VPt/016-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="17" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/Jhmkp0S8/017-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/Jhmkp0S8/017-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="18" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/TP9WFGXD/018-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/TP9WFGXD/018-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="19" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/26SBfJzX/019-man.png" width={this.props.imageSelected == "https://i.postimg.cc/26SBfJzX/019-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="20" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/1t7VRHXR/020-man.png" width={this.props.imageSelected == "https://i.postimg.cc/1t7VRHXR/020-man.png"? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="21" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/Y0J4YCQJ/021-man.png" width={this.props.imageSelected == "https://i.postimg.cc/Y0J4YCQJ/021-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="22" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/SRX2nMY6/022-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/SRX2nMY6/022-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="23" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/kMZRkfLf/023-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/kMZRkfLf/023-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="24" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/QxTKsc3s/024-man.png" width={this.props.imageSelected == "https://i.postimg.cc/QxTKsc3s/024-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="25" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/Sxb2KjS9/025-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/Sxb2KjS9/025-woman.png"? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="26" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/SxLXYqRv/026-man.png" width={this.props.imageSelected == "https://i.postimg.cc/SxLXYqRv/026-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="27" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/Jh1sbgB4/027-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/Jh1sbgB4/027-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="28" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/BvMXNgx5/028-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/BvMXNgx5/028-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="29" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/pTrySFZw/029-man.png" width={this.props.imageSelected == "https://i.postimg.cc/pTrySFZw/029-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="30" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/W3ytc1Yh/030-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/W3ytc1Yh/030-woman.png"? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="31" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/Hn7nY1F3/031-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/Hn7nY1F3/031-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="32" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/grFJrBWp/032-man.png" width={this.props.imageSelected == "https://i.postimg.cc/grFJrBWp/032-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="33" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/RZT75w7h/033-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/RZT75w7h/033-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="34" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/J4Z3xftb/034-man.png" width={this.props.imageSelected == "https://i.postimg.cc/J4Z3xftb/034-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="35" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/Cx0GQcf9/035-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/Cx0GQcf9/035-woman.png"? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="36" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/2584z3Gw/036-man.png" width={this.props.imageSelected == "https://i.postimg.cc/2584z3Gw/036-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="37" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/hjXTdwHQ/037-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/hjXTdwHQ/037-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="38" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/44rbzf4f/038-man.png" width={this.props.imageSelected == "https://i.postimg.cc/44rbzf4f/038-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="39" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/25cn3mXf/039-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/25cn3mXf/039-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="40" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/ZRX3FHS7/040-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/ZRX3FHS7/040-woman.png"? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="41" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/2jBnjsQP/041-man.png" width={this.props.imageSelected == "https://i.postimg.cc/2jBnjsQP/041-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="42" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/cCY3D31s/042-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/cCY3D31s/042-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="43" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/MK2Vn9tX/043-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/MK2Vn9tX/043-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="44" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/nc47Bqw2/044-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/nc47Bqw2/044-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="45" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/VkztR5x8/045-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/VkztR5x8/045-woman.png"? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="46" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/qqfhC7sW/046-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/qqfhC7sW/046-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="47" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/cJH8p21k/047-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/cJH8p21k/047-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="48" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/cHttH3nQ/048-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/cHttH3nQ/048-woman.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="49" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/t4DxmpbV/049-man.png" width={this.props.imageSelected == "https://i.postimg.cc/t4DxmpbV/049-man.png"? "15%":"10%"} height="10%" alt=""/>
                            <img name="50" onClick={e => this.props.selectImage(e)} src="https://i.postimg.cc/SKvzkdJS/050-woman.png" width={this.props.imageSelected == "https://i.postimg.cc/SKvzkdJS/050-woman.png"? "15%":"10%"} height="10%" alt=""/>
                </div>
                </div>
                </div>
                 </div>
        )
    }
}
