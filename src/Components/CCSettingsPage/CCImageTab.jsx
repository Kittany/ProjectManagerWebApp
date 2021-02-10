import React, { Component } from 'react'

export default class CCImageTab extends Component {


    render() {
        return (
            <div id="CCImageTab" onClick={e => this.props.selectImage(null)}>
                <div id="CCImageTabChild">
                 <h5 style={{fontFamily:"poppins", fontWeight:"bold", textAlign:"center",color:"white",marginTop:"1%", width:"100%",height:"5%", margin:"0"}}>Please select an image</h5>
                <div id="imagesContainer">
                <div>
                <img name="1" onClick={e => this.props.selectImage(e)} src="Avatars/1.svg" width={this.props.imageSelected == 1? "15%":"10%"} height="10%" alt=""/>
                <img name="2" onClick={e => this.props.selectImage(e)} src="Avatars/2.svg" width={this.props.imageSelected == 2? "15%":"10%"} height="10%" alt=""/>
                <img name="3" onClick={e => this.props.selectImage(e)} src="Avatars/3.svg" width={this.props.imageSelected == 3? "15%":"10%"} height="10%" alt=""/>
                <img name="4" onClick={e => this.props.selectImage(e)} src="Avatars/4.svg" width={this.props.imageSelected == 4? "15%":"10%"} height="10%" alt=""/>
                <img name="5" onClick={e => this.props.selectImage(e)} src="Avatars/5.svg" width={this.props.imageSelected == 5? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                <img name="6" onClick={e => this.props.selectImage(e)} src="Avatars/6.svg" width={this.props.imageSelected == 6? "15%":"10%"} height="10%" alt=""/>
                <img name="7" onClick={e => this.props.selectImage(e)} src="Avatars/7.svg" width={this.props.imageSelected == 7? "15%":"10%"} height="10%" alt=""/>
                <img name="8" onClick={e => this.props.selectImage(e)} src="Avatars/8.svg" width={this.props.imageSelected == 8? "15%":"10%"} height="10%" alt=""/>
                <img name="9" onClick={e => this.props.selectImage(e)} src="Avatars/9.svg" width={this.props.imageSelected == 9? "15%":"10%"} height="10%" alt=""/>
                <img name="10" onClick={e => this.props.selectImage(e)} src="Avatars/10.svg" width={this.props.imageSelected == 10? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                <img  name="11" onClick={e => this.props.selectImage(e)} src="Avatars/11.svg" width={this.props.imageSelected == 11? "15%":"10%"} height="10%" alt=""/>
                <img  name="12" onClick={e => this.props.selectImage(e)} src="Avatars/12.svg" width={this.props.imageSelected == 12? "15%":"10%"} height="10%" alt=""/>
                <img name="13" onClick={e => this.props.selectImage(e)} src="Avatars/13.svg" width={this.props.imageSelected == 13? "15%":"10%"} height="10%" alt=""/>
                <img name="14" onClick={e => this.props.selectImage(e)} src="Avatars/14.svg" width={this.props.imageSelected == 14? "15%":"10%"} height="10%" alt=""/>
                <img name="15" onClick={e => this.props.selectImage(e)} src="Avatars/15.svg" width={this.props.imageSelected == 15? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                <img name="16" onClick={e => this.props.selectImage(e)} src="Avatars/16.svg" width={this.props.imageSelected == 16? "15%":"10%"} height="10%" alt=""/>
                <img name="17" onClick={e => this.props.selectImage(e)} src="Avatars/17.svg" width={this.props.imageSelected == 17? "15%":"10%"} height="10%" alt=""/>
                <img name="18" onClick={e => this.props.selectImage(e)} src="Avatars/18.svg" width={this.props.imageSelected == 18? "15%":"10%"} height="10%" alt=""/>
                <img name="19" onClick={e => this.props.selectImage(e)} src="Avatars/19.svg" width={this.props.imageSelected == 19? "15%":"10%"} height="10%" alt=""/>
                <img name="20" onClick={e => this.props.selectImage(e)} src="Avatars/20.svg" width={this.props.imageSelected == 20? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                <img name="21" onClick={e => this.props.selectImage(e)} src="Avatars/21.svg" width={this.props.imageSelected == 21? "15%":"10%"} height="10%" alt=""/>
                <img name="22" onClick={e => this.props.selectImage(e)} src="Avatars/22.svg" width={this.props.imageSelected == 22? "15%":"10%"} height="10%" alt=""/>
                <img name="23" onClick={e => this.props.selectImage(e)} src="Avatars/23.svg" width={this.props.imageSelected == 23? "15%":"10%"} height="10%" alt=""/>
                <img name="24" onClick={e => this.props.selectImage(e)} src="Avatars/24.svg" width={this.props.imageSelected == 24? "15%":"10%"} height="10%" alt=""/>
                <img name="25" onClick={e => this.props.selectImage(e)} src="Avatars/25.svg" width={this.props.imageSelected == 25? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                <img name="26" onClick={e => this.props.selectImage(e)} src="Avatars/26.svg" width={this.props.imageSelected == 26? "15%":"10%"} height="10%" alt=""/>
                <img name="27" onClick={e => this.props.selectImage(e)}src="Avatars/27.svg" width={this.props.imageSelected == 27? "15%":"10%"} height="10%" alt=""/>
                <img name="28" onClick={e => this.props.selectImage(e)} src="Avatars/28.svg" width={this.props.imageSelected == 28? "15%":"10%"} height="10%" alt=""/>
                <img name="29" onClick={e => this.props.selectImage(e)} src="Avatars/29.svg" width={this.props.imageSelected == 29? "15%":"10%"} height="10%" alt=""/>
                <img name="30" onClick={e => this.props.selectImage(e)} src="Avatars/30.svg" width={this.props.imageSelected == 30? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                <img name="31" onClick={e => this.props.selectImage(e)}src="Avatars/31.svg" width={this.props.imageSelected == 31? "15%":"10%"} height="10%" alt=""/>
                <img name="32" onClick={e => this.props.selectImage(e)} src="Avatars/32.svg" width={this.props.imageSelected == 32? "15%":"10%"} height="10%" alt=""/>
                <img name="33" onClick={e => this.props.selectImage(e)} src="Avatars/33.svg" width={this.props.imageSelected == 33? "15%":"10%"} height="10%" alt=""/>
                <img name="34" onClick={e => this.props.selectImage(e)}src="Avatars/34.svg" width={this.props.imageSelected == 34? "15%":"10%"} height="10%" alt=""/>
                <img name="35" onClick={e => this.props.selectImage(e)} src="Avatars/35.svg" width={this.props.imageSelected == 35? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                <img name="36" onClick={e => this.props.selectImage(e)}src="Avatars/36.svg" width={this.props.imageSelected == 36? "15%":"10%"} height="10%" alt=""/>
                <img name="37" onClick={e => this.props.selectImage(e)}src="Avatars/37.svg" width={this.props.imageSelected == 37? "15%":"10%"} height="10%" alt=""/>
                <img name="38" onClick={e => this.props.selectImage(e)}src="Avatars/38.svg" width={this.props.imageSelected == 38? "15%":"10%"} height="10%" alt=""/>
                <img name="39" onClick={e => this.props.selectImage(e)} src="Avatars/39.svg" width={this.props.imageSelected == 39? "15%":"10%"} height="10%" alt=""/>
                <img name="40" onClick={e => this.props.selectImage(e)} src="Avatars/40.svg" width={this.props.imageSelected == 40? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                <img name="41" onClick={e => this.props.selectImage(e)}src="Avatars/41.svg" width={this.props.imageSelected == 41? "15%":"10%"} height="10%" alt=""/>
                <img name="42" onClick={e => this.props.selectImage(e)} src="Avatars/42.svg" width={this.props.imageSelected == 42? "15%":"10%"} height="10%" alt=""/>
                <img name="43" onClick={e => this.props.selectImage(e)} src="Avatars/43.svg" width={this.props.imageSelected == 43? "15%":"10%"} height="10%" alt=""/>
                <img name="44" onClick={e => this.props.selectImage(e)}src="Avatars/44.svg" width={this.props.imageSelected == 44? "15%":"10%"} height="10%" alt=""/>
                <img name="45" onClick={e => this.props.selectImage(e)}src="Avatars/45.svg" width={this.props.imageSelected == 45? "15%":"10%"} height="10%" alt=""/>
                </div>
                <div>
                <img name="46" onClick={e => this.props.selectImage(e)}src="Avatars/46.svg" width={this.props.imageSelected == 46? "15%":"10%"} height="10%" alt=""/>
                <img name="47" onClick={e => this.props.selectImage(e)}src="Avatars/47.svg" width={this.props.imageSelected == 47? "15%":"10%"} height="10%" alt=""/>
                <img name="48" onClick={e => this.props.selectImage(e)}src="Avatars/48.svg" width={this.props.imageSelected == 48? "15%":"10%"} height="10%" alt=""/>
                <img name="49" onClick={e => this.props.selectImage(e)}src="Avatars/49.svg" width={this.props.imageSelected == 49? "15%":"10%"} height="10%" alt=""/>
                <img name="50" onClick={e => this.props.selectImage(e)}src="Avatars/50.svg" width={this.props.imageSelected == 50? "15%":"10%"} height="10%" alt=""/>
                </div>
                </div>
                </div>
                 </div>
        )
    }
}
