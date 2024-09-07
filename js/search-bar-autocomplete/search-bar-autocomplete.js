// getting all required elements
const searchWrapper = document.querySelector("#search"); // .search-input
const inputBox = document.querySelector("#Search"); // input
const suggBox = document.querySelector(".autocom-box"); // .autocom-box
const icon = document.querySelector("#search-button"); // .icon
//let linkTag = searchWrapper.querySelector("a"); // a
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            //webLink = `https://www.google.com/search?q=${userData}`;
            //linkTag.setAttribute("href", webLink);
            //linkTag.click();
            //Eğer userData suggestionsdaki bir şeye eşit değilse 404 yapıştır.
        }
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }



    if (userData == "Anakart Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/anakart.html")

        }

    }
    if (userData == "Black Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/black.html")

        }

    }
    if (userData == "Blue Keyboard Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/bluekeyboard.html")

        }

    }
    if (userData == "Coding Symbols Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/coding-symbols.html")

        }

    }
    if (userData == "Cyber Security Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/cyber-security.html")

        }

    }
    if (userData == "Data Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/data.html")

        }

    }
    if (userData == "Desktop Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/desktop.html")

        }

    }
    if (userData == "Html Code Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/html-code.html")

        }

    }
    if (userData == "Keyboard Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/keyboard.html")

        }

    }
    if (userData == "Mackbook Code Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/mackbook-code.html")

        }

    }
    if (userData == "Ryzen Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/ryzen.html")

        }

    }
    if (userData == "Satellite Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/satellite.html")

        }

    }
    if (userData == "Server Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/server.html")

        }

    }
    if (userData == "Windows 10 Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/windows10.html")

        }

    }


}








function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        webLink = `https://www.google.com/search?q=${userData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");

    if (selectData == "Anakart Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/anakart.html")

        }
    }
    if (selectData == "Black Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/black.html")

        }
    }
    if (selectData == "Blue Keyboard Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/bluekeyboard.html")

        }
    }
    if (selectData == "Coding Symbols Wallpaper ") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/coding-symbols.html")

        }
    }
    if (selectData == "Data Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/data.html")

        }
    }
    if (selectData == "Html Code Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/html-code.html")

        }
    }
    if (selectData == "Keyboard Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/keyboard.html")

        }
    }
    if (selectData == "Mackbook Code Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/mackbook-code.html")

        }
    }
    if (selectData == "Ryzen CPU Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/ryzen.html")

        }
    }
    if (selectData == "Satellite Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/satellite.html")

        }
    }
    if (selectData == "Server Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/server.html")

        }
    }
    if (selectData == "Windows 10 Wallpaper") {
        icon.onclick = () => {
            window.open("../../pages/Desktop Wallpaper/Photo Detail(Desktop)/windows10.html")

        }
    }

}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}