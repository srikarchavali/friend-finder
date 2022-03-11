import React from 'react';  
import ReactDOM from 'react-dom';  
import styles from  'about.css';
import "./about.css";
       
class About extends React.Component {  
  render() {  
    return (  
      <div>  
      <h1 className={styles.mystyle}>About this app</h1>  
      <p1 className={styles.parastyle}>Connecting people with similar hobbies</p1>
      <p2 className={styles.parastyle2}>Connect Match Enjoy!</p2>
      </div>  
    );  
  }  
}  
export default About;

// const TriangleCorner = () => {
//   return <View style={[styles.triangleCorner, this.props.style]} />;
// };

// StyleSheet.create({
//   triangleCorner: {
//     width: 0,
//     height: 0,
//     backgroundColor: "transparent",
//     borderStyle: "solid",
//     borderRightWidth: 100,
//     borderTopWidth: 100,
//     borderRightColor: "transparent",
//     borderTopColor: "red",
//   },
// });

// const TriangleCornerBottomRight = () => {
//   return <TriangleCorner style={styles.triangleCornerBottomRight} />;
// };

// StyleSheet.create({
//   triangleCornerBottomRight: {
//     transform: [{ rotate: "180deg" }],
//   },
// });