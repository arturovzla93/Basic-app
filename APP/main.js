$(document).ready(function(){
    $('#Exchange').on('click',()=>{
        $.ajax({
            method: 'GET',
            url:'https://www.breakingbadapi.com/api/quotes',
            success: function(data){
                console.log(data);
                var output='';
                for(i=0; i<data.length;i++){
                    output+=`<div class="quote">
                    <span>${data[i].quote_id}<span><br>
                      <span>${data[i].author}</span><br>
                      <span>${data[i].quote}</span><br>
                    </div><br><br>`;
                }
                $('#output').html(output);
            }
        })
    })
});