import Layout from '../components/shared/Layout';
import React, {useState} from 'react';

function Assignment() {
    const [value, setValue] = useState(false);

    const isStyle = {
        width : "100px",
        height : "100px",
        color : "white",
        backgroundColor : "red"
    }

    function onClick() {
      setValue(value=>!value)
      const isValue = document.getElementById("isValue");

      if (value) {
        isValue.style.backgroundColor = "red";
      } else {
        isValue.style.backgroundColor = "blue";
      }
    }

    return (
        <Layout>
            <div id='isValue' style={isStyle}>{value ? '파란색 !' : '빨간색 !'}</div>
            <button onClick={onClick}>색바꾸기</button>
        </Layout>
    );
}

export default Assignment;