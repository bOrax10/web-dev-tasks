window.onload = function() {
    async function updateData() {
        const response = await fetch("https://www.coursehubiitg.in/api/codingweek/contributions");
        const jsonData = await response.json();
        jsonData.sort((a, b) => b.points - a.points);
        
        let first = document.getElementById("first-details");
        first.innerHTML = jsonData[0]['name'] + ' - ' + jsonData[0]['points'];
        first.style.width += (first.offsetWidth+20) + "px";
        let imgFirst = document.getElementById("img-1")
        console.log('"' + jsonData[0]['avatar'] + '"');
        imgFirst.src = jsonData[0]['avatar'];
        console.log(first.innerHTML);

        let second = document.getElementById("second-details");
        second.innerHTML = jsonData[1]['name'] + ' - ' + jsonData[1]['points'];
        second.style.width += (second.offsetWidth+20) + "px";
        let imgSecond = document.getElementById("img-2")
        imgSecond.src = jsonData[1]['avatar'];
        console.log(second.innerHTML);

        let third = document.getElementById("third-details");
        third.innerHTML = jsonData[2]['name'] + ' - ' + jsonData[2]['points'];
        third.style.width += (third.offsetWidth+20) + "px";
        let imgThird = document.getElementById("img-3")
        imgThird.src = jsonData[2]['avatar'];
        console.log(third.innerHTML);

        let maxWidth = Math.max(second.offsetWidth, third.offsetWidth);
        console.log(maxWidth);
        
        let secondDiv = document.getElementById("second-div")
        console.log(secondDiv.style.width);
        let thirdDiv = document.getElementById("third-div");
        secondDiv.style.width=(maxWidth+1)+"px";
        thirdDiv.style.width=(maxWidth+1)+"px"; 

        for (let i = 4; i <= jsonData.length; i++) {
			let div = document.createElement("div");
			div.setAttribute("class", "after-top-3");
			div.setAttribute("id", "4th");

			let leftDiv = document.createElement("div");
			leftDiv.setAttribute("class", "left");

			let rankDiv = document.createElement("div");
			rankDiv.setAttribute("class", "after-top-3-rank");
			rankDiv.textContent = i;

			let avatarDiv = document.createElement("div");
			avatarDiv.setAttribute("class", "after-top-3-avatar");

			let img = document.createElement("img");
			img.setAttribute("src", jsonData[i-1]['avatar']);
			img.setAttribute("alt", "");

			avatarDiv.appendChild(img);

			let nameDiv = document.createElement("div");
			nameDiv.setAttribute("class", "after-top-3-name");
			nameDiv.textContent = jsonData[i-1]['name'];

			leftDiv.appendChild(rankDiv);
			leftDiv.appendChild(avatarDiv);
			leftDiv.appendChild(nameDiv);

			let rightDiv = document.createElement("div");
			rightDiv.setAttribute("class", "right");

			let scoreDiv = document.createElement("div");
			scoreDiv.setAttribute("class", "after-top-3-score");
			scoreDiv.textContent = jsonData[i-1]['points'];

			rightDiv.appendChild(scoreDiv);

			div.appendChild(leftDiv);
			div.appendChild(rightDiv);

			document.body.appendChild(div);

        }
          
    }
  
    updateData();
};
  