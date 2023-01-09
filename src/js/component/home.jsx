import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	const [color1,setColor1]= useState("btn-secondary");
	const [color2,setColor2]= useState("btn-secondary");
	const [color3,setColor3]= useState("btn-secondary");
	
	function encenderRojo() {
        if(color1 === "btn-danger"){
            setColor1("btn-secondary")
        }else if(color1 === "btn-secondary"){
        setColor1("btn-danger");
		setColor2("btn-secondary");
		setColor3("btn-secondary");
    }
}

    function encenderAmarillo() {
    if(color2 === "btn-warning"){
        setColor2("btn-secondary")
    }else if(color2 === "btn-secondary"){
        setColor2("btn-warning");
		setColor1("btn-secondary");
		setColor3("btn-secondary");
}
}

    function encenderVerde() {
    if(color3 === "btn-success"){
        setColor3("btn-secondary")
    }else if(color3 === "btn-secondary"){
        setColor3("btn-success");
		setColor1("btn-secondary");
		setColor2("btn-secondary");
}
}

	return (
		<div className="col-12">
			<div className="w-25 h-auto p-1 d-flex flex-column" style={{
      backgroundImage: `url("https://www.nascia.com/wp-content/uploads/2018/07/semaforo-2.jpg")` 
    }}>
				<button className={"btn rounded-circle border-danger m-auto mt-3 "+color1} style={{width: 55, height: 55,}} onClick={encenderRojo}></button>
				<button className={"btn rounded-circle border-warning p-1 m-auto mt-3 "+color2} style={{width: 55, height: 55,}} onClick={encenderAmarillo}></button>
				<button className={"btn rounded-circle border-warning p-1 m-auto mt-3 "+color3} style={{width: 55, height: 55,}} onClick={encenderVerde}></button>
			</div>
		</div>
	);
};

export default Home;
