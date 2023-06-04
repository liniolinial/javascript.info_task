 // alert(example.offsetParent.id); // main
        // alert(example.offsetLeft); // 180 (note: a number, not a string "180px")
        // alert(example.offsetTop); // 180

        // expand the element to the full content height
        // element.style.height = `${element.scrollHeight}px`;

        let elem = document.body;

        alert(getComputedStyle(elem).width); // show CSS width for elem
        <span id="elem">Hello!</span>


        alert(getComputedStyle(elem).width); // auto