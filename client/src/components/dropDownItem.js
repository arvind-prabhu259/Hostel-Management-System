import { React } from "react";
import { Link } from "react-router-dom";
function DropDownItem(props){
    // path = props.path;
    // text = props.text;
    return(
        <li className="dropDownItem">
            <Link to={props.path}>{props.text}</Link>
        </li>
    );
}

export default DropDownItem;