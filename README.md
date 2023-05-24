# webpage-frontend-crc
Help 1:
<h1>You are visitor:</h1>
          <div id="counter">
            <script>
              fetch('https://d503n28gj5.execute-api.us-east-1.amazonaws.com/')
              .then(res => res.json())
              .then(res => {document.getElementById("counter").innerHTML = res.body.count})
              .then(data => console.log(data));
            </script>
          </div>
          
