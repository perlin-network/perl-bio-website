import { BorderRight } from "@material-ui/icons";

let titleTextstyle={
    fontFamily:"Bai Jamjuree, sans serif",
    fontStyle: "normal",
    fontWeight: "bold", 
    fontSize:"72px",
    color:"#91D873"
}
let contentTextStyle={
    ...titleTextstyle,
    fontWeight:"500",
    color:"white",
    fontSize:"24px"
}
let verticalDividerStyle={
    borderLeft:"1px solid #D2D7D4", 
    marginRight:"26px", 
    opacity:0.4
}
let buttonStyle={
    width: "282px",
    height: "66px",
    background: "linear-gradient(135deg, #128D89 0%, #50D19D 100%)",
    borderRadius:"16px"
}
export {titleTextstyle, contentTextStyle, verticalDividerStyle, buttonStyle};