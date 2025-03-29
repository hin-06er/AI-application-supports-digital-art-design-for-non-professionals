<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Design Generator</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
        .container { max-width: 500px; margin: 0 auto; }
        .output { margin-top: 20px; }
        img { max-width: 100%; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
        button { padding: 10px 20px; font-size: 1rem; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <h1>AI Design Generator</h1>
        <input type="file" id="upload" accept="image/*"><br><br>
        <button onclick="generateDesign()">Generate Design</button>
        <div class="output" id="output"></div>
    </div>

    <script>
        function generateDesign() {
            const output = document.getElementById('output');
            output.innerHTML = '<p>Generating design...</p>';
            setTimeout(() => {
                const img = document.createElement('img');
                img.src = 'https://via.placeholder.com/400'; 
                output.innerHTML = '';
                output.appendChild(img);
            }, 2000);
        }

        document.getElementById('upload').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const output = document.getElementById('output');
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    output.innerHTML = '';
                    output.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    </script>
</body>
</html>
