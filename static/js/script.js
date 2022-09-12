let loading = document.getElementById("load")

setTimeout(()=>{
    loading.textContent = "loading..."
    setTimeout(()=>{
        loading.textContent = "starting app..."
        setTimeout(()=>{
            location.href = "/home"
        },5000)
    },5000)
},5000) 

// <div class="progress">
//   <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
// </div>