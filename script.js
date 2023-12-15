document.addEventListener("DOMContentLoaded", function () {
    // Function to simulate typing animation
    function typeText(element, text, speed) {
        let index = 0;
        const intervalId = setInterval(function () {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, speed);
    }

    // Get the greeting element
    const greetingElement = document.querySelector(".message");

    // Start typing animation on the greeting element
    typeText(greetingElement, "What's up, Aishah?", 100);

    const addButton = document.getElementById("addButton");
    const todoList = document.getElementById("todoList");

    addButton.addEventListener("click", function () {
        addListItem();
    });

    function addListItem() {
        // Create a new list item
        const listItem = document.createElement("li");

        // Add contenteditable attribute to the list item
        listItem.setAttribute("contenteditable", "true");

        // Append the new list item to the todo list
        todoList.appendChild(listItem);

        const spaceElement = document.createTextNode('\u00A0');
        listItem.appendChild(spaceElement);

        // Focus on the content-editable element to move the cursor there
        listItem.focus();

        // Add a keydown event listener to the list item
        listItem.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                // Prevent the default behavior of the Enter key
                event.preventDefault();

                // Add an unchecked checkbox icon
                const uncheckedIcon = document.createElement("i");
                uncheckedIcon.classList.add("fa-regular", "fa-square");
                listItem.appendChild(uncheckedIcon);

                // Remove the keydown event listener
                listItem.removeEventListener("keydown", handleEnterKey);

                // Add a click event listener to the list item
                listItem.addEventListener("click", function () {
                    // Toggle between unchecked and checked icons
                    if (uncheckedIcon.classList.contains("fa-square")) {
                        uncheckedIcon.classList.remove("fa-square");
                        uncheckedIcon.classList.add("fa-square-check");
                        listItem.style.textDecoration = "line-through";

                        // Move the checked item to the bottom
                        todoList.appendChild(listItem);
                    } else {
                        uncheckedIcon.classList.remove("fa-square-check");
                        uncheckedIcon.classList.add("fa-square");
                        listItem.style.textDecoration = "none";
                    }
                });

                // Trigger the blur event to save the contenteditable changes
                listItem.blur();
            }
        });

        // Add a keydown event listener for handling the Enter key
        listItem.addEventListener("keydown", handleEnterKey);

        function handleEnterKey(event) {
            if (event.key === "Enter") {
                // Prevent the default behavior of the Enter key
                event.preventDefault();
            }
        }
    }
});
