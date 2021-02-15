import React, { Component } from 'react'

export default class CCImageTab extends Component {




    
    render() {
        return (
            <div id="CCImageTab" onClick={e => this.props.selectImage(null)}>
                <div id="CCImageTabChild">
                 <h5 style={{fontFamily:"poppins", fontWeight:"bold", textAlign:"center",color:"white",marginTop:"1%", width:"100%",height:"5%", margin:"0"}}>Please select an image</h5>
                <div id="imagesContainer">
                <div> 
                            <img name="1" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/mz0FrbSW" width={this.props.imageSelected == 1? "15%":"10%"} height="10%" alt=""/>
                            <img name="2" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/K3B3kd9k" width={this.props.imageSelected == 2? "15%":"10%"} height="10%" alt=""/>
                            <img name="3" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/14qqjq9m" width={this.props.imageSelected == 3? "15%":"10%"} height="10%" alt=""/>
                            <img name="4" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/HV1yDkxQ" width={this.props.imageSelected == 4? "15%":"10%"} height="10%" alt=""/>
                            <img name="5" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/ZCPyTzBX" width={this.props.imageSelected == 5? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="6" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/CZ2RvFXn" width={this.props.imageSelected == 6? "15%":"10%"} height="10%" alt=""/>
                            <img name="7" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/K1Z3jptj" width={this.props.imageSelected == 7? "15%":"10%"} height="10%" alt=""/>
                            <img name="8" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/Lgth6jXj" width={this.props.imageSelected == 8? "15%":"10%"} height="10%" alt=""/>
                            <img name="9" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/S2zJ3BbT" width={this.props.imageSelected == 9? "15%":"10%"} height="10%" alt=""/>
                            <img name="10" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/Fk574T99" width={this.props.imageSelected == 10? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="11" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/qNjh3cGL" width={this.props.imageSelected == 11? "15%":"10%"} height="10%" alt=""/>
                            <img name="12" onClick={e => this.props.selectImage(e)} src={'https://postimg.cc/nsrsYsRt'} width={this.props.imageSelected == 12? "15%":"10%"} height="10%" alt=""/>
                            <img name="13" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/14w8H1H4" width={this.props.imageSelected == 13? "15%":"10%"} height="10%" alt=""/>
                            <img name="14" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/bsPsVVCg" width={this.props.imageSelected == 14? "15%":"10%"} height="10%" alt=""/>
                            <img name="15" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/xcPqwGB2" width={this.props.imageSelected == 15? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="16" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/WdbtTFPJ" width={this.props.imageSelected == 16? "15%":"10%"} height="10%" alt=""/>
                            <img name="17" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/yDQxd1Vp" width={this.props.imageSelected == 17? "15%":"10%"} height="10%" alt=""/>
                            <img name="18" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/3ykR0sN8" width={this.props.imageSelected == 18? "15%":"10%"} height="10%" alt=""/>
                            <img name="19" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/Z9Xq8wvr" width={this.props.imageSelected == 19? "15%":"10%"} height="10%" alt=""/>
                            <img name="20" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/47txBppj" width={this.props.imageSelected == 20? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="21" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/jn4drKgX" width={this.props.imageSelected == 21? "15%":"10%"} height="10%" alt=""/>
                            <img name="22" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/30TJ6WBN" width={this.props.imageSelected == 22? "15%":"10%"} height="10%" alt=""/>
                            <img name="23" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/vDrmnLYV" width={this.props.imageSelected == 23? "15%":"10%"} height="10%" alt=""/>
                            <img name="24" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/3d3xF4Nb" width={this.props.imageSelected == 24? "15%":"10%"} height="10%" alt=""/>
                            <img name="25" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/TpQY7dW2" width={this.props.imageSelected == 25? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="26" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/756PjFg3" width={this.props.imageSelected == 26? "15%":"10%"} height="10%" alt=""/>
                            <img name="27" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/5XR9Js3Z" width={this.props.imageSelected == 27? "15%":"10%"} height="10%" alt=""/>
                            <img name="28" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/Mcf6p13X" width={this.props.imageSelected == 28? "15%":"10%"} height="10%" alt=""/>
                            <img name="29" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/mzxbzhKj" width={this.props.imageSelected == 29? "15%":"10%"} height="10%" alt=""/>
                            <img name="30" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/7Ggqgwkk" width={this.props.imageSelected == 30? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="31" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/30YY1V8D" width={this.props.imageSelected == 31? "15%":"10%"} height="10%" alt=""/>
                            <img name="32" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/QKmsymCY" width={this.props.imageSelected == 32? "15%":"10%"} height="10%" alt=""/>
                            <img name="33" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/87jJLJng" width={this.props.imageSelected == 33? "15%":"10%"} height="10%" alt=""/>
                            <img name="34" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/svfZD0YX" width={this.props.imageSelected == 34? "15%":"10%"} height="10%" alt=""/>
                            <img name="35" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/pp059YCB" width={this.props.imageSelected == 35? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="36" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/K1wKfGdk" width={this.props.imageSelected == 36? "15%":"10%"} height="10%" alt=""/>
                            <img name="37" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/FdQYtPFh" width={this.props.imageSelected == 37? "15%":"10%"} height="10%" alt=""/>
                            <img name="38" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/z3FgN1R6" width={this.props.imageSelected == 38? "15%":"10%"} height="10%" alt=""/>
                            <img name="39" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/hJmX5FBC" width={this.props.imageSelected == 39? "15%":"10%"} height="10%" alt=""/>
                            <img name="40" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/G8JHbk9G" width={this.props.imageSelected == 40? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="41" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/6Tt8Y110" width={this.props.imageSelected == 41? "15%":"10%"} height="10%" alt=""/>
                            <img name="42" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/ctx6Cr8j" width={this.props.imageSelected == 42? "15%":"10%"} height="10%" alt=""/>
                            <img name="43" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/G9KHNJW1" width={this.props.imageSelected == 43? "15%":"10%"} height="10%" alt=""/>
                            <img name="44" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/D8z8K4h4" width={this.props.imageSelected == 44? "15%":"10%"} height="10%" alt=""/>
                            <img name="45" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/ZCD0YYY7" width={this.props.imageSelected == 45? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                            <img name="46" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/vgzHJbSv" width={this.props.imageSelected == 46? "15%":"10%"} height="10%" alt=""/>
                            <img name="47" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/68k3RHvC" width={this.props.imageSelected == 47? "15%":"10%"} height="10%" alt=""/>
                            <img name="48" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/FdmHC7GR" width={this.props.imageSelected == 48? "15%":"10%"} height="10%" alt=""/>
                            <img name="49" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/MnMHnkvW" width={this.props.imageSelected == 49? "15%":"10%"} height="10%" alt=""/>
                            <img name="50" onClick={e => this.props.selectImage(e)} src="https://postimg.cc/JyjhQbNv" width={this.props.imageSelected == 50? "15%":"10%"} height="10%" alt=""/>
                </div>
                </div>
                </div>
                 </div>
        )
    }
}
