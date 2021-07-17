function information(name, email, subject, message) {
    document.getElementById("info").innerHTML = "";

    var ele = document.createElement("td");
    var eleText = document.createTextNode(` ${name}`);
    ele.appendChild(eleText)
    document.getElementById("info").appendChild(ele);

    var ele = document.createElement("td");
    var eleText = document.createTextNode(` ${email}`);
    ele.appendChild(eleText)
    document.getElementById("info").appendChild(ele);

    var ele = document.createElement("td");
    var eleText = document.createTextNode(` ${subject}`);
    ele.appendChild(eleText)
    document.getElementById("info").appendChild(ele);

    var ele = document.createElement("td");
    var eleText = document.createTextNode(` ${message}`);
    ele.appendChild(eleText)
    document.getElementById("info").appendChild(ele);

    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
   }