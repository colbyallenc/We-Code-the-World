var count = 0;
if (window.FileReader) {

    document.getElementById("postpic").onchange = function() {

        var counter = -1,
            file;

        while (file = this.files[++counter]) {

            var reader = new FileReader();

            reader.onloadend = (function(file) {

                return function() {
                    count++;
                    console.log(counter);

if ($('.postimg').length < 5) {


                    var source = /^image/.test(file.type) ? this.result : "http://i.stack.imgur.com/t9QlH.png";
                    console.log($("#postpic"));
                    $('#picGoesHere').append(`<img src="${source}" id="${count}" class="postimg" style="margin:5px; height:100px;"  onclick ="de(event)">`);
                    $('#postpic').clone().appendTo('#picGoesHere').attr('id', `${count}`).attr('class', `${count}`);
}





                };

            })(file);


            reader.readAsDataURL(file);

        }

    };

    document.getElementById("commentpic").onchange = function() {

        var counter = -1,
            file;

        while (file = this.files[++counter]) {

            var reader = new FileReader();

            reader.onloadend = (function(file) {

                return function() {
                    count++;
                    console.log(counter);

if ($('.commentimg').length < 5) {


                    var source = /^image/.test(file.type) ? this.result : "http://i.stack.imgur.com/t9QlH.png";
                    console.log($("#commentpic"));
                    $('#picGoesCom').append(`<img src="${source}" id="${count}" class="commentimg" style="margin:5px; height:100px;"  onclick ="de(event)">`);
                    $('#commentpic').clone().appendTo('#picGoesCom').attr('id', `${count}`).attr('class', `${count}`);
}





                };

            })(file);


            reader.readAsDataURL(file);

        }

    };

}
