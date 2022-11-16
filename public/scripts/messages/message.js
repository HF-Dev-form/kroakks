window.addEventListener("DOMContentLoaded", () => {
 

bindBtnMessage();
    
});


function bindBtnMessage(){
    const elements = document.querySelectorAll('.btn-danger');
    const messageContainer = document.querySelector("#message-list-container");
    elements.forEach((elm) => {
        elm.addEventListener('click', function(e){
            e.preventDefault();
            const msgId = e.target.getAttribute('msg-id');
            axios.delete(`/messages/${msgId}`)
                 .then( function(res) {
                    messageContainer.innerHTML = res.data;
                    bindBtnMessage();
                 })
                 .catch(function(err){ console.log(err)})   
        });
    });
}

