import { Component } from "react";
import "./DestinationStyles.css";
import mountain1 from "../assets/mountain1.jpeg";
import mountain2 from "../assets/mountain2.jpg";
import mountain3 from "../assets/mountain3.webp";
import mountain4 from "../assets/mountain4.jpg";


class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.cName}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="img" />
                    <img src={this.props.img2} alt="img" />
                </div>
            </div>
        )
    }
}
export default DestinationData;